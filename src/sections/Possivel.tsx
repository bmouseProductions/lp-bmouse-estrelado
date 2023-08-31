import { AccordionComponent } from "../components/acordion/Accordion";
import ButtonComponent from "../components/button/Button";


export default function Possivel(){
    const informations = [
        {
            title: 'Copywriter',
            text: 'Copywriting é o processo de produção de textos persuasivos para ações de Marketing e Vendas, como o conteúdo de emails, sites, catálogos, anúncios e cartas de vendas. O profissional responsável pelo desenvolvimento do texto é conhecido como Copywriter.'
        },
        {
            title: 'Designer Gráfico',
            text: 'O Designer Gráfico é responsável por criar a parte visual de materiais como sites, anúncios, criativos, banners, landing pages, campanhas e logotipos. Ele também está envolvido na diagramação e produção de infográficos e no desenvolvimento de animações.'
        },
        {
            title: 'Gestor de Tráfego',
            text: 'O Gestor de Tráfego é o profissional responsável por organizar, analisar e gerenciar campanhas, estratégias de marketing e ações de marketing digital, para gerar vendas e resultados a um cliente, por intermédio de ferramentas como Facebook Ads e Google Ads'
        },
        {
            title: 'Analista de Business Intelligence',
            text: 'Além de analisar os dados, o analista de Business Intelligence também reúne as informações dos concorrentes para montar estratégias que possam mudar o setor e aumentar o faturamento do seu negócio. Trazendo insights essenciais para posicionar o seu negócio no digital.'
        },
    ]
    return (
        <section className="container px-5 md:px-0 mt-14 flex flex-col mx-auto text-white">
            <div className="mb-10 flex flex-col lg:flex-row justify-center items-center gap-10" >
                <div className=" py-5 flex flex-col gap-3  text-lg" data-aos="fade-up-right" data-aos-duration='2000'>
                    <h2 className="text-[32px] font-bold text-center leading-10 ">É POSSÍVEL CRESCER SEM A <span className="text-gradient">BMOUSE?</span></h2>
                    <p>Para replicar o que a V4 faz pela sua empresa, você precisaria de no mínimo, 4 funcionários:</p>
                    <ul className="pl-6">
                        <li className="list-disc">um Copywriter</li>
                        <li className="list-disc">um Designer Gráfico</li>
                        <li className="list-disc">um Gestor de Tráfego</li>
                        <li className="list-disc">um Analista de Business Intelligence</li>
                    </ul>
                    <p>Na Bmouse você consegue suprir esses profissionais através de um especialista na área!</p>
                    <p>E ainda poupa tempo e dinheiro por não se preocupar com essa mão de obra.</p>
                </div>

                <div className="lg:w-1/3 flex flex-col items-center justify-center gap-5" data-aos="fade-up-left" data-aos-duration='2000'>
                    {informations.map((info, index) => (
                        <AccordionComponent
                        key={index}
                        title={info.title} 
                        text={info.text}
                        />
                    ))}
                </div>
            </div>
            <ButtonComponent 
                children='QUERO CRESCER MAIS'
                link="#form"
            />
        </section>
    )
}