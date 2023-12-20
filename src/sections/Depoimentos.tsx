import { ButtonChamada } from "../components/ButtonChamada";
import Depoiment from "../components/Depoiment/Depoiment";

import Slider from "../components/slider/SliderDepoiment";

export default function Depoimentos() {
  const slideContent = [
    <Depoiment
      nome="Matheus"
      image="https://github.com/matheustxr.png"
      depoiment="lorem one shape asthetic, look at him, is that a pride gay flag? parece que alguem gosta de um baseball bat, não é mesmo?"
    />,
    <Depoiment
      nome="Matheus"
      image="https://github.com/matheustxr.png"
      depoiment="lorem one shape asthetic, look at him, is that a pride gay flag? parece que alguem gosta de um baseball bat, não é mesmo?"
    />,
    <Depoiment
      nome="Matheus"
      image="https://github.com/matheustxr.png"
      depoiment="lorem one shape asthetic, look at him, is that a pride gay flag? parece que alguem gosta de um baseball bat, não é mesmo?"
    />,
  ];

  const slideCount = slideContent.length;
  return (
    <section
      className="container py-20 md:px-0 mx-auto flex flex-col items-center text-white"
      data-aos="flip-up"
      data-aos-duration="2000"
    >
      <h1 className="text-[32px] font-bold mb-7 text-center md:hidden block leading-10">
        O QUE{" "}
        <span className="text-gradient">
          O QUE NOSSOS <br /> CLIENTES DIZEM
        </span>
      </h1>
      <h1 className="text-[32px] font-bold mb-7 text-center hidden md:block leading-10">
        O QUE <span className="text-gradient">NOSSOS CLIENTES DIZEM</span>
      </h1>

      <div className="w-[100%] mb-10 px-7">
        <Slider slideContent={slideContent} slideCount={slideCount} />
      </div>
      <ButtonChamada text="QUERO IMPULSIONAR MEU NEGÓCIO" />
    </section>
  );
}
