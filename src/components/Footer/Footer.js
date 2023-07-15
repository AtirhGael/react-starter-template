import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Logo from '../../resources/images/IZ2.svg';
import Avatar from '@mui/material/Avatar';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Hidden from '@mui/material/Hidden';


function Copyright(){
    
    return (
        <Box sx={{ p: 1}}>  
            <Typography variant="body2" component="h2" align="center" gutterBottom>
                {'©'}
                {' '}
                {new Date().getFullYear()}
                {' '}
                <Link color="inherit" href="/" underline='none'>
                    Evolv IZSoftwares Group Ltd.
                </Link>
                {' | '}
                All Rights Reserved.
            </Typography>
        </Box>
    )
}

export default function Footer(){
    return (
        <Box sx={{ backgroundColor: '#000000', color: 'white', p: 5, width: '100%'}}>  
            <div>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={12} md={10}>
                        <Box sx={{ overflowX: 'hidden', overflowY: 'hidden'}}>
                            <footer> 
                                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>  
                                        <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                                            <Hidden only='xs'>
                                                <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                                    <Avatar sx={{width: 150, height: 150}} alt="IZ Logo" src={Logo} />
                                                </Grid>
                                            </Hidden>
                                           
                                            <Grid container direction="row" justifyContent="flex-start" alignItems="center">  
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <PlaceIcon titleAccess="Address"/>    
                                                </Grid>
                                                <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
                                                    <Typography variant="subtitle1">
                                                        Nairobi, Kenya
                                                    </Typography> 
                                                </Grid>                                      
                                            </Grid> 
                                            <Grid container direction="row" justifyContent="flex-start" alignItems="center">  
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <CallIcon titleAccess="Call Us"/>    
                                                </Grid>
                                                <Grid item xs={10} sm={10} md={8} lg={10} xl={10}>
                                                    <Typography variant="subtitle1">
                                                        +254 703 468 300
                                                    </Typography> 
                                                    <Typography variant="subtitle1">
                                                        +254 113 584 021
                                                    </Typography> 
                                                </Grid>                                      
                                            </Grid> 
                                            <Grid container direction="row" justifyContent="flex-start" alignItems="center">  
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <EmailIcon titleAccess="Contact"/>    
                                                </Grid>
                                                <Grid item xs={5} sm={5} md={6} lg={6} xl={6}>
                                                    <Typography variant="subtitle1">
                                                        <Link color="inherit" href="mailto: contact@izsoftwares.com" underline='none'>
                                                            <Typography variant="subtitle1" align="center" gutterBottom>
                                                                {'contact@izsoftwares.com'}
                                                            </Typography>  
                                                        </Link>
                                                    </Typography> 
                                                </Grid>                                      
                                            </Grid> 
                                            <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <Link  href="https://www.linkedin.com/company/izsoftwares" underline="none" color="inherit">
                                                        <Typography>
                                                            <LinkedInIcon titleAccess="Linkedin Account"/>                           
                                                        </Typography>  
                                                    </Link>
                                                </Grid>
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <Link  href="https://www.youtube.com/@izsoftwares" underline="none" color="inherit">
                                                        <Typography>
                                                            <YouTubeIcon titleAccess="Youtube Account"/>                           
                                                        </Typography>  
                                                    </Link>
                                                </Grid>  
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <Link href="https://twitter.com/izsoftwares" underline="none" color="inherit">
                                                        <Typography>
                                                            <TwitterIcon titleAccess="Twitter Account"/>     
                                                        </Typography> 
                                                    </Link>                       
                                                </Grid>  
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <Link href="https://www.facebook.com/people/Evolv-IZSoftwares-Group/100092346416046" underline="none" color="inherit">
                                                        <Typography>
                                                            <FacebookIcon titleAccess="Facebook Account"/>     
                                                        </Typography> 
                                                    </Link>                       
                                                </Grid>                                  
                                            </Grid>        
                                        </Grid>
                                                                        
                                                                
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>  
                                        <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                            <Typography variant="h5" align="center" gutterBottom>
                                                <strong>Company</strong>
                                            </Typography>
                                        </Grid>
                                            
                                        <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/about" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        About
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/about/why-izsoftwares" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Why IZSoftwares
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/case-studies" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Case Studies
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/about/development-process" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Development Process
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/about/technology-used" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                       Technologies We Use
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/about/careers" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Careers
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                        </Grid>                    
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>  
                                        <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                            <Typography variant="h5" align="center" gutterBottom>
                                                <strong>Services</strong>
                                            </Typography>
                                        </Grid>
                                            
                                        <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/services/software-development" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Software Development
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/services/egovernment-solutions" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        eGovernment Solutions
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/services/web-design" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        UI/UX Design
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/services/legacy-modernisation" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Legacy Modernisation 
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/services/it-consulting" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        IT Consulting 
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/services/digitization-and-digitalization" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Digitization and Digitalization
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                        </Grid>   
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>  
                                        <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                            <Typography variant="h5" align="center" gutterBottom>
                                                <strong>Industries</strong>
                                            </Typography>
                                        </Grid>
                                            
                                        <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/industries/healthcare" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Healthcare
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/industries/public-services" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Public Services
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/industries/professional-services" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Professional Services
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/industries/financial-services" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Financial Services
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/industries/restaurant" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Restaurant
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Link href="/industries/real-estate" underline="none" color="inherit">
                                                    <Typography align="center" gutterBottom>
                                                        Real Estate
                                                    </Typography> 
                                                </Link>                                                             
                                            </Grid>
                                        </Grid>   
                                    </Grid>
                                </Grid>    
                                <br /><br />
                                <hr class="footerSeparator"/>
                                <Grid container spacing={2} direction="row" justifyContent="space-between" alignItems="center">
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>  
                                        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                                            <Grid item xs={4} sm={4} md={4} lg={3} xl={3}> 
                                                <Link href="/about/affiliate-agent" underline="none" color="inherit">
                                                    <Typography variant="body2">
                                                        Become Our Agent
                                                    </Typography> 
                                                </Link>  
                                            </Grid>
                                            <Grid item xs={4} sm={4} md={4} lg={3} xl={3}> 
                                                <Link href="/about/terms-use" underline="none" color="inherit">
                                                    <Typography variant="body2">
                                                        Terms of Use
                                                    </Typography> 
                                                </Link>  
                                            </Grid>
                                            <Grid item xs={4} sm={4} md={4} lg={3} xl={3}> 
                                                <Link href="/about/privacy-policy" underline="none" color="inherit">
                                                    <Typography variant="body2">
                                                        Privacy Policy
                                                    </Typography> 
                                                </Link>  
                                            </Grid>
                                        </Grid>                               
                                    </Grid>   
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>  
                                        <Copyright />  
                                    </Grid>      
                                </Grid>
                            </footer>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </Box>
    )
}