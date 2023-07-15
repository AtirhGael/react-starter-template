import React, {  useCallback, useEffect,useState } from 'react'
import './home.css'
// import { Partnerships } from '../../components/slider'
import ExplorOffering from '../../components/ExplorOffering/ExplorOffering'
import { Partnerships, Review, SwipeableText } from '../../components/carousel'
import OurOfferings from '../../components/ourOfferings'
import Title from '../../components/Title'
import { Box, Grid, Hidden, Stack, Typography } from '@mui/material'
import { Partnership, Processes, SOlutions, SOlutions2 } from '../../components/Extra'
import { data2 } from '../../components/Data/serviceMap'
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Extra, Industries, POpovers, Policy} from '../../components/Extra'
import { Backend, Framework, Frontend,data3, database, mobile, policy, serviceData } from '../../components/Data/serviceMap'
import Stacks from '../../components/carousel/stacks'
import InitContent from '../../components/Main/MainContactUs/InitContent'
import { useSpring, animated } from 'react-spring';
import Form from '../../components/Form/Form'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home() {
    const [isHovered, setIsHovered] = useState(false)
    const [text, setText] = useState('');

  const animateText = useCallback((direction) => {
    // Replace 'description' with the text you want to animate
    const description = "Lorem ipsum dolor sit amet...";
    const max = description.length;

    for (let index = 0; index < max; index++) {
      const startIndex = direction ? 0 : max;
      const endIndex = direction ? index : max - index;
      setTimeout(() => {
        setText(description.substring(startIndex, endIndex));
      }, index * 50);
    }
  }, []);

  useEffect(() => {
    animateText(true);
  }, [animateText]);
  return (
    <div>
        <div className='sb-wrapper'> 
        {/* header */}
        <div className="sb-title-wrap">
            <div className="sb-title">
                <p>We</p>
            </div>
            <div className="sb-animated-inner" style={{ width: "210px" }}>
                <div className="sb-animated-label">Action</div>
                <div ><animated.span className="sb-animated-word">{text}</animated.span></div>
            </div>
            <div className="sb-title">
                <p>digital success</p>
            </div>
            </div>
        <div className='sb-list-wrap'>
        <div className="sb-slide" data-text="power">
            <div className="sb-slide-image">
            <picture data-alt="" data-default-src="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560.jpg">
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--616cf3dd--query.webp 1x" media="(max-width: 320px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--616cf3dd--query.jpg 1x" media="(max-width: 320px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--94ec551d--query.webp 1x" media="(max-width: 360px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--94ec551d--query.jpg 1x" media="(max-width: 360px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--06a99005--query.webp 1x" media="(max-width: 400px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--06a99005--query.jpg 1x" media="(max-width: 400px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--0c174987--query.webp 1x" media="(max-width: 415px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--0c174987--query.jpg 1x" media="(max-width: 415px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--89e965a5--query.webp 1x" media="(max-width: 460px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--89e965a5--query.jpg 1x" media="(max-width: 460px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--3875e560--query.webp 1x" media="(max-width: 540px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--3875e560--query.jpg 1x" media="(max-width: 540px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--bee197ce--query.webp 1x" media="(max-width: 640px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--bee197ce--query.jpg 1x" media="(max-width: 640px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--cac93fe4--query.webp 1x" media="(max-width: 768px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--cac93fe4--query.jpg 1x" media="(max-width: 768px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--71e1a4fe--query.webp 1x" media="(max-width: 1024px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--71e1a4fe--query.jpg 1x" media="(max-width: 1024px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--f9fb8a03--query.webp 1x" media="(max-width: 1280px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--f9fb8a03--query.jpg 1x" media="(max-width: 1280px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--521a83d4--query.webp 1x" media="(max-width: 1600px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--521a83d4--query.jpg 1x" media="(max-width: 1600px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--d98c6261--query.webp 1x" media="(max-width: 1920px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--d98c6261--query.jpg 1x" media="(max-width: 1920px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560.webp 1x" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560.jpg 1x" type="image/jpeg" />
            <img alt="" src="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560.jpg" />
            </picture>
             </div>
             <div className="sb-slide" data-text="power">
        <div className="sb-slide-image">
            <picture data-alt="" data-default-src="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560.jpg">
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--616cf3dd--query.webp" media="(max-width: 320px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--616cf3dd--query.jpg" media="(max-width: 320px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--94ec551d--query.webp" media="(max-width: 360px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--94ec551d--query.jpg" media="(max-width: 360px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--06a99005--query.webp" media="(max-width: 400px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--06a99005--query.jpg" media="(max-width: 400px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--0c174987--query.webp" media="(max-width: 415px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--0c174987--query.jpg" media="(max-width: 415px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--89e965a5--query.webp" media="(max-width: 460px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--89e965a5--query.jpg" media="(max-width: 460px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--3875e560--query.webp" media="(max-width: 540px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--3875e560--query.jpg" media="(max-width: 540px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--bee197ce--query.webp" media="(max-width: 640px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--bee197ce--query.jpg" media="(max-width: 640px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--cac93fe4--query.webp" media="(max-width: 768px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--cac93fe4--query.jpg" media="(max-width: 768px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--71e1a4fe--query.webp" media="(max-width: 1024px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--71e1a4fe--query.jpg" media="(max-width: 1024px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--f9fb8a03--query.webp" media="(max-width: 1280px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--f9fb8a03--query.jpg" media="(max-width: 1280px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--521a83d4--query.webp" media="(max-width: 1600px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--521a83d4--query.jpg" media="(max-width: 1600px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--d98c6261--query.webp" media="(max-width: 1920px)" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560~-~media--d98c6261--query.jpg" media="(max-width: 1920px)" type="image/jpeg" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560.webp" type="image/webp" />
            <source srcSet="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560.jpg" type="image/jpeg" />
            <img alt="" src="/---home-page-illustrations/photos-for-banner/image-thumb__37846__slider-with-banners/home-page---1---2560.jpg" />
            </picture>
        </div>
        </div>

            </div>

        </div>
        </div>

 

        <div className="container">
        <h1 className="hp-title">Software consulting and development <br/> for your digital success</h1>
        </div>

    <div className='container'>
        <div className='middle_text'>
        Since 1989. For millions of users. We transform businesses with powerful and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow.
        </div>
{/* <Partnerships/> */}
    </div>

    <div className='main_container'>
        <Partnerships/>
    </div>
    <div>
        <OurOfferings/>
    </div>
    <div className='solu' style={{width:'100%',backgroundColor:'#004485',paddingBottom:'5%',paddingTop:'7%',paddingLeft:'12%',paddingRight:'8%'}} >
        <Typography textAlign={'start'} size='h1'  color={'#fff'} sx={{fontSize:50}}>
        Solutions We deliver
        </Typography>
        <div className='solution_text' style={{ fontSize: 20, paddingTop: 2, paddingBottom: 10, color:'#fff' }}> With over 34 years in Information Technology, we have built up expertise in dozens of domains, including: </div>

        <div 
        className='solutions_box2'
        >
          {data2.map((item, index) => (
            <SOlutions2
              item={item}
            />
          ))}
        </div>
      </div>
      <div  >
        {/* <Title text={' Our Capabilities and Technological Expertise'} textAlign={'start'} size='h4' mb={5} mt={10} /> */}
        <div className='solution_text' style={{ fontSize: 20, paddingTop: 2, paddingBottom: 18,marginTop:30,paddingLeft:'15%'
         }}> Technologies and Platforms We Work With </div>
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

            {/* <button className='toggle_btn' ></button> */}
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

            {/* <button className='toggle_btn' ></button> */}
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
<div style={{backgroundColor:'#FCFCFC'}}>
  <div className='container'>
    <div className='row'>
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 left-content">
      <span className="main-title mb-0 mt-60 title-process-we-follow">Process We Follow</span>
      </div>
      <div className='processes'>
        <Processes/>
      </div>
    </div>
  </div>
</div>

<div style={{backgroundColor:'#FFF'}}>
  <div className='container'>
    <div className='row'>
    <span className="main-title mb-5 mt-60 title-process-we-follow">Partnership Models</span>
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 left-content">
      <p className="desc mb-0">Hyperlink InfoSystem a leading mobile app development company in USA &amp; India offers custom app development services to wide range of industries and businesses. Know more about our partnership models.</p>
      </div>
      <div className='processes'>
        <Partnership/>
      </div>
    </div>
  </div>
</div>

      </div>
      

      <div className='txt-slider'>
      <div className="container">
        <h1 className="hp-title">Our Customers Say </h1>
        </div>
        <SwipeableText/>
      </div>
      
      <div  style={{backgroundColor:'rgb(240, 249, 255)'}}>
        <div className='container'>
        <h1 className="hp-title">Why Businesses Choose ScienceSoft </h1>
        <div className='Busines_schoose' >
          <ul >
            <li className='box_geography_text'> 3,600+ success stories </li>d
            <li className='box_geography_text'> 1,220+ happy clients. </li>
            <li className='box_geography_text'> An inspired, close-knit team of 750+ IT specialists, including IT consultants, project managers, technical architects, developers, QA engineers, security and DevOps engineers, AI and blockchain experts, AWS and Azure professionals.</li>
          </ul>
          <ul >
            <li className='box_geography_text'> Partnerships with Microsoft and AWS. </li>
            <li className='box_geography_text'>A quality-first approach based on a mature ISO 9001-certified quality management system. </li>
            <li className='box_geography_text'> ISO 27001-certified security management based on field-tested security knowledge, ever-green policies, effective processes, advanced security technology, and skilled professionals. Read more on https://www.scnsoft.com/</li>
          </ul>
        </div>
        </div>
        </div>

      

        <div style={{backgroundColor:'#FFF'}}>
  <div className='container'>
    <div className='row'>
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 left-content">
      <h1 className="hp-title">Industry Expertise</h1>
      </div>
      <div className='processes'>
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
    </div>
  </div>
 <div className='last_last'>
 <h1 className='ht-tittle'>Need a Consultation?</h1>

 <div className='last_section'>
  <Form/>
  <div className='last_section_second'>
   <div style={{fontSize:22,fontWeight:'bold',paddingTop:8}}>Our contact details</div>
   <div>
   <div style={{display:'flex',gap:5}}> 
   <LocalPhoneIcon color='#005eb8'/>
   <div>
    <div style={{color:'#005eb8'}}> +892837397037  </div>
    <div style={{color:'#005eb8'}}>+892837397037</div>
   </div>
    </div>
    <div style={{display:'flex',gap:5}}> 
    <EmailIcon/>
    <span style={{color:'#005eb8'}}> contact@scnsoft.com </span>
       </div>
       <div style={{fontSize:23,fontWeight:'bold',paddingTop:8}}>Press Enquiries</div>
       <div style={{display:'flex',gap:5}}> 
    <span style={{color:'#005eb8'}}> Get In Touch With Us </span>
    <ArrowForwardIcon/>
       </div>
       <div style={{fontSize:25,fontWeight:'bold',paddingTop:8}}>Join Our Team</div>
       <div style={{display:'flex',gap:5}}> 
    <span style={{color:'#005eb8'}}> Check Our Open Vacancies </span>
    <ArrowForwardIcon/>
       </div>
   </div>
  </div>
 </div>
  </div>
</div>
    
      
    </div>
  )
}

export default Home
