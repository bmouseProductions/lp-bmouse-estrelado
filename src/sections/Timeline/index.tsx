import Rato from "../../assets/rato.webp";
import { ButtonChamada } from "../../components/ButtonChamada";

export function TimelineSection() {
  return (
    <section className="container mx-auto flex flex-col gap-10  text-white py-10">
      <h1
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="text-3xl lg:text-4xl font-bold uppercase text-center leading-10  m-auto aos-init aos-animate"
      >
        A competitividade do{" "}
        <span className=" text-gradient"> mercado não perdoa </span>Então,{" "}
        <span className=" text-gradient">não fique para trás </span> na corrida
        do sucesso
      </h1>

      <div className="flex flex-col lg:flex-row-reverse items-center justify-between">
        <ul className="w-full flex flex-col lg:w-[50%]">
          <li
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
            className="flex relative flex-col gap-2 aos-init aos-animate"
          >
            <span
              className="absolute left-0 grid justify-center bg-transparent transition-opacity duration-200"
              style={{
                top: "12px",
                width: "12px",
                opacity: 1,
                height: "calc(100% - 12px)",
              }}
            >
              <span className="w-0.5 h-full bg-blue-gray-100"></span>
            </span>
            <div className="flex items-center gap-4 h-3">
              <span className="w-max p-1.5 relative z-[2] flex-shrink-0 rounded-full overflow-hidden text-white bg-[#DC0073]"></span>
              <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-none text-[#4bc0ee]">
                Aumente o seu faturamento e sua visibilidade no mercado
              </h5>
            </div>
            <div className="flex gap-4 pb-8">
              <span
                className="pointer-events-none invisible h-full flex-shrink-0"
                style={{ width: "12px" }}
              ></span>
              <div>
                <p className="block antialiased font-sans font-light text-lg leading-7 text-white mt-5 lg:mt-4">
                  Potencialize seu negócio com estratégias eficazes. Aumente sua
                  receita e destaque-se no mercado com nossa expertise em
                  crescimento empresarial.
                </p>
              </div>
            </div>
          </li>
          <li
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
            className="flex relative flex-col gap-2 aos-init aos-animate"
          >
            <span
              className="absolute left-0 grid justify-center bg-transparent transition-opacity duration-200"
              style={{
                top: "12px",
                width: "12px",
                opacity: 1,
                height: "calc(100% - 12px)",
              }}
            >
              <span className="w-0.5 h-full bg-blue-gray-100"></span>
            </span>
            <div className="flex items-center gap-4 h-3">
              <span className="w-max p-1.5 relative z-[2] flex-shrink-0 rounded-full overflow-hidden text-white bg-[#DC0073]"></span>
              <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-none text-[#4bc0ee]">
                Expanda o seu público e número de clientes
              </h5>
            </div>
            <div className="flex gap-4 pb-8">
              <span
                className="pointer-events-none invisible h-full flex-shrink-0"
                style={{ width: "12px" }}
              ></span>
              <div>
                <p className="block antialiased font-sans font-light text-lg leading-7 text-white mt-5 lg:mt-4">
                  Ampliamos sua base de clientes com estratégias personalizadas,
                  aumentando sua visibilidade e conquistando novos públicos de
                  forma eficaz.
                </p>
              </div>
            </div>
          </li>
          <li
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
            className="flex relative flex-col gap-2 aos-init aos-animate"
          >
            <span
              className="absolute left-0 grid justify-center bg-transparent transition-opacity duration-200"
              style={{
                top: "12px",
                width: "12px",
                opacity: 1,
                height: "calc(100% - 12px)",
              }}
            >
              <span className="w-0.5 h-full bg-blue-gray-100"></span>
            </span>
            <div className="flex items-center gap-4 h-3">
              <span className="w-max p-1.5 relative z-[2] flex-shrink-0 rounded-full overflow-hidden text-white bg-[#DC0073]"></span>
              <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-none text-[#4bc0ee]">
                Passe credibilidade e profissionalismo com um branding completo
              </h5>
            </div>
            <div className="flex gap-4 pb-8">
              <span
                className="pointer-events-none invisible h-full flex-shrink-0"
                style={{ width: "12px" }}
              ></span>
              <div>
                <p className="block antialiased font-sans font-light text-lg leading-7 text-white mt-5 lg:mt-4">
                  Crie uma identidade de marca sólida para transmitir confiança
                  e expertise, estabelecendo sua presença profissional de forma
                  memorável.
                </p>
              </div>
            </div>
          </li>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
            className="text-base md:text-lg leading-7 ms-8 text-white mt-4"
          >
            Seja qual for a sua demanda, a{" "}
            <strong className="text-[#4bc0ee]">
              BMouse conta com um time de especialistas para lhe atender.
            </strong>
          </p>
        </ul>
        <img
          className="lg:w-[50%] xl:w-[45%]"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-anchor-placement="bottom-bottom"
          src={Rato}
          alt="Rato Bmouse"
        />
      </div>
      <ButtonChamada text="QUERO VENCER ESSA CORRIDA" />
    </section>
  );
}
