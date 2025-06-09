import { Link } from "react-router-dom";
import ToolBar from "./ToolBar";
import Gallery from "./Gallery";
import Counter from "./Counter";
import Form from "./Form";
import MovingDot from "./MovingDot";
import Form2 from "./Form2";
import Form3 from "./Form3";
import List from "./List";
import List2 from "./List2";
import ShapeEditor from "./ShapeEditor";
import CounterList from "./CounterList";
import List3 from "./List3";
import List4 from "./List4";
import BucketList from "./BucketList";
import "../Atv04/Atv04.css";

export default function Atv04() {
    return (
        <div className="atv04">
            <h1 className="atv04-title">Semana 4</h1>
            <ToolBar/>
            <Gallery/>
            <Counter/>
            <Form/>
            <MovingDot/>
            <Form2/>
            <Form3/>
            <List/>
            <List2/>
            <ShapeEditor/>
            <CounterList/>
            <List3/>
            <List4/>
            <BucketList/>
            <Link to='/' className="atv04-back-btn">Voltar</Link>
        </div>
    );
}