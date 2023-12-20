import SliderImagem from "../components/slider/SliderClientes";

import { Player } from "@lottiefiles/react-lottie-player";

import rocket from "../assets/rocketAnimation2.json";

import draelis from "../assets/logos/draelis.svg";
import farol from "../assets/logos/farol.svg";
import giolaser from "../assets/logos/giolaser.svg";
import leoni from "../assets/logos/leoni.svg";
//import mImagem from '../assets/logos/.svg'
import mga from "../assets/logos/mid.svg";
import neo from "../assets/logos/neogenetics.svg";
import nova from "../assets/logos/novageracao.svg";
import olha from "../assets/logos/olharcerto.svg";
import patense from "../assets/logos/patense.svg";
import pets from "../assets/logos/petsmellon.svg";
import profat from "../assets/logos/Profat.svg";
import sorridents from "../assets/logos/sorridents.svg";
import transtri from "../assets/logos/transtriangulo.svg";
import whg from "../assets/logos/whg.png";
import zoomies from "../assets/logos/zoomies.svg";
import mira from "../assets/logos/mira.svg";
import docbiz from "../assets/logos/docbiz.svg";
import insti from "../assets/logos/institutosalus.svg";
import lj from "../assets/logos/lj.svg";
//import petisco from '../assets/logos/petisco.svg'
import aligner from "../assets/logos/newaligner.svg";
import salus from "../assets/logos/salus.svg";
import amo from "../assets/logos/amovacinas.svg";
import agro from "../assets/logos/agroecologia.svg";
import { ButtonChamada } from "../components/ButtonChamada";

export default function Clientes() {
  const slideContent = [
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={draelis} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={farol} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={giolaser} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={leoni} alt="" />,
    //<img  className='max-w-[300px] h-28 py-3 mx-5 ' src={mImagem} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={mga} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={neo} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={olha} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={patense} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={pets} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={profat} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={sorridents} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={transtri} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={whg} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={zoomies} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={mira} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={docbiz} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={insti} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={lj} alt="" />,
    //<img  className='max-w-[300px] h-28 py-3 mx-5 ' src={petisco} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={aligner} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={neo} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={olha} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={salus} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={amo} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={nova} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={agro} alt="" />,
  ];

  const slideCount = slideContent.length;

  return (
    <section className="container  py-10 mx-auto flex flex-col items-center gap-5 text-white ">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-32 ">
        <div
          className="flex flex-col gap-3"
          data-aos="zoom-in-right"
          data-aos-duration="2000"
        >
          <h1 className="text-3xl lg:text-[32px] font-bold text-left leading-10">
            A BMOUSE também também desempenhou um{" "}
            <span className="text-gradient">
              papel importante no crescimento de grandes empresas.
            </span>
          </h1>

          <p className="text-lg text-left ">
            Essas grandes empresas confiam na V4 devido ao nosso método
            desenvolvido exclusivamente para performance online.
          </p>
        </div>

        <div data-aos="zoom-in-left" data-aos-duration="2000">
          <Player
            autoplay
            loop
            src={rocket}
            className="md:w-[60%] lg:w-full 2xl:w-[100%] "
          />
        </div>
      </div>

      <div
        className="w-full mt-10 flex flex-col gap-10 items-center mb-10"
        id="sliderClients"
        data-aos="zoom-out-down"
        data-aos-duration="2000"
      >
        <h1 className="text-[32px] font-bold text-center">
          Veja alguns de <span className="text-gradient">nossos clientes:</span>
        </h1>
        <SliderImagem slideContent={slideContent} slideCount={slideCount} />
      </div>

      <ButtonChamada text="QUERO IMPULSIONAR MEU NEGÓCIO" />
    </section>
  );
}
