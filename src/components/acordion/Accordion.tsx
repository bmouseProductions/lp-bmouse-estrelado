import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

interface IconProps {
  id: number;
  open: number;
}

function Icon({ id, open }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

interface AccordionProps {
  title: string;
  text: string;
}

export function AccordionComponent({ title, text }: AccordionProps) {
  const [open, setOpen] = useState<number>(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        className={`${
          open === 1 ? "bg-[#4bc0ee]" : "bg-[#3a3942af]"
        } max-w-[385px] p-5  rounded`}
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="flex justify-between"
        >
          {title}
        </AccordionHeader>

        <AccordionBody>{text}</AccordionBody>
      </Accordion>
    </>
  );
}
