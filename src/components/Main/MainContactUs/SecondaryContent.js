import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from '@mui/material/Link';
import BusinessIcon from '@mui/icons-material/Business';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import Avatar from '@mui/material/Avatar';
import { red, blue, lightBlue } from '@mui/material/colors';
import PlaceIcon from '@mui/icons-material/Place';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';




export default function SecondaryContent(){
    return(
        <div>
            <Box sx={{ marginTop: 5, marginBottom: 5}}>
                <Grid container spacing={2} direction="row" justifyContent="space-evenly" alignItems="center">
                    <Grid item xs={10} sm={5} md={2}> 
                        <Card sx={{ maxWidth: 300, padding: 1}}>
                            <CardHeader avatar={
                                <Avatar sx={{ bgcolor: lightBlue[500] }}>
                                    <PlaceIcon />
                                </Avatar>
                            } />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">                                        
                                    <strong> Address </strong>                                         
                                </Typography>
                                <Typography variant="body2">
                                    Kigali <br /> 
                                    Rwanda
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={10} sm={5} md={2}>
                        <Card sx={{ maxWidth: 300, padding: 1 }}>
                            <CardHeader avatar={
                                <Avatar sx={{ bgcolor: lightBlue[500] }}>
                                    <AccessTimeIcon />
                                </Avatar>
                            } />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                <strong> Office Hours </strong>
                                </Typography>
                                <Typography variant="body2">
                                    Monday - Friday, 8AM - 6PM (GMT+2) <br /> 
                                    It's 2PM on Saturday
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={10} sm={5} md={2}>
                        <Card sx={{ maxWidth: 300, padding: 1 }}>
                            <CardHeader avatar={
                                <Avatar sx={{ bgcolor: lightBlue[500] }}>
                                    <EmailIcon />
                                </Avatar>
                            } />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                <strong> Contact Us </strong>
                                </Typography>
                                <Typography variant="body2">
                                    contact@izsoftwares.com 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={10} sm={8} md={2}>
                        <Card sx={{ maxWidth: 300, padding: 1 }}>
                            <CardHeader avatar={
                                <Avatar sx={{ bgcolor: lightBlue[500] }}>
                                    <CommentOutlinedIcon />
                                </Avatar>
                            } />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <strong>  Social </strong>
                                </Typography>
                                <Typography variant="body2">
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                                            <Link  href="https://www.linkedin.com/company/izsoftwares" underline="none" color="inherit">
                                                <Typography align="right" gutterBottom>
                                                    <LinkedInIcon titleAccess="Linkedin Account"/>                           
                                                </Typography>  
                                            </Link>
                                        </Grid>
                                        <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                                            <Link href="https://twitter.com" underline="none" color="inherit">
                                                <Typography align="right" gutterBottom>
                                                    <TwitterIcon titleAccess="Twitter Account"/>     
                                                </Typography> 
                                            </Link>                       
                                        </Grid>       
                                        <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                                            <Link  href="https://www.youtube.com/channel/UCyM8dqNEd7jVsWq0NrewH1Q" underline="none" color="inherit">
                                                <Typography align="right" gutterBottom>
                                                    <YouTubeIcon titleAccess="Youtube Account"/>                           
                                                </Typography>  
                                            </Link>
                                        </Grid>    
                                        <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                                            <Link  href="https://www.youtube.com/channel/UCyM8dqNEd7jVsWq0NrewH1Q" underline="none" color="inherit">
                                                <Typography align="right" gutterBottom>
                                                    <FacebookIcon titleAccess="Facebook Account"/>                           
                                                </Typography>  
                                            </Link>
                                        </Grid>       
                                    </Grid>   
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            
        </div>
    )
}