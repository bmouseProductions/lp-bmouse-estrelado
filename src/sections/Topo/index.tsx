import Logo from "../../assets/whitelogo-bmouse-5ef2c2f7.svg";
import Tom from "../../assets/teste_tom-4a1afe3a.webp";

/* import { ButtonChamada } from "../../components/ButtonChamada"; */

export const Topo = () => {
  return (
    <section className="flex flex-col py-10 gap-10 items-center justify-center">
      <header
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="flex flex-col  gap-10 w-full "
      >
        <img src={Logo} alt="" className="w-[150px] m-auto" />
        <hr />
      </header>
      <h1
        data-aos="zoom-in"
        data-aos-duration="3000"
        className="font-bold text-white text-2xl md:text-3xl
       lg:text-5xl 2xl:w-[70%] text-center "
      >
        Impulsione o seu negócio com um time completo de marketing. <br />
        <span className="text-gradient">Junte-se a nós nessa jornada!</span>
      </h1>
      <div
        className="relative md:w-[70%] lg:w-[70%] xl:w-[55%] aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div className="bg-[#fbfbfb3d] gradient blur-[100px]  rounded-full absolute inset-0 z-0"></div>
        <img
          src={Tom}
          alt=""
          className="object-fill z-50 relative mx-auto  w-full 2xl:w-[700px]"
        />
      </div>

      {/*   <ButtonChamada></ButtonChamada> */}
    </section>
  );
};
