const Persons = ({ persons, removePerson }) => {
  return (
    <div className="contact-list">
      {persons.map(person => {
        return (
          <div key={person.id} className="contact-item">
            {person.name} {person.number}
            <button onClick={() => removePerson(person.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Persons;
