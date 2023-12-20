import { Card, CardBody, Typography } from "@material-tailwind/react";

import Audiovisual from "../../assets/adiovisua.svg";
import Assesoria from "../../assets/assessoria.svg";
import Mkt from "../../assets/mktoff.svg";
import Publico from "../../assets/performance.svg";
import MktDigital from "../../assets/mktdigital.svg";
import Produtos from "../../assets/produtosdigitais-.svg";
import Dev from "../../assets/dev.svg";
import Estrategica from "../../assets/estrategica.svg";
import { ButtonChamada } from "../../components/ButtonChamada";

const info = [
  {
    icon: Audiovisual,
    title: "Produção Audiovisual",
    text: "Produções esteticamente impecáveis que contam histórias emocionantes.",
  },
  {
    icon: Assesoria,
    title: "Assessoria de Imprensa",
    text: "Estamos sempre juntinhos de você, compartilhamos os conhecimentos que adquirimos em qualquer demanda.",
  },
  {
    icon: Mkt,
    title: "Marketing Offline",
    text: "O marketing criativo e de qualidade precisa alcançar todos os públicos, em todos os lugares.",
  },
  {
    icon: Publico,
    title: "Público-alvo",
    text: "Acertamos precisamente o público alvo de nossas campanhas e entregamos os melhores números e resultados.",
  },
  {
    icon: MktDigital,
    title: "Marketing Digital",
    text: "Enquanto o mundo digital evolui em ritmo acelerado, antecipamos tendências e impulsionamos nossos clientes rumo ao sucesso.",
  },
  {
    icon: Produtos,
    title: "Criação de Produtos Digitais",
    text: "Fornecer informações e conteúdos úteis é uma das melhores estratégias para atingir seus potenciais clientes.",
  },
  {
    icon: Dev,
    title: "Programação",
    text: "Automatização das postagens com a garantia de prazo e qualidade.",
  },
  {
    icon: Estrategica,
    title: "Elaboração Estratégica",
    text: "Planejamento singular de todos os temas abordados.",
  },
];

export const Crescimento = () => {
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="container m-auto py-10 text-white text-center flex flex-col gap-5"
      >
        <h1 className="text-[32px] font-bold uppercase leading-10">
          <span className="text-gradient">O QUE A </span> BMOUSE PRODUCTIONS
          FAZ?
        </h1>
        <p className="text-lg leading-7  text-white">
          A Bmouse é uma assessoria de marketing especializada em ajudar a sua
          empresa a vender mais.
        </p>
        <p className="text-lg leading-7  text-white">
          {" "}
          Fazemos isso através de sólidos processos metodológicos validados na
          última década.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center  justify-between lg:gap-5 ">
          {info.map((item) => {
            return (
              <Card
                data-aos="zoom-in-down"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
                className=" rounded-xl bg-transparent text-white flex "
              >
                <CardBody className=" flex  items-center text-left gap-5 px-0">
                  <img src={item.icon} alt="" className="w-[60px]" />
                  <div>
                    {" "}
                    <Typography variant="h5" className="mb-2">
                      {item.title}
                    </Typography>
                    <Typography clastext-lg className="text-white">
                      {item.text}
                    </Typography>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
        <ButtonChamada text="QUERO IMPULSIONAR MEU NEGÓCIO" />
      </div>
    </>
  );
};
