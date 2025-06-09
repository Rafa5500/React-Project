import { Link } from "react-router-dom";
import "../Atv05/Atv05.css";
import FormQuiz from "./FormQuiz";
import FormTicket from "./FormTicket";
import Accordion from "./Accordion";
import ContactList from "./ContactList";

export default function Atv04() {
    return (
        <div className="atv05">
            <h1 className="atv05-title">Semana 5</h1>
            <FormQuiz/>
            <FormTicket/>
            <Accordion/>
            <ContactList/>
            <Link to='/' className="atv05-back-btn">Voltar</Link>
        </div>
    );
}