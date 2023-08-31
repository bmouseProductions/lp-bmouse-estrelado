import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export const CardSection = () => {
  return (
    <div className="p-6 container py-20  m-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-14 justify-center ">
      <Card
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
        className=" rounded-xl bg-gradient-black text-white"
      >
        <CardBody>
          <Typography variant="h5" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography className="text-[#ADACB0]">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
      <Card
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
        className=" rounded-xl bg-gradient-black text-white"
      >
        <CardBody>
          <Typography variant="h5" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography className="text-[#ADACB0]">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
      <Card
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
        className=" rounded-xl   bg-gradient-black text-white"
      >
        <CardBody>
          <Typography variant="h5" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography className="text-[#ADACB0]">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
      <Card
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
        className=" rounded-xl bg-gradient-black text-white "
      >
        <CardBody>
          <Typography variant="h5" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography className="text-[#ADACB0]">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
