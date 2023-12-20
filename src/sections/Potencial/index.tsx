import { ButtonChamada } from "../../components/ButtonChamada";

export const Potencial = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="container m-auto py-10 text-white text-center flex flex-col gap-10 aos-init aos-animate"
    >
      <h1 className="text-3xl lg:text-4xl font-bold uppercase leading-10 xl:w-[60%] m-auto">
        <span className="text-gradient">Aproveite o potencial da internet</span>{" "}
        para um crescimento rápido e eficaz.
      </h1>
      <div className="lg:w-[60%] text-center m-auto flex flex-col gap-5 ">
        <p className="text-lg leading-7  text-white">
          Para impulsionar o crescimento do seu negócio, é essencial atrair um
          público maior e{" "}
          <span className="text-[#4bc0ee]">
            implementar uma estratégia eficaz de conversão de leads em clientes
          </span>
        </p>
        <p className="text-lg leading-7  text-white">
          {" "}
          E, nisso, a Bmouse Productions{" "}
          <span className="text-[#4bc0ee]">vai te ajudar.</span>
        </p>
      </div>
      <ButtonChamada text="QUERO CRESCER MEU NEGÓCIO" />
    </div>
  );
};
