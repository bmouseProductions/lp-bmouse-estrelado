
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderProps {
  slideContent: Array<string | JSX.Element>;
  slideCount: number;
}

export default function SliderComponent({slideContent}: SliderProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    return(

        <Slider {...settings} className="w-full m-auto rounded">
            {slideContent.map((slide, index) => (
                <div key={index} className=' !h-full !flex  !justify-center !items-center '>
                    {slide}
                </div>
            ))}
        </Slider>
    )
}