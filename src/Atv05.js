import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Remova BrowserRouter daqui se ele estiver

// Importe os componentes da Atividade 5
import Toolbar from './Pages/Atividade5/Toolbar';
import Gallery2 from './Pages/Atividade5/Gallery2';
import Counter from './Pages/Atividade5/Counter';
import Form from './Pages/Atividade5/Form';
import MovingDot from './Pages/Atividade5/MovingDot';
import Form2 from './Pages/Atividade5/Form2';
import Form3 from './Pages/Atividade5/Form3';
import List from './Pages/Atividade5/List';
import List2 from './Pages/Atividade5/List2';
import ShapeEditor from './Pages/Atividade5/ShapeEditor';
import CounterList from './Pages/Atividade5/CounterList';
import List3 from './Pages/Atividade5/List3';
import List4 from './Pages/Atividade5/List4';
import BucketList from './Pages/Atividade5/BucketList';

export default function Atv05() {
  return (
    <div>
      <nav>
        <h3>Atividade 5 Components (dentro de Atv05.js):</h3>
        <ul>
          <li><Link to="toolbar">Toolbar</Link></li> {/* Path relativo */}
          <li><Link to="gallery2">Gallery2</Link></li>
          <li><Link to="counter">Counter</Link></li>
          <li><Link to="form">Form</Link></li>
          <li><Link to="moving-dot">MovingDot</Link></li>
          <li><Link to="form2">Form2</Link></li>
          <li><Link to="form3">Form3</Link></li>
          <li><Link to="list">List</Link></li>
          <li><Link to="list2">List2</Link></li>
          <li><Link to="shape-editor">ShapeEditor</Link></li>
          <li><Link to="counter-list">CounterList</Link></li>
          <li><Link to="list3">List3</Link></li>
          <li><Link to="list4">List4</Link></li>
          <li><Link to="bucket-list">BucketList</Link></li>
        </ul>
      </nav>
      <hr />
      <Routes>
        {/* Paths são relativos ao path onde Atv05 é montado (ex: /atv05/toolbar) */}
        <Route path="toolbar" element={<Toolbar />} />
        <Route path="gallery2" element={<Gallery2 />} />
        <Route path="counter" element={<Counter />} />
        <Route path="form" element={<Form />} />
        <Route path="moving-dot" element={<MovingDot />} />
        <Route path="form2" element={<Form2 />} />
        <Route path="form3" element={<Form3 />} />
        <Route path="list" element={<List />} />
        <Route path="list2" element={<List2 />} />
        <Route path="shape-editor" element={<ShapeEditor />} />
        <Route path="counter-list" element={<CounterList />} />
        <Route path="list3" element={<List3 />} />
        <Route path="list4" element={<List4 />} />
        <Route path="bucket-list" element={<BucketList />} />
        {/* Você pode adicionar uma rota index para /atv05 aqui se desejar */}
        {/* <Route index element={<div>Escolha um componente da Atividade 5</div>} /> */}
      </Routes>
    </div>
  );
}