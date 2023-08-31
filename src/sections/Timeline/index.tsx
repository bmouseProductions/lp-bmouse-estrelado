import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import Rato from "../../assets/rato.webp";

export function TimelineSection() {
  return (
    <div className="p-6 container m-auto flex flex-col gap-10 lg:gap-0 text-white py-20">
      <h1 className="text-3xl lg:text-5xl m-auto text-center lg:w-[40%] font-bold">
        Você está <span className=" text-gradient">satisfeito</span> com seu
        faturamento?
      </h1>
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between">
        <Timeline className="lg:w-[50%] ">
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon className=" bg-[#DC0073]" />
              <Typography variant="h4" className="leading-none text-[#4bc0ee]">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="paragraph"
                className="font-normal text-[#86888D] "
              >
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon className=" bg-[#DC0073]" />
              <Typography variant="h4" className="leading-none  text-[#4bc0ee]">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8 ">
              <Typography
                variant="paragraph"
                className="font-normal text-[#86888D] "
              >
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon className=" bg-[#DC0073]" />
              <Typography variant="h4" className="leading-none  text-[#4bc0ee]">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography
                variant="paragraph"
                className="font-normal text-[#86888D] "
              >
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
        {/*  <FontAwesomeIcon
        icon={faChartSimple}
        className="fa-sharp fa-solid " // Adicione as classes extras como classes CSS
        beatFade
        size="2xl"
        style={{ color: "#04cbee" }}
      /> */}
        <img src={Rato} alt="Rato Bmouse" />
      </div>
    </div>
  );
}
