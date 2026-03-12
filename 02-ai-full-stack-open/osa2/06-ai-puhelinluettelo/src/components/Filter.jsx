const Filter = ({ filter, handleFilterChange }) => {
  return (
    <p>
      Filter: <input id="filter" name="filter" value={filter} onChange={handleFilterChange} />
    </p>
  );
};

export default Filter;