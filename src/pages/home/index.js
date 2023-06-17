import React,{useState} from 'react'
import { divnk } from 'react-router-dom'
import frontendUrl from '../../urls/frontendUrl'
import Title from '../../components/Title'
import about from '../../assets/images/about.jpg'
import { Box, Stack } from '@mui/material'
import StatsItem from '../../components/StatsItem'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Extra } from '../../components/Extra'
import {data,data2} from '../../components/Data/serviceMap'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import './styles.css'

export default function Home() {
 const [isHovered, setIsHovered] = useState(false)


  return (
    <>
    <Box px={10}>
      <Title text={'About ScienceSoft – Global IT Company'} py={4} />
      <Box width={'70%'} mt={2}>
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
        <Title text={'ScienceSoft in Numbers'} textAdivgn={'start'} size='h4' mb={5} />
        <Stack direction="row" mb={4} spacing={{ xs: 1, sm: 2, md: 12 }}>
          <StatsItem number="34" title="years in IT" />
          <StatsItem number="750+" title="IT professionals" />
          <StatsItem number="1600+" title="success stories" />
          <StatsItem number="30+" title="industry covers" />
        </Stack>
      </Box>
      <Box width={'70%'} mt={1} mb={20}>
        <Title text={'Our Geography'} textAdivgn={'start'} size='h4' mb={5} />
        <p>
            <span className='fw-bold'>Headquartered in the US and operating internationally</span>, 
            our team drives digital transformation for businesses globally. 
            We ensure on-site presence to dedivver services to our <span className='fw-bold'>major target markets</span> in:
          </p>
      </Box>
    </Box>
    <div className='fw-bold text-primary'> Our Service Map </div>
    <div style={{ display:'flex', flexDirection:'row',flexWrap:'wrap',justifyContent:'center' }} >
     
      {data.map((item,index)=>( 
    <Card sx={{ minWidth: 200, width:70,marginLeft:4,marginBottom:2 }} style={{border:'1px sodivd gray'}}>
      <Extra
      bgCollor={item.bgColor}
      />
      <CardContent>
        
      <Typography variant="h5" component="div">
        {item.title}
      </Typography>
   
          <div style={{display:'flex',flexDirection:'row'}}>
            {/* <div style={{height:'15px', width:'35px',backgroundColor:'black'}} ></div> */}
            <div style={{fontSize:'10px'}} >{item.text}</div>
          </div>
          <div style={{display:'flex',flexDirection:'row'}}>
            {/* <div style={{height:'15px', width:'35px',backgroundColor:'black'}} ></div> */}
            <div style={{fontSize:'10px'}} >{item.text1}</div>
          </div>
          <div style={{display:'flex',flexDirection:'row'}}>
            {/* <div style={{height:'15px', width:'35px',backgroundColor:'black'}} ></div> */}
            <div style={{fontSize:'10px'}} >{item.text2}</div>
          </div>
          <div style={{display:'flex',flexDirection:'row'}}>
            {/* <div style={{height:'15px', width:'35px',backgroundColor:'black'}} ></div> */}
            <div style={{fontSize:'10px'}} >{item.text3}</div>
          </div>
          
     
      </CardContent>
    </Card>
      ))  }
      
      
    </div>
    <div style={{marginLeft:20}} >
    <Typography
  variant='h4'
  sx={{
    textAlign: 'start',
    marginLeft: 0,
    marginBottom: 2,
    marginTop: 5,
    color:'blue'
  }}
>
Solutions We Cover
</Typography>
    <div className='solution_text' style={{fontSize:20,paddingTop:2,paddingBottom:10}}> With over 34 years in Information Technology, we have built up expertise in dozens of domains, including: </div>
      
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data2.map((item,index) => (
        <Card sx={{ minWidth: 200, width: 70, height:100, marginLeft: 4, 
          marginBottom: 2 ,border: '1px solid gray',
          transition: 'box-shadow 0.3s',
          position: 'relative',
        '&:hover': {
          boxShadow: '0px 2px 2px 0px rgba(0.3,0,0,0.5)',
          // boxShadow:'none'
        },
        
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
          <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h6" component="div">
              {item}
            </Typography>
            <Typography key={index} variant="body2" color="text.secondary" sx={{ position: 'absolute', bottom: -2, right: 5 }}>
              {!isHovered? <SouthEastIcon sx={{color:'blue'}}/> : <ArrowForwardIcon sx={{color:'blue'}}/>}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
      </div>
    </>
  )
}
