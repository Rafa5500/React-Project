import { people } from './Data.js';
import { getImageUrl } from './Utils.js';

export default function PeopleList() {
  const listItems = people.map(person => (
    <li key={person.id} className="person-item">
      <img
        src={getImageUrl(person)}
        alt={person.name}
        className="avatar"
      />
      <p>
        <b>{person.name}:</b>
        {' '}{person.profession} conhecido(a) por {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <>
      <h2 className="titulo">🌟 Curiosidades sobre os habitantes de Ooo</h2>
      <div className="toDoList">
        <ul className="people-list">{listItems}</ul>
      </div>
    </>
  );
}
