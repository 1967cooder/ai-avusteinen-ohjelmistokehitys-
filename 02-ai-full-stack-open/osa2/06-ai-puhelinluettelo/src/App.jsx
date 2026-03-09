import { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);

  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
    console.log(newName);
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
        <form onSubmit={addPerson}>
          <p>
            name: <input value={newName} onChange={handleNameChange} />
          </p>
          <p>
            <button type="submit">add</button>
          </p>
        </form>
      </section>
      <section>
        <h2>Numbers</h2>
        <div>
          {persons.map((person) => (
            <p key={person.name}>{person.name}</p>
          ))}
        </div>
      </section>
    </>
  );
};

export default App;
