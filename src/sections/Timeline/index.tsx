import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export function TimelineSection() {
  return (
    <div className="container m-auto flex flex-col gap-10 text-white py-20">
      <h1 className="text-5xl w-[40%] font-bold">
        Você está <span className=" text-[#4bc0ee]">satisfeito</span> com seu
        faturamento?
      </h1>
      <Timeline className="w-[50%] ">
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon className=" bg-[#DC0073]" />
            <Typography variant="h4" className="leading-none text-[#4bc0ee]">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="paragraph" className="font-normal ">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
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
            <Typography variant="paragraph" className="font-normal ">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
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
            <Typography variant="paragraph" className="font-normal ">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
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
    </div>
  );
}
