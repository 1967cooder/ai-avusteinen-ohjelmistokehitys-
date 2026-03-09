import { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const handleNameChange = (event) => {
    setNewName(event.target.value);
    console.log(newName);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    // Check if name already exists
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} on jo puhelinluettelossa`);
      return;
    }

    setPersons(persons.concat({ name: newName }));
    setNewName("");
  };

  return (
    <>
      <section>
        <h2>Phonepook</h2>
        <p>
          Filter: <input value={filter} onChange={handleFilterChange} />
        </p>
        <h2>Add a new</h2>
        <form onSubmit={addPerson}>
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
      </section>
      <section>
        <h2>Numbers</h2>
        <div>
          {personsToShow.map((person) => (
            <p key={person.name}>
              <span className="name">{person.name}</span>{" "}
              <span className="number">{person.number}</span>
            </p>
          ))}
        </div>
      </section>
    </>
  );
};

export default App;
