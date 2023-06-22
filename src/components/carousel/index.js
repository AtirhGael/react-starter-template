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
    <div className='slider'>
      <Slider {...settings}>
        {items.map((img, ind) => {
          return (
            <div key={ind} style={{gap:5,width:'100%'}}>
              <img src={img.image} title='' alt='' width={150} height={150} />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}