import { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);

  const [newName, setNewName] = useState("");

  return (
    <>
      <section>
        <h2>Phonepook</h2>
        <form>
          <p>
            name: <input />
          </p>
          <p>
            <button type="submit">add</button>
          </p>
        </form>
      </section>
      <section>
        <h2>Numbers</h2>
      </section>
    </>
  );
};

export default App;
