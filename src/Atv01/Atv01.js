import { Link } from "react-router-dom";
import MeuLetreiro from "./Letreiro";
import MeuRelogio from "./Relogio";
import "../Atv01/Atv01.css";

export default function Atv01() {
    return (
        <div className="atv01-container">
            <h1 className="atv01-title">Semana 1</h1>
            <div className="atv01-card relogio-card">
                <MeuRelogio/>
            </div>
            <div className="atv01-card letreiro-card">
                <MeuLetreiro/>
            </div>
            <Link to='/' className="atv01-back-btn">Voltar</Link> 
        </div>
    )
}