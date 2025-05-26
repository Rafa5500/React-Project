import { Link } from "react-router-dom";
import Gallery from "./Pages/Atividade4/Gallery";
import ToDoList from "./Pages/Atividade4/ToDoList";
import PackingList from "./Pages/Atividade4/PackingList";
import PeopleList from "./Pages/Atividade4/PeopleList";
import Recipe from "./Pages/Atividade4/Recipe";
import TeaSet from "./Pages/Atividade4/TeaSet";


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