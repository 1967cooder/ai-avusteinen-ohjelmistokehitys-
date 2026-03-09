const Persons = ({ persons }) => {
  return (
    <>
      {persons.map((person) => (
        <p key={person.name}>
          <span className="name">{person.name}</span>{" "}
          <span className="number">{person.number}</span>
        </p>
      ))}
    </>
  );
};

export default Persons;
