import React from 'react';
import { Carousel } from 'react-material-ui-carousel';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import Slider from "react-slick";

const items = [
  {
    name: 'Item 1',
    description: 'Description for Item 1',
    image: 'https://www.scnsoft.com/---home-page-illustrations/clients/baxter.svg',
  },
  {
    name: 'Item 2',
    description: 'Description for Item 2',
    image: 'https://www.scnsoft.com/---home-page-illustrations/clients/ebay.svg',
  },
  {
    name: 'Item 1',
    description: 'Description for Item 1',
    image: 'https://www.scnsoft.com/---home-page-illustrations/clients/ibm.svg',
  },
  {
    name: 'Item 2',
    description: 'Description for Item 2',
    image: 'https://www.scnsoft.com/---home-page-illustrations/clients/perkin_elmer.svg',
  },
  {
    name: 'Item 2',
    description: 'Description for Item 2',
    image: 'https://www.scnsoft.com/---home-page-illustrations/clients/viber.svg',
  },
  {
    name: 'Item 2',
    description: 'Description for Item 2',
    image: 'https://www.scnsoft.com/---home-page-illustrations/clients/walmart.svg',
  },
  {
    name: 'Item 1',
    description: 'Description for Item 1',
    image: 'https://www.scnsoft.com/---home-page-illustrations/clients/baxter.svg',
  },
  {
    name: 'Item 2',
    description: 'Description for Item 2',
    image: 'https://www.scnsoft.com/---home-page-illustrations/clients/ebay.svg',
  },
  {
    name: 'Item 1',
    description: 'Description for Item 1',
    image: 'https://www.scnsoft.com/---home-page-illustrations/clients/ibm.svg',
  },
  {
    name: 'Item 2',
    description: 'Description for Item 2',
    image: 'https://www.scnsoft.com/---home-page-illustrations/clients/perkin_elmer.svg',
  },
  {
    name: 'Item 2',
    description: 'Description for Item 2',
    image: 'https://www.scnsoft.com/---home-page-illustrations/clients/viber.svg',
  },
  {
    name: 'Item 2',
    description: 'Description for Item 2',
    image: 'https://www.scnsoft.com/---home-page-illustrations/clients/walmart.svg',
  },
  // Add more items as needed icon-box-editable__item-wrapper
];


const MyCarousel = () => {

  return (
    <Carousel>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </Carousel>
  );
};




export function Partnerships() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };


  return (
    <div>
      <Slider {...settings}>
        {items.map((img, ind) => {
          return (
            <div key={ind}>
              <img src={img.image} title='' alt='' width={100} height={100} />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}