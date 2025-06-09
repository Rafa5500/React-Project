import './Atv05.css';
import FormQuiz from './FormQuiz';
import FormTicket from './FormTicket';
import Accordion from './Accordion';
import ContactList from './ContactList';

function Atv05() {
  return (
    <div className="container">
      <h1>Semana 5 - Hora de Aventura</h1>
      <Accordion />
      <FormQuiz />
      <FormTicket />
      <ContactList />
    </div>
  );
}

export default Atv05;
