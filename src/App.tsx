import "./index.css";
import { CardSection } from "./sections/Cards";
import { Crescimento } from "./sections/Crescimento";
/* import { Formulario } from "./sections/Formulario"; */
/* import { Sobre } from "./sections/Sobre"; */
import { TimelineSection } from "./sections/Timeline";
import { Topo } from "./sections/Topo";

import Attention from "./sections/Attention.tsx";
import Clientes from "./sections/Clientes.tsx";
import Depoimentos from "./sections/Depoimentos.tsx";
import Possivel from "./sections/Possivel.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { Potencial } from "./sections/Potencial/index.tsx";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/index.tsx"; // Add this import statement

function App() {
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    // Simule um tempo de carregamento usando um setTimeout
    setTimeout(() => {
      setCarregado(true);
    }, 1000); // Altere o valor aqui para ajustar a duração do carregamento
  }, []);

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
        {!carregado ? (
          <Loading />
        ) : (
          <div className="relative z-50  px-5 md:px-16 lg:px-10 ">
            <Topo></Topo>
            {/* <Formulario></Formulario> */}
            <Potencial></Potencial>
            <TimelineSection></TimelineSection>
            <Crescimento></Crescimento>
            {/* <Sobre></Sobre> */}
            <CardSection></CardSection>

            <Possivel />
            <Depoimentos />
            <Clientes />
            <Attention />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
