import React from 'react';
import { Carousel } from 'react-material-ui-carousel';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MyCarousel = () => {
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
    // Add more items as needed icon-box-editable__item-wrapper
  ];

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




export  function Partnerships() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const images = [
    'https://www.scnsoft.com/---home-page-illustrations/clients/walmart.svg',
    'https://www.scnsoft.com/---home-page-illustrations/clients/perkin_elmer.svg',
    'https://www.scnsoft.com/---home-page-illustrations/clients/ebay.svg',
    // Add more image URLs as needed
  ];

  return (
    <div style={{
      width:'100%'
    }}>
     
     <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
      {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      
    </Button>

    <img src={images[activeStep]} alt={`Image ${activeStep + 1}`} height={100} width={300}/>
    <Button size='small' onClick={handleNext} disabled={activeStep === images.length - 1}>
    
      {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
    </Button>
    <MobileStepper
      variant='none'
      // steps={images.length}
      position='static'
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
    />
    </div>
  );
}
/* <AutoPlaySwipeableViews index={activeStep} onChangeIndex={handleStepChange}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`}  height={100} width={100}/>
          </div>
        ))}
      </AutoPlaySwipeableViews> */