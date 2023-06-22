import React,{useState} from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Button, Stack } from '@mui/material'
import StatsItem from '../../components/StatsItem'


export function Extra({bgCollor}) {
  return (
    <div style={{ height:'7px',width:'100%',backgroundColor:bgCollor }}>

    </div>
  )
}
export function Industries({image,text}){
  const [isHovered, setIsHovered] = useState(false);

  const containerStyles = {

    transition: '0.3s',
    // backgroundColor: isHovered ? '#e0e0e0' : 'transparent',
  };

  const lineStyles = {
    with:'100%',
    transition: '0.5s',
    transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
    transformOrigin: 'left',
    border:'1px',
    height:'4px',
    backgroundColor:'#005eb8'
  };
  const textStyle ={
    color:isHovered? '#005eb8':'',
    alignItems:'center'
  }
  return(
    <div >
        <div className='inner'
        style={containerStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
          <div className='icon' >    {!isHovered? <ArrowOutwardIcon sx={{color:'#005eb8'}}/> : <ArrowForwardIcon sx={{color:'#005eb8'}}/>} </div>
          <div className='second' > 
          <div className='item_aditable_image'>
            <img src={image}
            height={100}
            width={100}
            />
          </div>
          <div 
          className='editable_text'
          style={textStyle}>{text}</div>
           </div>
           <div style={lineStyles}></div>
        </div>
        
  </div>
  )
}




export function SOlutions({item}){
  const [isHovered, setIsHovered] = useState(false);

  return(
    <Card className='solutions'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6" component="div" textAlign={'center'}>
          {item}
        </Typography>
        <Typography  variant="body2" color="text.secondary" sx={{ position: 'absolute', bottom: -2, right: 5 }}>
        {!isHovered? <SouthEastIcon sx={{color:'#005eb8'}}/> : <ArrowForwardIcon sx={{color:'#005eb8'}}/>}
        </Typography>
      </CardContent>
    </Card>
  )
}


export function Policy({item}){
  const [isHovered, setIsHovered] = useState(false);

  return(
    <Card
  className='policy_iner'
    style={{ minWidth: 200,height:'100px',
      marginBottom: 2 ,border: '1px solid #dadfe3',
      transition: 'box-shadow 0.3s ease-in-out,border-color .3s ease-in-out',
      position: 'relative',
      flexBasis: 'calc(30% - 30px)',
     textAlign:'center',
     justifyContent:'center',
     alignItems:'center',
      display:'flex',
      flexDirection:'row',
      left: 0,
       right: 0,
      // flexWrap:'wrap',
    '&:hover': {
      boxShadow: '0 2px 5px 0 rgba(0,0,0,.2)',
      zIndex:0,
      
    },
    
    }} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6" component="div" textAlign={'center'} className='policy_box'>
          {item}
        </Typography>
        {/* <Typography  variant="body2" color="text.secondary" sx={{ position: 'absolute', bottom: -2, right: 5 }}>
        {!isHovered? <SouthEastIcon sx={{color:'#005eb8'}}/> : <ArrowForwardIcon sx={{color:'#005eb8'}}/>}
        </Typography> */}
      </CardContent>
    </Card>
  )
}

export function POpovers({practice,year,projects,amount,workforce,number,text}){
  return(
    <Typography sx={{ p: 2 }} className='poping' >
        <div style={{display:'flex',
        justifyContent:'space-between',
        alignItems:'stretch', 
      }}>
          <div style={{ flex:'1 1 auto' }}>
             <p className='column_title'> {practice} </p>
             <p className='column_value'> {year}</p>
          </div>
          <div className='separator'> </div>
          <div style={{ flex:'1 1 auto' }}>
          <p className='column_title'> {projects} </p>
             <p className='column_value'> {amount}</p>
          </div>
          <div className='separator'> </div>
          <div style={{ flex:'1 1 auto' }}>
          <p className='column_title'> {workforce} </p>
             <p className='column_value'> {number}</p>
          </div>
         
        </div>
        <div className='popup_description'>
         <p> {text}</p>
        </div>
         <div className='popup_button'>
          Learn More
         </div>
         
    </Typography>
  )
}

