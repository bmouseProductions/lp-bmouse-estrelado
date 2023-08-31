import chat from '../../assets/chat.png'

interface PropsDepoiment{
    nome: string;
    image: string;
    depoiment: string;
}

export default function Depoiment( {nome, image, depoiment}:PropsDepoiment ){
    return(
        <div className='mx-3 lg:p-5  w-full flex flex-col items-center'>
            <div className='w-full flex flex-col p-5 shadow-lg rounded bg-white text-black'>
                <div className='flex items-center gap-5 mb-5'>
                    <h2 className='font-bold'>Cliente</h2>
                </div>
                <div className='mb-5'>
                    <p>
                        {depoiment}
                    </p>
                </div>
                <img src={chat} alt="ilustração baão de fala" />
                <div className='flex items-center gap-5'>
                    <img src={image} alt="foto do colaborador" className='rounded-full w-20'/>
                    <div>
                        <strong className='text-lg'>{nome}</strong>
                        <p className='text-gray-500'>Cliente</p>
                    </div>
                </div>
            </div>
        </div>
    )
}