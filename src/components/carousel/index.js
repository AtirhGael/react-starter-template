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
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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
    description: 'Description for Item 2 ',
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



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'When we first contacted ScienceSoft, we needed expert advice on the creation of the centralized analytical solution to achieve company-wide transparent analytics and reporting. The system created by ScienceSoft automates data integration from different sources, invoice generation, and provides visibility into the invoicing process. We have already engaged ScienceSoft in supporting the solution and would definitely consider ScienceSoft as an IT vendor in the future.',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      company:'smartech',
      position:'CTO',
  },
  {
    label: 'ScienceSoft offers a high caliber of resources skilled in Microsoft Azure .NET, mobile and Quality Assurance. Over the past three years, Lixar was very pleased with the service provided by ScienceSoft development teams and executive management. For accelerated project timelines which require skilled resources, ScienceSoft is a company that your team should consider.',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      company:'smartech',
      position:'CTO',
  },
  {
    label: 'ScienceSoft proved to be a professional service provider from the outset. We appreciate their proactive approach and ability to suggest improvements to a prospective solution on both architectural and business levels. We know we can always rely on ScienceSoft’s various competencies when our clients require quality software which would facilitate their business success. ',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
      company:'smartech',
      position:'CTO',
  },
  {
    label: 'ScienceSoft powered Tieto with a competent team to develop products for banking services. The team has been delivering results within budget and time. I’m absolutely satisfied with the quality of their services, their development skills and responsibility as well as the way they manage communication with us and our clients. I fully recommend ScienceSoft as a reliable IT partner! Read more on https://www.scnsoft.com/',
    imgPath:
      'Goč, SerbiaGoč, SerbiaGoč, SerbiaGoč, SerbiaGoč, SerbiaGoč, SerbiaGoč, SerbiaGoč, SerbiaGoč, SerbiaGoč, SerbiaGoč, SerbiaGoč, SerbiaGoč, SerbiaGoč, SerbiaGoč, SerbiaGoč, Serbia',
    company:'smartech',
    position:'CTO',
  },
];

export function SwipeableText() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'50px'}}>
    <Box sx={{ maxWidth: 700, flexGrow: 1, }} sm={{maxWidth:477}} >
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 80,
          pl: 2,
          bgcolor: '#fafafa',
        }}
      >
        {/* <Typography>{images[activeStep].label}</Typography> */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div >
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="div"
                sx={{
                  height: 300,
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                  backgroundColor:'#fafafa;',
                  paddingLeft:10
                }}
               
              >
                <div style={{ display:'flex',flexDirection:'column',gap:10}}>
                {step.label}
                <div style={{
                  display:'flex',
                  gap:10,
                  alignItems:'center'
                }}>
                <img 
              style={
                {
                  height:'40px',
                  width:'40px',
                  borderRadius:'20px',
                  marginTop:'18px'
                }
              }
              src={step.imgPath} alt='haha'/>
              <div  >
                {step.company}<br></br>
              {step.position}
              </div>
              </div>
                </div>
              </Box>
            ) : null}
            <div style={{
              backgroundColor:'#fafafa',
              paddingLeft:20,
              paddingBottom:10,
              paddingRight:15,
            }}>
              
            </div>
          </div>
        ))}
      </AutoPlaySwipeableViews>
     
    </Box>

    </div>
  );
}