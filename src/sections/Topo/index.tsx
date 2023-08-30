import Logo from "../../assets/whitelogo-bmouse-5ef2c2f7.svg";
import { ButtonChamada } from "../../components/ButtonChamada";

export const Topo = () => {
  return (
    <section className="  flex flex-col py-10 gap-10 items-center justify-center">
      <header className="flex flex-col  gap-10 w-full">
        <img src={Logo} alt="" className="w-[150px] m-auto" />
        <hr className="border-[#5e5e5e]" />
      </header>
      <h1
        className="font-bold text-white text-3xl
       lg:text-5xl lg:w-[40%] text-center lg:leading-[56px]"
      >
        Tenha um time completo de marketing{" "}
        <span className="text-[#4BC0EE]">
          atuando no crescimento do seu negócio.
        </span>
      </h1>
      <ButtonChamada></ButtonChamada>
    </section>
  );
};
