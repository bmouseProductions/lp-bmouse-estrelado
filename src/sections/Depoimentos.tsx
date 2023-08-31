import Depoiment from "../components/Depoiment/Depoiment";
import ButtonComponent from "../components/button/Button";
import Slider from "../components/slider/SliderDepoiment";

export default function Depoimentos(){

    const slideContent = [
        <Depoiment
            nome='Matheus'
            image= 'https://github.com/matheustxr.png'
            depoiment= 'lorem one shape asthetic, look at him, is that a pride gay flag? parece que alguem gosta de um baseball bat, não é mesmo?'
        />,
        <Depoiment
            nome='Matheus'
            image= 'https://github.com/matheustxr.png'
            depoiment= 'lorem one shape asthetic, look at him, is that a pride gay flag? parece que alguem gosta de um baseball bat, não é mesmo?'
        />,
        <Depoiment
            nome='Matheus'
            image= 'https://github.com/matheustxr.png'
            depoiment= 'lorem one shape asthetic, look at him, is that a pride gay flag? parece que alguem gosta de um baseball bat, não é mesmo?'
        />,
    ]
    
    const slideCount = slideContent.length
    return (
        <section className="container px-5 py-20 md:px-0 mx-auto flex flex-col items-center text-white" data-aos="flip-up" data-aos-duration='2000'>
            <h1 className="text-[32px] font-bold mb-7 text-center md:hidden">O QUE NOSSOS <br /> CLIENTES DIZEM</h1>
            <h1 className="text-[32px] font-bold mb-7 text-center hidden md:block">O QUE NOSSOS  CLIENTES DIZEM</h1>
            <div className="w-[90%] md:max-w-[600px] mb-10">
                <Slider
                    slideContent={slideContent}
                    slideCount={slideCount}
                />
            </div>
            <ButtonComponent 
                children='QUERO CRESCER MAIS'
                link="#form"
            />
            
        </section>
    )
}