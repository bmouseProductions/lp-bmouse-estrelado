import { Card, Input, Button, Select, Option } from "@material-tailwind/react";
import Image from "../../assets/teste_tom-4a1afe3a.webp";

export const Formulario = () => {
  return (
    <section className="p-3">
      <div className=" container m-auto bg-slate-500 flex flex-col items-center gap-10 py-20">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="relative">
            <div className="bg-[#4BC0EE] blur-3xl  rounded-full absolute inset-0 z-0"></div>
            <img src={Image} alt="" className="object-fill z-50 relative" />
          </div>

          <Card className="bg-white p-5 lg:p-10 shadow-xl shadow-[#ffffff] ">
            <form className="  w-80 max-w-screen-lg sm:w-96 ">
              <h1 className="font-bold text-black text-2xl w-[100%] text-center leading-[36px] mb-5">
                Preencha o formulário para ter um{" "}
                <span className="text-[#4BC0EE]">
                  time de marketing montado pela Bmouse Productions.
                </span>
              </h1>
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  size="lg"
                  label="Digite seu nome"
                  crossOrigin={undefined}
                />

                <Input
                  size="lg"
                  label="Digite seu melhor e-mail"
                  crossOrigin={undefined}
                />

                <Input
                  size="lg"
                  label="Digite seu melhor telefone"
                  crossOrigin={undefined}
                />
                <Select size="lg" label="Qual o seu segmento">
                  <Option>Educação</Option>
                  <Option>Serviço</Option>
                  <Option>E-commerce</Option>
                  <Option>SASS</Option>
                  <Option>Energia Solar</Option>
                  <Option>Turismo</Option>
                  <Option>Food Service</Option>
                  <Option>Franquia</Option>
                  <Option>Indústria</Option>
                  <Option>Finanças</Option>
                  <Option>Varejo</Option>
                  <Option>Imobilária</Option>
                  <Option>Telecom</Option>
                  <Option>Outro</Option>
                </Select>
                <Select size="lg" label="Qual funcionários você tem hoje?">
                  <Option>00-01</Option>
                  <Option>02-10</Option>
                  <Option>11-20</Option>
                  <Option>21-50</Option>
                  <Option>51-100</Option>
                  <Option>+100</Option>
                </Select>
                <Select
                  size="lg"
                  label="Qual o faturamento mensal da sua empresa?"
                >
                  <Option>até 20 mil</Option>
                  <Option>02-10</Option>
                  <Option>11-20</Option>
                  <Option>21-50</Option>
                  <Option>51-100</Option>
                  <Option>+100</Option>
                </Select>
              </div>

              <Button size="lg" className="mt-6 bg-[#DC0073]" fullWidth>
                Quero uma avaliação gratuita agora!
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
