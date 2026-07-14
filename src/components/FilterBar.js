function FilterBar({ filterOption, onFilterOption }) {
  return (
    <select
      className="filter-bar"
      value={filterOption}
      onChange={(e) => onFilterOption(e.target.value)}
    >
      <option value="all">All notes</option>
      <option value="yellow">Yellow notes</option>
      <option value="orange">Orange notes</option>
      <option value="chartreuse">Green notes</option>
    </select>
  );
}

export default FilterBar;