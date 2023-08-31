import { ReactNode } from "react"

interface PropsButton{
    children: ReactNode | string;
    link: string
}

export default function ButtonComponent( {children, link }:PropsButton ){
    return (
        <a href={link} className='max-w-[300px] mx-auto py-2 px-5 rounded-xl !text-white bg-blue-gradient'>
            <button  className=" h-[60px] text-black  font-bold text-xl">
                {children}
            </button>
        </a>
    )
}