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
        name:
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={newName}
          onChange={handleNameChange}
        />
      </p>
      <p>
        number:
        <input
          id="number"
          name="number"
          value={newNumber}
          onChange={handleNumberChange}
        />
      </p>
      <p>
        <button type="submit">add</button>
      </p>
    </form>
  );
};

export default PersonForm;
