import logo from '../../assets/whitelogo-bmouse-5ef2c2f7.svg'
export default function Footer(){
    return(
        <footer className="border-t-2 border-[#ffffff38] px-5 md:px-0 py-5 mx-auto flex flex-col items-center gap-5 text-lg text-white">
            <div className="w-full flex flex-col items-center gap-5 md:gap-0 md:flex-row justify-around">
                <img className='w-[150px] ' src={logo} alt="" />
            
                <span className='flex items-center'>Copyright Ⓒ 2023 Bmouse.</span> 
            </div>
            
        </footer>
    )
}