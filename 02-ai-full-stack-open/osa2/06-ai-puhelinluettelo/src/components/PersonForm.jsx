const PersonForm = ({
  handleSubmit,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <p>
        name: <input value={newName} onChange={handleNameChange} />
      </p>
      <p>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </p>
      <p>
        <button type="submit">add</button>
      </p>
    </form>
  );
};

export default PersonForm;
