const Filter = ({ filter, handleFilterChange }) => {
  return (
    <p>
      Filter: <input value={filter} onChange={handleFilterChange} />
    </p>
  );
};

export default Filter;