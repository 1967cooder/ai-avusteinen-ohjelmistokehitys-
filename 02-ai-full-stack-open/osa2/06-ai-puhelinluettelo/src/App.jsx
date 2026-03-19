import { useCallback, useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/personService";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("success");

  const ShowNotification = useCallback((message, type) => {
    setNotificationMessage(message);
    setNotificationType(type);
  }, []);

  const handleNotificationClose = useCallback(() => {
    setNotificationMessage("");
    setNotificationType("success");
  }, []);

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      const updatedPerson = { ...existingPerson, number: newNumber };
      const shouldUpdate = window.confirm(
        `${existingPerson.name} is already added to phonebook, replace the old number with a new number ${newNumber}?`,
      );

      if (shouldUpdate) {
        personService
          .updatePersonNumber(updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== returnedPerson.id ? person : returnedPerson,
              ),
            );
            ShowNotification(
              `Updated ${returnedPerson.name}'s number`,
              "success",
            );
            setNewName("");
            setNewNumber("");
          })
          .catch(() => {
            ShowNotification(
              `Numeron paivitys epaonnistui henkilolle ${existingPerson.name}`,
              "error",
            );
          });
      }

      return;
    }

    const personObject = { name: newName, number: newNumber };

    personService
      .create(personObject)
      .then((addedPerson) => {
        setPersons(persons.concat(addedPerson));
        ShowNotification(`Added ${addedPerson.name}`, "success");
        setNewName("");
        setNewNumber("");
      })
      .catch(() => {
        ShowNotification(
          `Henkilon ${personObject.name} lisaaminen epaonnistui`,
          "error",
        );
      });
  };

  const handleDelete = (p) => {
    if (window.confirm(`Delete ${p.name} ?`)) {
      personService
        .remove(p.id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== p.id));
          ShowNotification(`Deleted ${p.name}`, "success");
        })
        .catch(() => {
          ShowNotification(`Kayttajaa ${p.name} ei loydy taulukosta`, "error");
        });
    }
  };

  return (
    <>
      <section>
        <h2>Phonebook</h2>
        <Notification
          message={notificationMessage}
          type={notificationType}
          onClose={handleNotificationClose}
        />
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <h2>Add a new</h2>
        <PersonForm
          handleSubmit={addPerson}
          newName={newName}
          handleNameChange={handleNameChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange}
        />
      </section>
      <section>
        <h2>Numbers</h2>
        <Persons persons={personsToShow} handleDelete={handleDelete} />
      </section>
    </>
  );
};

export default App;
