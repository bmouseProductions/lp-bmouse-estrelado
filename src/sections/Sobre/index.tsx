import React from "react";
import { ButtonChamada } from "../../components/ButtonChamada";

export const Sobre = () => {
  return (
    <section>
      <div className="container m-auto py-20 text-white text-center flex flex-col gap-10">
        <h1 className="text-3xl font-bold uppercase leading-10">
          <span className="text-[#4BC0EE]">O QUE A </span>BMOUSE PRODUCTIONS
          FAZ?
        </h1>
        <p className="text-lg leading-7">
          A V4 é uma assessoria de marketing especializada em ajudar a sua
          empresa a vender mais.
        </p>
        <p className="text-lg leading-7">
          Fazemos isso através de sólidos processos metodológicos validados na
          última década.
        </p>
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex gap-20 ">
            <ul>
              <li className="text-3xl font-bold text-[#4BC0EE]">+4 bilhoes</li>
              <li className="text-lg">Em vendas para nossos clientes</li>
            </ul>
            <ul>
              <li className="text-3xl font-bold text-[#4BC0EE]">+5534</li>
              <li className="text-lg">Clientes ativos</li>
            </ul>
            <ul>
              <li className="text-3xl font-bold text-[#4BC0EE]">+239</li>
              <li className="text-lg">Escritórios Bmouse Productions</li>
            </ul>
          </div>
          <div className="w-[50%]">
            <ButtonChamada></ButtonChamada>
          </div>
        </div>
      </div>
    </section>
  );
};
