import { Card, CardBody, Typography } from "@material-tailwind/react";

import Assesoria from "../../assets/assessoria.svg";

import Publico from "../../assets/performance.svg";

import Produtos from "../../assets/produtosdigitais-.svg";

import Estrategica from "../../assets/estrategica.svg";
import { ButtonChamada } from "../../components/ButtonChamada";

const info = [
  {
    icon: Estrategica,
    title: "Análises mensais de resultados",
    text: "Analisamos mensalmente o seu crescimento e apresentamos a você todas as métricas",
  },
  {
    icon: Publico,
    title: "Crescimento acelerado",
    text: "Os nossos métodos e serviços impulsionam o seu negócio às alturas.",
  },
  {
    icon: Assesoria,
    title: "Somos especialistas em contar histórias",
    text: "Com grandes produções em nosso portfólio, contamos a sua história com criatividade.",
  },
  {
    icon: Produtos,
    title: "Enfrentamos os desafios ao seu lado",
    text: "Com um nome estabelecido, a sua empresa resiste a crises e mudanças.",
  },
];

export const CardSection = () => {
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="container m-auto py-10 text-white text-center flex flex-col gap-10 "
      >
        <h1 className="text-[32px] font-bold uppercase leading-10">
          POR QUE<span className="text-gradient">ESCOLHER A BMOUSE </span>
        </h1>
        <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-10 justify-center ">
          {info.map((item) => {
            return (
              <Card
                data-aos="zoom-in-down"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
                className=" rounded-xl bg-gradient-black text-white flex"
              >
                <CardBody className=" flex items-center text-left gap-5">
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
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
          className="text-lg leading-7 mt-10 text-center  text-white "
        >
          E aí, o que falta para{" "}
          <strong className="text-[#4bc0ee]">
            você se tornar nosso parceiro?
          </strong>
        </p>{" "}
        <ButtonChamada text="QUERO SER UM PARCEIRO" />
      </div>
    </>
  );
};
