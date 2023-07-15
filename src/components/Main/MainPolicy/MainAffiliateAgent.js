import React from 'react';
import { Box, Grid, Typography, Hidden } from '@mui/material';
import AffiliateAgentImage from '../../../resources/images/become-iz-partner.svg';
import Button from '@mui/material/Button';
import './PolicyStyle.css';


export default function MainAffiliateAgent(){
    return(
        <div>
            <Box sx={{marginTop: 15}}>
                <Grid container direction="row" justifyContent="center" alignItems="center">

                    <Grid item xs={10} sm={10}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={10}>
                                <Hidden mdDown='true'>
                                    <Typography className='title' variant='h2'>
                                        <strong>IZ Affiliate Program in Software Consulting and Development</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h5'>
                                        <strong>IZ Affiliate Program in Software Consulting and Development</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br />
                                <img src={AffiliateAgentImage} alt="IZ Affiliate" ></img>
                            </Grid>
                        </Grid>
                        <br /><br />
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={10}>
                                <Typography variant='subtitle1' paragraph="true">
                                    If you are a <strong>trusted consultancy</strong>, an <strong>individual</strong> consultant or a <strong>marketing agency</strong>, 
                                    you may need software development services for your customers apart from the services you directly provide. 
                                    We understand that software development is not your priority, and we are ready to take on this task and equip your clients with the software tailored to their industry specifics and business needs.
                                </Typography>
                                <br />
                                <Typography variant='subtitle1' paragraph="true">
                                    If you are a <strong>sales agent</strong>, you can help us hunt for new Software consulting and custom software development opportunities. 
                                    All you need is to provide us with relevant leads, and we'll reward your efforts according to our Referral Program.
                                </Typography>
                                <br />
                                <Typography variant='subtitle1'>
                                    Join <strong> IZ Affiliate Program </strong> for Software consulting and Software development services and get rewarded for the leads you bring us. 
                                    We are open to expanding our business network and obtaining new Software consulting and software development challenges.   
                                </Typography>
                            </Grid>

                           
                            <Grid item xs={12} sm={12} md={10}>
                                <br /><br />
                                <Hidden mdDown='true'>
                                    <Typography className='title' variant='h3'>
                                        <strong>Collaboration Procedure</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h6'>
                                        <strong>Collaboration Procedure</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                          
                            <Grid item xs={12} sm={12} md={10}>
                                <br /><br />
                                <Typography variant='subtitle1'>
                                    1. We sign an NDA to ensure your sensitive data is not disclosed and an Agent Agreement that regulates our collaboration in frames of the 
                                    Referral Program (including the commissions you get as a mediator).
                                </Typography>
                                <br />
                                <Typography variant='subtitle1'>
                                    2. You introduce us to your clients who need IT services (Software consulting, Software design, Software development).
                                </Typography>
                                <br />
                                <Typography variant='subtitle1'>
                                    3. When we win a contract, we compensate your efforts (paying you the percentage following the contract) according to the conditions of our Referral Program.
                                </Typography>
                                <br />
                                <Typography variant='subtitle1'>
                                    Your participation in the software project itself is not mandatory, but you can join it, for example, as a consultant. 
                                    We are interested in long-term cooperation and can offer all-round software development and IT consulting support to every new customer you have. 
                                    We respect your reputation and ensure that required services will be delivered to end-users within time and budget. 
                                </Typography>
                                <br />
                                <Typography variant='subtitle1'>
                                    <i> <strong> Please feel free to send your questions and set up a free consultation with our representative. </strong> </i>
                                </Typography>
                                <br /><br />

                                <Typography align="right" gutterBottom>
                                    <Button variant="contained" disableElevation href="/contact-us">CONTACT US</Button>
                                </Typography>                               
                            </Grid>
                        </Grid>                                    
                    </Grid>
                   
                </Grid>
            </Box>
            <br /><br />
        </div>
    )
}