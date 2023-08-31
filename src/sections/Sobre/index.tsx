import { ButtonChamada } from "../../components/ButtonChamada";

export const Sobre = () => {
  return (
    <section>
      <div className="p-6 container m-auto py-20 text-white text-center flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold uppercase leading-10">
            <span className="text-gradient">O QUE A </span>BMOUSE PRODUCTIONS
            FAZ?
          </h1>
          <p className="text-lg leading-7 text-[#86888D]">
            A V4 é uma assessoria de marketing especializada em ajudar a sua
            empresa a vender mais.
          </p>
          <p className="text-lg leading-7 text-[#86888D]">
            Fazemos isso através de sólidos processos metodológicos validados na
            última década.
          </p>
        </div>

        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-20 ">
            <ul>
              <li className="text-3xl font-bold text-gradient">+4 bilhoes</li>
              <li className="text-lg text-[#86888D]">
                Em vendas para nossos clientes
              </li>
            </ul>
            <ul>
              <li className="text-3xl font-bold text-gradient">+5534</li>
              <li className="text-lg text-[#86888D]">Clientes ativos</li>
            </ul>
            <ul>
              <li className="text-3xl font-bold text-gradient">+239</li>
              <li className="text-lg text-[#86888D]">
                Escritórios Bmouse Productions
              </li>
            </ul>
          </div>
          <div className="lg:w-[50%]">
            <ButtonChamada></ButtonChamada>
          </div>
        </div>
      </div>
    </section>
  );
};
