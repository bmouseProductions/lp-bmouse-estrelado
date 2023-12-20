interface ButtonProps {
  text?: string;
}

export const ButtonChamada = ({ text }: ButtonProps) => {
  return (
    <button
      data-aos="zoom-in-down"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
      className="align-middle select-none font-sans text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3.5 px-7 rounded-lg bg-gray-900 text-white hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-sm md:text-lg font-bold btn-gradient-chamada w-full lg:w-[50%] m-auto shadow-2xl shadow-[#12ba7c6e] aos-init aos-animate"
      type="button"
    >
      {text}
    </button>
  );
};
