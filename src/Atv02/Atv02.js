import { Link } from "react-router-dom";
import Contador from "./Contador";
import "../Atv02/Atv02.css";

export default function Atv02() {
    return (
        <div className="atv02-container">
            <h1 className="atv02-title">Semana 2</h1>
            <Contador/>
            <Link to='/' className="atv02-back-btn">Voltar</Link> 
        </div>
    )
}