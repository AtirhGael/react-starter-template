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
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Extra, Industries, POpovers, Policy, SOlutions } from '../../components/Extra'
import { Backend, Framework, Frontend, data, data2, data3, database, mobile, policy, serviceData } from '../../components/Data/serviceMap'

import './styles.css'
import styled from 'styled-components';
import { Partnerships } from '../../components/carousel'
import Stacks from '../../components/carousel/stacks'
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
  const [isHovered, setIsHovered] = useState(false)

  const [isDropdown,setIsdropdown] = useState(false)

  const [isDropdownOpen, setDropdownOpen] = useState(false);


  return (
    <Box className='main_container'  >


      <Box sx={{ justifyContent: 'center' }}>
        
        <h1 className='page_title'> About ScienceSoft – Global IT Company</h1>
        <Box  className='boxes' >
          <Box>
           <div style={{width:'100%'}} >
           <img width={'100%'}
            className='image1'
            src={about} style={{ marginBottom: 30 }} />
           </div>
            <p className='line_text'>
              <span className='fw-bold'>Founded in 1989</span>, ScienceSoft is a provider of <span className='fw-bold text-primary'>IT consulting</span> and
              <span className='fw-bold text-primary'> software development services. </span>
              Having started as a small AI product company,
              we switched to IT services in 2002 and ever since we have helped non-IT organizations and software product
              companies improve business performance and quickly win new customers.
            </p>
          </Box>
        </Box>
          <Title text={'ScienceSoft in Numbers'} size='h4' textAlign={'start'} mb={5} mt={6} />
        <Box mt={10} mb={15}>
          <Stack direction="row" mb={4} spacing={{ xs: 1, sm: 2, md: 12 }} variant='div'>
            <StatsItem number="34" title="years in IT" />
            <StatsItem number="750+" title="IT professionals" />
            <StatsItem number="1600+" title="success stories" />
            <StatsItem number="30+" title="industry covers" />
          </Stack>
        </Box>
  
        <Box className='boxes'>
            <Title text={'Our Geography'} textAlign={'start'} size='h4' mb={5} mt={12} />

          <p>
            <span className='fw-bold'>Headquartered in the US and operating internationally</span>,
            our team drives digital transformation for businesses globally.
            We ensure on-site presence to dedivver services to our <span className='fw-bold'>major target markets</span> in:
          </p>
        </Box>

        <div style={{ display: 'flex',flexDirection:'row', gap: 15 }}
        className='main_box_geography'
        >
          {data3.map((item, i) => (
            <Box
              className='box_geography'
            >
              <Typography variant="h6" style={{ textAlign: 'center',fontWeight:'bold' }}>{item.title}</Typography>
              <Box
                mt={2}
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                paddingLeft="16px"
                gap='5px' // Add left padding for indentation
              >
               <ul>
                  <li className='box_geography_text'>{item.text}.</li>
                  <li  className='box_geography_text'>{item.text1}</li>
            </ul>
              </Box>
            </Box>

          ))}
        </div>
      </Box>

      {/* whom we serve section */}

      <div>
        <Box width={'70%'} mt={1} mb={4} >
  
          <Title text={'Whom We Serve'} textAlign={'start'} size='h4' mb={5}  mt={8}/>

        </Box>
        <div style={{ display: 'flex',flexDirection:'row',gap: 10}} className='main_box_geography'>
          <Box className='box_serve'
          >
            <Typography variant="h6" 
            style={{fontWeight:'bold'}}
            >Non-IT enterprises</Typography>
            
              <Typography sx={{ display: 'flex', gap: '10px',paddingTop:2 }} >


                <div style={{ fontSize: 13,
                boxSizing:'border-box',
                Color:'#3b3c3d',
                }}> Services to improve business performance, optimize customer service, and tap in digital transformation.</div>
              </Typography>

            
          </Box>
          <Box

            className='box_serve'
          >
            <Typography variant="h6" style={{fontWeight:'bold'}} >Software product companies</Typography>
         
              <Typography sx={{ display: 'flex', gap: '10px',paddingTop:2 }} >
                <div style={{ fontSize: 12 }}> Services to help bring new products to the market and win customers fast.</div>
              </Typography>
            </Box>
        </div>
      </div>

      {/* our customer section */}

      <div>
        <Box width={'100%'} mt={1} mb={4} >
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

          <div className='carousel'>
            <Partnerships />
          </div>

        </Box>

      </div>
      <Title text={'Our Service Map'} textAlign={'start'} size='h4' mb={5}  mt={6}/>

      <div
      className='box_service'
      >

        {data.map((item, index) => (
          <Card className='main_box_service'
          
          >
            <Extra
              bgCollor={item.bgColor}
            />
            <CardContent >

              <Typography variant="h5" component="div">
                {item.title}
              </Typography>

              <ul>
                <li>{item.text} </li>
                <li>{item.text1} </li>
                <li>{item.text2} </li>
                <li>{item.text3} </li>
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>


      {/* Industries ScienceSoft */}
      <div style={{width: '100%', marginTop:25}}>
        
          <Title text={'Industries ScienceSoft Serves'} textAlign={'start'} size='h4' mb={5} mt={10} />
          <span className='bellow'>During our practice, we acquired expertise and a deep understanding of business models and processes across 30+ industries, including</span>
        
        <div className='box'>
          {serviceData.map((item, index) => (
            <div>
            <Industries
              image={item.image}
              text={item.title}
            />
            </div>
          ))}
        </div>

      </div>

      <div style={{width:'100%'}} >
        <Title text={'Solutions We Cover'} textAlign={'start'} size='h4' mb={5} mt={10} />
        <div className='solution_text' style={{ fontSize: 20, paddingTop: 2, paddingBottom: 10 }}> With over 34 years in Information Technology, we have built up expertise in dozens of domains, including: </div>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 15,width:'100%' }}>
          {data2.map((item, index) => (
            <SOlutions
              item={item}
            />
          ))}
        </div>
      </div>

      

      {/* our capability */}

      <div style={{}} >
        <Title text={' Our Capabilities and Technological Expertise'} textAlign={'start'} size='h4' mb={5} mt={10} />
        <div className='solution_text' style={{ fontSize: 20, paddingTop: 2, paddingBottom: 18
         }}> We have over 750 IT professionals on board, 22% of whom are senior-level, who are well-versed in the following technology domains: </div>
        <div className='capability_section'>
          <div className='backend'>
            Backend Programming Languages
          </div>
          <div 
          className='item_of_lanuage'
         >
            {Backend.map((item) => (
              <Box className='item_group'
                style={{
                  '&:hover': {
                    boxShadow: '0 2px 5px 0 rgba(0,0,0,.2)',
                    zIndex:0,
                    // backgroundColor:{isHovered?'red':'yellow+'}
                  },
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >

                <PopupState className='pop'>
                  {(popupState) => (
                    <div>
                      <div className='img'
                        {...bindTrigger(popupState)}>
                        <img src={item.image} width={34} height={48} />

                      </div>
                      <Popover
                    PaperProps={{
                      style: { width: '450px' },
                    }}
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
                        <POpovers 
                        practice={item.practice}
                        year={item.year}
                        projects={item.project}
                        amount={item.pnumber}
                        workforce={item.workforce}
                        number={item.number}
                        text={item.text}
                        />
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </Box>
            ))}

            <button className='toggle_btn' ></button>
          </div>

         
          <div className='fronend_framework'> 
          <div className='backend'>
            Frontend Programming Languages
          </div>

          <div className='languages_title'> Languages </div>
          <div className='item_of_lanuage'>
            {Frontend.map((item) => (
              <div className='item_group'

              >

                <PopupState className='pop' >
                  {(popupState) => (
                    <div >
                      <div className='img'
                        variant="contained" {...bindTrigger(popupState)}>
                        <img src={item.image} width={34} height={48} />
                      </div>
                      
                    
                    </div>
                  )}
                </PopupState>
              </div>
            ))}

            
            {/* <button className='toggle_btn' ></button> */}
          </div>

          <div className='languages_title'>
             javascript Frameworks
          </div>
          <div className='item_of_lanuage'>
            {Framework.map((item) => (
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
                    PaperProps={{
                      style: { width: '450px' },
                    }}
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
                        <POpovers 
                        practice={item.practice}
                        year={item.year}
                        projects={item.project}
                        amount={item.pnumber}
                        workforce={item.workforce}
                        number={item.number}
                        text={item.text}
                        />
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </div>
            ))}

            
            {/* <button className='toggle_btn' ></button> */}
          </div>
          </div>

          {/* mobile application section */}
          <div className='backend'>
            Mobile
          </div>
          <div className='item_of_lanuage'>
            {mobile.map((item) => (
              <Box className='item_group'
                style={{
                  '&:hover': {
                    boxShadow: '0 2px 5px 0 rgba(0,0,0,.2)',
                    zIndex:0,
                    // backgroundColor:{isHovered?'red':'yellow+'}
                  },
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >

                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <div className='img'
                        variant="contained" {...bindTrigger(popupState)}>
                        <img src={item.image} width={34} height={48} />

                      </div>
                      <Popover
                    PaperProps={{
                      style: { width: '450px' },
                    }}
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
                        <POpovers 
                        practice={item.practice}
                        year={item.year}
                        projects={item.project}
                        amount={item.pnumber}
                        workforce={item.workforce}
                        number={item.number}
                        text={item.text}
                        />
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </Box>
            ))}

            <button className='toggle_btn' ></button>
          </div>
          {/* Mobile section ends here */}

          {/* Databases / data storages */}
          <div className='fronend_framework'> 
          <div className='backend'>
          Databases / data storages 
          </div>

          <div className='languages_title'> SQL </div>
          <div className='item_of_lanuage'>
            {database.map((item) => (
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
                    PaperProps={{
                      style: { width: '450px' },
                    }}
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
                        <POpovers 
                        practice={item.practice}
                        year={item.year}
                        projects={item.project}
                        amount={item.pnumber}
                        workforce={item.workforce}
                        number={item.number}
                        text={item.text}
                        />
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </div>
            ))}

            
            {/* <button className='toggle_btn' ></button> */}
          </div>

          <div className='languages_title'>
            Nosql
          </div>
          <div className='item_of_lanuage'>
            {database.map((item) => (
              <div className='item_group'

              >

                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <div className='img'
                        variant="contained" {...bindTrigger(popupState)}>
                        <img src={item.image1} width={34} height={48} />
                      </div>
                      <Popover
                    PaperProps={{
                      style: { width: '450px' },
                    }}
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
                        <POpovers 
                        practice={item.practice}
                        year={item.year}
                        projects={item.project}
                        amount={item.pnumber}
                        workforce={item.workforce}
                        number={item.number}
                        text={item.text}
                        />
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </div>
            ))}

            
            {/* <button className='toggle_btn' ></button> */}
          </div>
          </div>

          {/* database section ends here */}
                        <Stacks/>
        </div>

        

        <div className='aditinal_section'>
          <p> We continue to grow - For the second straight year, ScienceSoft USA Corporation is listed among
            <strong> The Americas’ Fastest-Growing Companies by the Financial Times.</strong> Additionally, we have a partner network of five companies with a total of 750+ employees, which, combined with our strong technological expertise, enables us to cover all development and infrastructure needs of midsized and large organizations</p>
        </div>

      </div>

      <Box  width={'100%'}>  
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
         We eagerly put in use IT innovations 
        </Typography>
        <p>Throughout our history, we have developed a number of <strong>
          partnerships with technology leaders,</strong> who highly attested our technical competencies and the ability to understand our customers’ needs and translate them into quality services: </p>
      </div>
      <div className='box'>
          {serviceData.map((item, index) => (
            <div>
            <Industries
              image={item.image2}
              text={item.text}
            />
            </div>
          ))}
        </div>
     
      </Box>

      <Box  width={'100%'} mt={4} mb={4}>
      
          <Title text={'Our Pricing Policy'} textAlign={'start'} size='h4' mb={5}  mt={9}/>
          <div>
            <p> Depending on a project and the nature of the delivered service, we resort to one of the following pricing models:</p>
          </div>
          <div
          className='policy_box'
          style={{ display: 'flex', flexDirection: 'row', gap: 15,width:'100%' }}>
          {policy.map((item, index) => (
            <Policy
              item={item}
            />
          ))}
        </div>
      </Box>
      <div className='person_container'> 
            <div className='inner_person'>
              <div className='pic_section'> 
                <div className='pic'> 
                <img className='person_container_image' width="318" height="318" src="https://www.scnsoft.com/about/experts/expert-profiles/boris-shiklo.png
" data-src="/about/experts/expert-profiles/boris-shiklo.png" alt=""                  data-ll-status="loaded"></img>
                </div>
                <div className='text_pic'> 
                <div className='author_name'> <p> Boris Chiclo</p> </div>
                <div className='author_position'> <p> CTO at Izsoftware</p> </div>
                </div>
               </div>
              <div className='text_section'>  
              <div className='text_section_text' >
              “It's hardly possible to reduce costs by means of low rates in modern, dynamic IT. Low rates tend to result in excessive hours spent. We, at ScienceSoft, don't practice reducing IT service costs by hiring low-paid employees. Instead, we raise productivity, i.e., deliver more in less time. It results in a lower cost of output (new application functionality, stable infrastructure, user issues resolved).”
              </div>
              </div>
            </div>
      </div>
      <Box mb={10}>
      <section >
        <p>To <strong>increase productivity</strong> And <strong>provide for the project cost reduction</strong>  for our customers, we invest a part of our revenue in:</p>
        <ul>
          <li>Quality management and process optimization.</li>
          <li>Adoption of new technologies.</li>
          <li>Employee training and further education.</li>
          </ul>
          <p>In addition, to implement software solutions faster and optimize the solutions’ Total Cost of Ownership, we resort to using the following <strong>technologies </strong>and<strong> methodologies</strong>:</p>
          <ul>
            <li>Cloud-native architecture.</li>
            <li>DevOps and the implementation of CI/CD pipelines.</li>
            <li>Test automation.</li>
            <li>Application Performance Management.</li>
            </ul>
      </section>
      </Box>
      <section>
    
      <Title text={'What Our Customers Get Choosing ScienceSoft as a Vendor'} textAlign={'start'} size='h4' mb={5}  mt={9}/>
      </section>

      <Box mt={10} className='service_card'>  
          <div className='service_logo'>
          <p><img alt="Predictable performance and quality" className='service_logo_img' data-src="https://www.scnsoft.com/about/company-new/what-customers-get-01.svg" height="100" width="100" src="https://www.scnsoft.com/about/company-new/what-customers-get-01.svg" data-ll-status="loaded"/></p>
          </div>
          <div class="a-service-cards_content">
          <div>
          <h3 class="a-service-cards_content-header">
          A quality-first company
          </h3>
          <div class="a-service-cards_content-title">
          <p>We provide only high-quality software and services to our clients. We guarantee you will get tangible business value from your IT investments, enjoy healthy project processes, professional and motivated teams, effective communication between ScienceSoft, your teams, and stakeholders.</p>
          <p>To achieve this, ScienceSoft has developed a <a href="https://www.scnsoft.com/about/quality-management">comprehensive quality management system</a> that resides in quality-centered leadership, committed employees, transparent KPIs, data-driven decision-making, continuous process improvement, quality controls throughout the SDLC, and more.</p>
          </div>
          </div>
          </div>
      </Box>
      <Box mt={10} className='service_card'>  
          <div className='service_logo'>
          <p><img alt="Predictable performance and quality" className='service_logo_img' data-src="https://www.scnsoft.com/about/company-new/what-customers-get-01.svg" height="100" width="100" src="https://www.scnsoft.com/about/company-new/what-customers-get-01.svg" data-ll-status="loaded"/></p>
          </div>
          <div class="a-service-cards_content">
          <div>
          <h3 class="a-service-cards_content-header">
          A quality-first company
          </h3>
          <div class="a-service-cards_content-title">
          <p>We provide only high-quality software and services to our clients. We guarantee you will get tangible business value from your IT investments, enjoy healthy project processes, professional and motivated teams, effective communication between ScienceSoft, your teams, and stakeholders.</p>
          <p>To achieve this, ScienceSoft has developed a <a href="https://www.scnsoft.com/about/quality-management">comprehensive quality management system</a> that resides in quality-centered leadership, committed employees, transparent KPIs, data-driven decision-making, continuous process improvement, quality controls throughout the SDLC, and more.</p>
          </div>
          </div>
          </div>
      </Box>
    </Box>
  )
}
