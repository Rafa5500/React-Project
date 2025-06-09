import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import ToDoList from "./ToDoList";
import PackingList from "./PackingList";
import PeopleList from "./PeopleList";
import Recipe from "./Recipe";
import TeaSet from "./TeaSet";
import "../Atv03/Atv03.css";

export default function Atv03() {
    return (
        <div className="atv03">
            <h1 className="atv03-title">Semana 3</h1>
            <Gallery/>
            <ToDoList/>
            <PackingList/>
            <PeopleList/>
            <Recipe/>
            <TeaSet/>
            <Link to='/' className="atv03-back-btn">Voltar</Link>
        </div>
    );
}