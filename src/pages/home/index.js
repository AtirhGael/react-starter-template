import React, { useState } from 'react'
import { divnk } from 'react-router-dom'
import frontendUrl from '../../urls/frontendUrl'
import Title from '../../components/Title'
import about from '../../assets/images/about.jpg'
import { Box, Stack } from '@mui/material'
import StatsItem from '../../components/StatsItem'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { Extra, Industries, POpovers, SOlutions } from '../../components/Extra'
import { Backend, Frontend, data, data2, data3, serviceData } from '../../components/Data/serviceMap'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import './styles.css'
import styled from 'styled-components';
import { Partnerships } from '../../components/carousel'
// import MyCarousel from '../../components/carousel'

const StyledTypography = styled(Typography)`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: blue;
  margin-right: 8px;
`;

export default function Home() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <Box px={12} pb={30}>
      <Box sx={{ justifyContent: 'center' }}>
        <Title text={'About ScienceSoft – Global IT Company'} py={4} />
        <Box width={'70%'} mt={2} justifyContent={'center'} >
          <Box>
            <img width={'100%'} src={about} style={{ marginBottom: 30 }} />
            <p>
              <span className='fw-bold'>Founded in 1989</span>, ScienceSoft is a provider of <span className='fw-bold text-primary'>IT consulting</span> and
              <span className='fw-bold text-primary'> software development services. </span>
              Having started as a small AI product company,
              we switched to IT services in 2002 and ever since we have helped non-IT organizations and software product
              companies improve business performance and quickly win new customers.
            </p>
          </Box>
        </Box>
        <Box mt={10} mb={15}>
          <Title text={'ScienceSoft in Numbers'} textAlign={'start'} size='h4' mb={5} />
          <Stack direction="row" mb={4} spacing={{ xs: 1, sm: 2, md: 12 }}>
            <StatsItem number="34" title="years in IT" />
            <StatsItem number="750+" title="IT professionals" />
            <StatsItem number="1600+" title="success stories" />
            <StatsItem number="30+" title="industry covers" />
          </Stack>
        </Box>
        <Box width={'70%'} mt={1} mb={8}>
          <Typography
            variant='h4'
            sx={{
              textAlign: 'start',
              marginBottom: 2,
              marginTop: 5,
              color: '#005EB8'
            }}
          >
            Our Geography
          </Typography>

          <p>
            <span className='fw-bold'>Headquartered in the US and operating internationally</span>,
            our team drives digital transformation for businesses globally.
            We ensure on-site presence to dedivver services to our <span className='fw-bold'>major target markets</span> in:
          </p>
        </Box>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 15 }}>
          {data3.map((item, i) => (
            <Box

              flexDirection="column"
              alignItems="center"
              border="1px solid gray" // Add gray border
              borderRadius="4px" // Add border radius
              padding="15px" // Add padding
              width='300px'
            >
              <Typography variant="h6" style={{ textAlign: 'center' }}>{item.title}</Typography>
              <Box
                mt={2}
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                paddingLeft="16px"
                gap='5px' // Add left padding for indentation
              >
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px' }} >

                  <StyledTypography></StyledTypography>
                  <div style={{ fontSize: 11 }}> {item.text}</div>
                </Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px' }} >

                  <StyledTypography></StyledTypography>
                  <div style={{ fontSize: 11 }}> {item.text1}</div>
                </Typography>
              </Box>
            </Box>

          ))}
        </div>
      </Box>

      {/* whom we serve section */}

      <div>
        <Box width={'70%'} mt={1} mb={4} >
          <Typography
            variant='h4'
            sx={{
              textAlign: 'start',
              marginBottom: 1,
              marginTop: 5,
              color: '#005EB8'

            }}
          >
            Whom We Serve
          </Typography>

        </Box>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, width:'70%' }}>
          <Box

            flexDirection="column"
            alignItems="center"
            border="1px solid gray" // Add gray border
            borderRadius="4px" // Add border radius
            padding="15px" // Add padding
            width='400px'
          >
            <Typography variant="h6" >Non-IT enterprises</Typography>
            <Box
              mt={2}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              paddingLeft="16px"
              gap='5px'
            >
              <Typography sx={{ display: 'flex', gap: '10px' }} >


                <div style={{ fontSize: 11 }}> Services to improve business performance, optimize customer service, and tap in digital transformation.</div>
              </Typography>

            </Box>
          </Box>
          <Box

            flexDirection="column"

            border="1px solid gray" // Add gray border
            borderRadius="4px" // Add border radius
            padding="15px" // Add padding
            width='400px'
          >
            <Typography variant="h6" >Software product companies</Typography>
            <Box
              mt={2}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              paddingLeft="16px"
              gap='5px' // Add left padding for indentation
            >
              <Typography sx={{ display: 'flex', gap: '10px' }} >
                <div style={{ fontSize: 11 }}> Services to help bring new products to the market and win customers fast.</div>
              </Typography>
            </Box>
          </Box>
        </div>
      </div>

      {/* our customer section */}

      <div>
        <Box width={'70%'} mt={1} mb={4} >
          <Typography
            variant='h4'
            sx={{
              textAlign: 'start',
              marginBottom: 1,
              marginTop: 5,
              color: '#000'

            }}
          >
            Our Customers
          </Typography>
          <p>
            <span className='fw-bold'>Headquartered in the US and operating internationally</span>,
            our team drives digital transformation for businesses globally.
            We ensure on-site presence to dedivver services to our <span className='fw-bold'>major target markets</span> in:
          </p>



        </Box>

      </div>
      <Typography
        variant='h4'
        sx={{
          textAlign: 'start',

          marginBottom: 2,
          marginTop: 5,
          color: '#005EB8'

        }}
      >
        Our Service Map
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 20 }} >

        {data.map((item, index) => (
          <Card sx={{ minWidth: 200, width: 70, marginBottom: 2, border: '1px solid gray' }} >
            <Extra
              bgCollor={item.bgColor}
            />
            <CardContent>

              <Typography variant="h5" component="div">
                {item.title}
              </Typography>

              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {/* <div style={{height:'15px', width:'35px',backgroundColor:'black'}} ></div> */}
                <div style={{ fontSize: '10px' }} >{item.text}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {/* <div style={{height:'15px', width:'35px',backgroundColor:'black'}} ></div> */}
                <div style={{ fontSize: '10px' }} >{item.text1}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {/* <div style={{height:'15px', width:'35px',backgroundColor:'black'}} ></div> */}
                <div style={{ fontSize: '10px' }} >{item.text2}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {/* <div style={{height:'15px', width:'35px',backgroundColor:'black'}} ></div> */}
                <div style={{ fontSize: '10px' }} >{item.text3}</div>
              </div>


            </CardContent>
          </Card>
        ))}
      </div>


      {/* Industries ScienceSoft */}
      <div style={{width: '70%'}}>
        <div>
          <div className='head'>Industries ScienceSoft Serves</div>
          <span className='bellow'>During our practice, we acquired expertise and a deep understanding of business models and processes across 30+ industries, including</span>
        </div>
        <div className='box'>
          {serviceData.map((item, index) => (
            <Industries
              image={item.image}
              text={item.title}
            />
          ))}
        </div>
      </div>

      <div style={{}} >
        <Typography
          variant='h4'
          sx={{
            textAlign: 'start',
            marginLeft: 0,
            marginBottom: 2,
            marginTop: 5,
            color: '#005eb8'
          }}
        >
          Solutions We Cover
        </Typography>
        <div className='solution_text' style={{ fontSize: 20, paddingTop: 2, paddingBottom: 10 }}> With over 34 years in Information Technology, we have built up expertise in dozens of domains, including: </div>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 15 }}>
          {data2.map((item, index) => (
            <SOlutions
              item={item}
            />
          ))}
        </div>
      </div>

      {/* our capability */}

      <div style={{}} >
        <Typography
          variant='h4'
          sx={{
            textAlign: 'start',
            marginLeft: 0,
            marginBottom: 2,
            marginTop: 5,
            color: '#005eb8'
          }}
        >
          Our Capabilities and Technological Expertise
        </Typography>
        <div className='solution_text' style={{ fontSize: 20, paddingTop: 2, paddingBottom: 10 }}> We have over 750 IT professionals on board, 22% of whom are senior-level, who are well-versed in the following technology domains: </div>
        <div className='capability_section'>
          <div className='backend'>
            Backend Programming Languages
          </div>
          <div style={{
            display: 'flex',
            borderColor: '#005eb8',
            gap: 1,

            width: '50%',

          }}>
            {Backend.map((item) => (
              <div className='item_group'

              >

                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <div className='img'
                        variant="contained" {...bindTrigger(popupState)}>
                        <img src={item.image} width={34} height={48} />

                      </div>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        <POpovers />
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </div>
            ))}

            <button className='toggle_btn' ></button>
          </div>

          <div className='backend'>
            Frontend Programming Languages
          </div>

          <div style={{
            display: 'flex',
            borderColor: '#005eb8',
            gap: 1,

            width: '50%',

          }}>
            {Frontend.map((item) => (
              <div className='item_group'

              >

                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <div className='img'
                        variant="contained" {...bindTrigger(popupState)}>
                        <img src={item.image} width={34} height={48} />

                      </div>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        <POpovers />
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </div>
            ))}

            <button className='toggle_btn' ></button>
          </div>
        </div>

        <div className='aditinal_section'>
          <p> We continue to grow - For the second straight year, ScienceSoft USA Corporation is listed among
            <strong> The Americas’ Fastest-Growing Companies by the Financial Times.</strong> Additionally, we have a partner network of five companies with a total of 750+ employees, which, combined with our strong technological expertise, enables us to cover all development and infrastructure needs of midsized and large organizations</p>
        </div>

      </div>

      <Box  width={'70%'}>
      <div>
        <Typography
          variant='h4'
          sx={{
            textAlign: 'start',
            marginBottom: 1,
            marginTop: 5,
            color: '#000'

          }}
        >
          Our Technology partnership
        </Typography>
        <p>Throughout our history, we have developed a number of <strong>
          partnerships with technology leaders,</strong> who highly attested our technical competencies and the ability to understand our customers’ needs and translate them into quality services: </p>
      </div>
      <div className='carousel'>
        <Partnerships />
      </div>
      </Box>
    </Box>
  )
}
