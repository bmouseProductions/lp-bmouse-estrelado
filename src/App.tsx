// src/App.tsx

import "./index.css";
import { CardSection } from "./sections/Cards";
import { Crescimento } from "./sections/Crescimento";
import { Formulario } from "./sections/Formulario";
import { Sobre } from "./sections/Sobre";
import { TimelineSection } from "./sections/Timeline";
import { Topo } from "./sections/Topo";

function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden ">
        <div className="bg-primary star-field z-10">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>
      </div>
      <div className="relative z-50">
        <Topo></Topo>
        <Formulario></Formulario>
        <TimelineSection></TimelineSection>
        <Crescimento></Crescimento>
        <Sobre></Sobre>
        <CardSection></CardSection>
      </div>
    </>
  );
}

export default App;
