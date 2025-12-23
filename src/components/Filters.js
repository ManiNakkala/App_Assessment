import { useState } from 'react';

function Filters({ isVisible }) {
  const [expandedSections, setExpandedSections] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const filterSections = [
    { key: 'idealFor', label: 'IDEAL FOR', value: 'All' },
    { key: 'occasion', label: 'OCCASION', value: 'All' },
    { key: 'work', label: 'WORK', value: 'All' },
    { key: 'fabric', label: 'FABRIC', value: 'All' },
    { key: 'segment', label: 'SEGMENT', value: 'All' },
    { key: 'suitableFor', label: 'SUITABLE FOR', value: 'All' },
    { key: 'rawMaterials', label: 'RAW MATERIALS', value: 'All' },
    { key: 'pattern', label: 'PATTERN', value: 'All' }
  ];

  if (!isVisible) return null;

  return (
    <aside className="filters">
      <div className="filter-group">
        <label className="customizable-check">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="label-text">CUSTOMIZBLE</span>
        </label>
      </div>

      {filterSections.map((section) => (
        <div key={section.key} className="filter-section">
          <button
            className="filter-section-header"
            onClick={() => toggleSection(section.key)}
          >
            <span className="filter-section-title">{section.label}</span>
            <svg
              className={`chevron ${expandedSections[section.key] ? 'chevron-up' : ''}`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="4 6 8 10 12 6"/>
            </svg>
          </button>
          <div className="filter-section-content">
            <div className="filter-option">{section.value}</div>
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Filters;
