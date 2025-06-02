import { Route, Routes } from 'react-router-dom'; // Remova BrowserRouter da importação

import Home from './Home';
import Semana01 from './Semana01';
import Semana02 from './Semana02';
import Semana03 from './Semana03';
import Semana04 from './Semana04'; // <<-- Adicione a importação para Semana04
// import Atividade5 from './Atividade5'; // Remova ou ajuste esta linha se Atividade5 não for um componente de página individual
import Atv01 from './Atv01';
import Atv02 from './Atv02';
import Atv03 from './Atv03';
import Atv04 from './Atv04';
import Atv05 from './Atv05'; // Este é o componente que deve lidar com as sub-rotas da Atividade 5

// Imports dos componentes individuais da Atividade 5 (estes serão usados DENTRO de Atv05.js, não diretamente aqui se Atv05.js for um agregador de rotas)
// Se Atv05.js não for um agregador de rotas, então estas rotas podem ficar aqui, mas a estrutura de Atv05.js precisa ser clara.
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


export default function MinhasRotas() {
  return (
    // Removido o <BrowserRouter> daqui
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/semana01" element={<Semana01 />} />
      <Route path="/semana02" element={<Semana02 />} />
      <Route path="/semana03" element={<Semana03 />} />
      <Route path="/semana04" element={<Semana04 />} /> {/* <<-- Corrigido para renderizar Semana04 */}
      <Route path="/atv01" element={<Atv01 />} />
      <Route path="/atv02" element={<Atv02 />} />
      <Route path="/atv03" element={<Atv03 />} />
      <Route path="/atv04" element={<Atv04 />} />
      
      {/* Se Atv05.js é o componente que gerencia as sub-rotas da Atividade 5 */}
      <Route path="/atv05/*" element={<Atv05 />} /> 
      
      {/* Se Atv05.js NÃO for um gerenciador de sub-rotas, 
        e você quiser definir as rotas da Atividade 5 diretamente aqui, 
        você pode, mas o componente Atv05 na rota acima seria redundante ou precisaria de ajuste.
        Assumindo que Atv05.js cuidará das sub-rotas de /Atividade5 como discutido anteriormente.
        Estas rotas abaixo provavelmente deveriam estar DENTRO do componente Atv05.js
      */}
      {/* <Route path="/Atividade5/toolbar" element={<Toolbar />} />
      <Route path="/Atividade5/gallery2" element={<Gallery2 />} />
      <Route path="/Atividade5/counter" element={<Counter />} />
      <Route path="/Atividade5/form" element={<Form />} />
      <Route path="/Atividade5/moving-dot" element={<MovingDot />} />
      <Route path="/Atividade5/form2" element={<Form2 />} />
      <Route path="/Atividade5/form3" element={<Form3 />} />
      <Route path="/Atividade5/list" element={<List />} />
      <Route path="/Atividade5/list2" element={<List2 />} />
      <Route path="/Atividade5/shape-editor" element={<ShapeEditor />} />
      <Route path="/Atividade5/counter-list" element={<CounterList />} />
      <Route path="/Atividade5/list3" element={<List3 />} />
      <Route path="/Atividade5/list4" element={<List4 />} />
      <Route path="/Atividade5/bucket-list" element={<BucketList />} /> 
      */}

    </Routes>
    // Removido o </BrowserRouter> daqui
  );
}