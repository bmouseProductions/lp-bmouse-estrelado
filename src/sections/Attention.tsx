import ButtonComponent from '../components/button/Button';

import { Player } from '@lottiefiles/react-lottie-player';

import attention from '../assets/attention.json'

export default function Attention(){
    return (
        <section className='container px-5 md:px-0 py-12 mx-auto flex flex-col items-center gap-5 text-white '>
            <Player
                autoplay
                loop
                src={attention}
                className='w-[50px] '
            />

            <div className='lg:w-[450px] flex flex-col items-center gap-5'>
                <h1 className='text-[35px] text-center font-bold '>
                    Agora, <span className='text-red-600'>ATENÇÂO</span>
                </h1>
                <h1 className='text-[32px] text-center font-bold '>
                    O que é preciso para contratar os serviços da <span className='text-gradient'>Bmouse</span>?
                </h1>
                <p className='text-center text-lg'>
                    Muito simples, basta clicar no botão abaixo e preencher o formulário para que nossa equipe de especialistas entre em contato com você.
                </p>
            </div>

            <ButtonComponent 
                children='FALE COM UM DE NOSSOS ESPECIALISTAS'
                link="#form"
            />
        </section>
    )
}