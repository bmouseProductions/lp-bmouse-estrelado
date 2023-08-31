// src/App.tsx


import './index.css';
import Attention from './sections/Attention.tsx';
import Clientes from './sections/Clientes.tsx';
import Depoimentos from './sections/Depoimentos.tsx';
import Possivel from './sections/Possivel.tsx';

function App() {

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="bg-primary star-field z-10">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
      
      <div className='relative z-50'>
        <Possivel />
        <Depoimentos />
        <Clientes />
        <Attention />
      </div>
    </div>
  );
}

export default App;
