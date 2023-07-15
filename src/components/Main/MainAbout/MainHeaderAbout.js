import React from 'react';
import { Box, Grid } from '@mui/material';
import IZVideo from '../../../resources/IZ_Video.mp4'
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './AboutStyle.css';
import PublicIcon from '@mui/icons-material/Public';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { red, blue, lightBlue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import StartupImage from '../../../resources/images/Startup.png';
import AgencyImage from '../../../resources/images/Agency.svg';
import SmeImage from '../../../resources/images/SME.jpg';
import EnterpriseImage from '../../../resources/images/Enterprise.jpg';
import YoutubeEmbed from './YoutubeEmbed';


export default function MainHeaderAbout(){
    return(
        <div>
            <Box sx={{marginTop: 10}}>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={10} sm={10}>
                        <CardMedia
                            component="video"
                            image={IZVideo}
                            alt="IZ Video"
                            autoPlay="true"
                            loop="true"
                        />
                    </Grid>
                </Grid>
                <hr class="afterVideo"/>
                <br /><br />
                
                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={6} sm={3} md={3}>
                        <YoutubeEmbed />
                    </Grid>
                    <Grid item xs={6} sm={3} md={3}>
                        <Timeline position="right"
                            sx={{
                                [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0.2,
                                padding: 0,
                                },
                            }}
                          >
                            <TimelineItem>
                                <TimelineSeparator>
                                        <TimelineDot color="primary">
                                            <WorkspacePremiumIcon />
                                        </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h4" component="span">
                                        Vision
                                    </Typography>
                                    <Typography>World Class Software Solutions</Typography>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                        <TimelineDot color="primary">
                                            <PublicIcon />
                                        </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h4" component="span">
                                        Mission
                                    </Typography>
                                    <Typography>Software Product & Services</Typography>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                        <TimelineDot color="primary">
                                            <LaptopMacIcon />
                                        </TimelineDot>
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h4" component="span">
                                        Objectives
                                    </Typography>
                                    <Typography>East Africa</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Grid>
                    <Grid item xs={9} sm={10} md={6}>
                        <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
                                <Card sx={{ maxWidth: 300, padding: 1}}>
                                    <CardHeader avatar={
                                        <Avatar sx={{ bgcolor: blue[700] }}>
                                            <WorkspacePremiumIcon />
                                        </Avatar>
                                    } />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">                                        
                                            <strong> Vision </strong>                                         
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            Our vision is to offer World Class Software Solutions through Digital Transformation.
                                            <br /><br /><br /><br /><br />
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
                                <Card sx={{ maxWidth: 300, padding: 1}}>
                                    <CardHeader avatar={
                                        <Avatar sx={{ bgcolor: blue[700] }}>
                                            <PublicIcon />
                                        </Avatar>
                                    } />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">                                        
                                            <strong> Mission </strong>                                         
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            Our mission is to build software products and services that will provide convenience and transform business operations with Innovative,
                                            Reliable and Performant Software Solutions for our Clients.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
                                <Card sx={{ maxWidth: 300, padding: 1}}>
                                    <CardHeader avatar={
                                        <Avatar sx={{ bgcolor: blue[700] }}>
                                            <LaptopMacIcon />
                                        </Avatar>
                                    } />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">                                        
                                            <strong> Objectives </strong>                                         
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            To be the preferred provider of High-Quality Software Solutions in East Africa.
                                            <br /><br /><br /><br /><br />
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <br /><br /><br /><br />
                <Grid container spacing={2} direction="row" justifyContent="space-around" alignItems="center" sx={{backgroundColor: '#f5f5f5', padding: 5}}>

                    <Grid item xs={10} sm={6} md={3}>  
                        <Typography variant="h3">
                            <strong> Who We Work With</strong>
                        </Typography>
                        <Typography variant="subtitle1">
                            <p> IZSoftwares works with both IT and Non IT companies. </p>
                            <p> As a Software development company in Kenya, </p>
                            <p><i> For Non IT Company we offer service to improve business performance, optimize customer service, and tap in digital transformation.</i> </p>
                            <p><i> And for our IT Companies or Software Product Companies we offer services to help bring new products to the market and win customers fast.</i> </p>
                            
                        </Typography> 
                    </Grid>
                    <Grid item xs={10} sm={6} md={9}>  
                        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={10} sm={6} md={3}>  
                                <Card sx={{ maxWidth: 300, padding: 2}}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        width="200"
                                        image={StartupImage}
                                        alt="Startup"
                                    />
                                    <CardContent>
                                        <Typography align='center' gutterBottom variant="h5" component="div">                                        
                                            <strong> Startup Business </strong>                                         
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={10} sm={6} md={3}>  
                                <Card sx={{ maxWidth: 300, padding: 2}}>
                                    <CardMedia
                                        component="img"
                                        height="170"
                                        width="200"
                                        image={SmeImage}
                                        alt="SMEs "
                                    />
                                    <CardContent>
                                        <Typography align='center' gutterBottom variant="h5" component="div">                                        
                                            <strong> Small & Medium Business </strong>                                         
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        
                            <Grid item xs={10} sm={6} md={3}>  
                                <Card sx={{ maxWidth: 300, padding: 2}}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        width="200"
                                        image={EnterpriseImage}
                                        alt="Enterprise"
                                    />
                                    <CardContent>
                                        <Typography align='center' gutterBottom variant="h5" component="div">                                        
                                            <strong> Enterprise </strong>                                         
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                           
                        </Grid>
                    </Grid>        
                </Grid>
                <br /><br />
            </Box>    
        </div>
    )
}