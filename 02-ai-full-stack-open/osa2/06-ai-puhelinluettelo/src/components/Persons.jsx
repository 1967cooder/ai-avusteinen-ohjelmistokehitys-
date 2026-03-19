const Persons = ({ persons, handleDelete }) => {
  return (
    <>
      {persons.map((person) => (
        <p key={person.name}>
          <span className="name">{person.name}</span>{" "}
          <span className="number">{person.number}</span>{" "}
          <button type="button" onClick={() => handleDelete(person)}>
            Delete
          </button>
        </p>
      ))}
    </>
  );
};

export default Persons;
