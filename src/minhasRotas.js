import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Semana01 from './Semana01'; // nova página da semana
import Semana02 from './Semana02';
import Semana03 from './Semana03';
import Atv01 from './Atv01';
import Atv02 from './Atv02';
import Atv03 from './Atv03';

export default function MinhasRotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/semana01" element={<Semana01 />} />
        <Route path="/semana02" element={<Semana02 />} />
        <Route path="/semana03" element={<Semana03 />} />
        <Route path="/atv01" element={<Atv01 />} />
        <Route path="/atv02" element={<Atv02 />} />
        <Route path="/atv03" element={<Atv03 />} />
      </Routes>
    </BrowserRouter>
  );
}