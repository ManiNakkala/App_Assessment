import initSqlJs from 'sql.js';

let db = null;
let SQL = null;

/* =========================
   CONFIG
========================= */
const DB_KEY = 'sqliteDb';
const DB_VERSION_KEY = 'sqliteDbVersion';
const DB_VERSION = 'v50-products';

/* =========================
   Helpers
========================= */
function clearOldDatabaseIfNeeded() {
  const savedVersion = localStorage.getItem(DB_VERSION_KEY);
  if (savedVersion !== DB_VERSION) {
    localStorage.removeItem(DB_KEY);
    localStorage.setItem(DB_VERSION_KEY, DB_VERSION);
  }
}

function loadDatabase() {
  const stored = localStorage.getItem(DB_KEY);
  if (!stored) return null;

  const binary = atob(stored);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function saveDatabase() {
  if (!db) return;

  const data = db.export();
  const base64 = btoa(
    String.fromCharCode(...new Uint8Array(data))
  );
  localStorage.setItem(DB_KEY, base64);
}

/* =========================
   Initialize Database
========================= */
export async function initializeDatabase() {
  if (db) return db;

  clearOldDatabaseIfNeeded();

  SQL = await initSqlJs({
    locateFile: file => `https://sql.js.org/dist/${file}`,
  });

  const storedDb = loadDatabase();
  db = storedDb ? new SQL.Database(storedDb) : new SQL.Database();

  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      image_url TEXT NOT NULL,
      is_new INTEGER DEFAULT 0,
      is_out_of_stock INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS wishlist (
      id TEXT PRIMARY KEY,
      product_id TEXT NOT NULL,
      user_session TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(product_id, user_session)
    );
  `);

  const count = db.exec('SELECT COUNT(*) FROM products')[0].values[0][0];
  if (count === 0) insert50Products();

  return db;
}

/* =========================
   Insert EXACTLY 50 Products
========================= */
function insert50Products() {
  const images = [
    'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  for (let i = 1; i <= 50; i++) {
    db.run(
      `INSERT INTO products
       (id, name, image_url, is_new, is_out_of_stock, created_at)
       VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
      [
        i.toString(),
        `Fashion Dress Model ${i}`,
        images[i % images.length],
        i % 4 === 0 ? 1 : 0,
        i % 9 === 0 ? 1 : 0
      ]
    );
  }

  saveDatabase();
}

/* =========================
   Queries
========================= */
export function queryProducts() {
  const res = db.exec('SELECT * FROM products ORDER BY created_at DESC');
  if (!res.length) return [];

  const cols = res[0].columns;
  return res[0].values.map(row =>
    Object.fromEntries(cols.map((c, i) => [c, row[i]]))
  );
}

export function getWishlist(session) {
  const res = db.exec(
    'SELECT product_id FROM wishlist WHERE user_session = ?',
    [session]
  );
  return res.length ? res[0].values.map(v => v[0]) : [];
}

export function addToWishlist(productId, session) {
  db.run(
    `INSERT OR IGNORE INTO wishlist
     (id, product_id, user_session, created_at)
     VALUES (?, ?, ?, CURRENT_TIMESTAMP)`,
    [Date.now().toString(), productId, session]
  );
  saveDatabase();
}

export function removeFromWishlist(productId, session) {
  db.run(
    'DELETE FROM wishlist WHERE product_id = ? AND user_session = ?',
    [productId, session]
  );
  saveDatabase();
}
