import { Player } from "@lottiefiles/react-lottie-player";

import attention from "../assets/attention.json";
import { ButtonChamada } from "../components/ButtonChamada";

export default function Attention() {
  return (
    <section
      className="container  py-10  mx-auto flex flex-col items-center gap-5 text-white  "
      data-aos="zoom-in-up"
      data-aos-duration="2000"
    >
      <Player autoplay loop src={attention} className="w-[50px] " />

      <div className=" flex flex-col items-center gap-5 ">
        <h1 className="text-[35px] text-center font-bold ">
          Agora, <span className="text-red-600">ATENÇÂO</span>
        </h1>
        <h1 className="hidden lg:block text-[32px] text-center font-bold ">
          O que é preciso para contratar os{" "}
          <span className="text-gradient">
            serviços da <br /> bmouse
          </span>
        </h1>
        <h1 className="block lg:hidden text-[26px] text-center font-bold ">
          O que é preciso para contratar os{" "}
          <span className="text-gradient">serviços da bmouse</span>
        </h1>
        <p className="hidden lg:block text-center text-lg">
          Muito simples, basta clicar no botão abaixo e preencher o formulário
          para que nossa <br />
          equipe de especialistas entre em contato com você.
        </p>
        <p className="block lg:hidden text-center text-lg">
          Muito simples, basta clicar no botão abaixo e preencher o formulário
          para que nossa <br />
          equipe de especialistas entre em contato com você.
        </p>
      </div>

      <ButtonChamada text="NÃO QUERO FICAR DE FORA"></ButtonChamada>
    </section>
  );
}
