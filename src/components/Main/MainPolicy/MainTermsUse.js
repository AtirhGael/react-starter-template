import React from 'react';
import { Box, Grid, Typography, Hidden } from '@mui/material';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import './PolicyStyle.css';


export default function MainTermsUse(){
    return(
        <div>
            <Box sx={{marginTop: 15}}>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={10} sm={10}>

                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={10}>
                                <Hidden mdDown='true'>
                                    <Typography className='title' variant='h2'>
                                        <strong>Terms of Use ("Terms")</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h5'>
                                        <strong>Terms of Use ("Terms")</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /><br />
                                <Typography variant='subtitle1' paragraph="true">
                                    <i>Last Updated: December 01, 2022</i>
                                </Typography>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={10}>
                                <Typography variant='body1' paragraph="true">
                                    Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the https://www.izsoftwares.com (the "Site") 
                                    operated by IZSoftwares ("The Company", "us", "we", or "our").
                                    <br /> <br />
                                    This Site provides online access to information about Company and our products, services and opportunities.
                                    <br /> <br />
                                    Your access to and use of the Site is conditioned on your acceptance of and compliance with these Terms. 
                                    These Terms apply to all visitors, users and others who access or use the Site.
                                    <br /> <br />
                                    <strong> BY ACCESSING OR USING THE SITE YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT ACCEPT, DO NOT USE THE SITE. </strong>
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='title' variant='h4'>
                                        <strong>Purchases</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h6'>
                                        <strong>Purchases</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    If you wish to purchase any our product or service ("Purchase"), you may send the request in one of the following ways:
                                    <br /><br />
                                    1. Send the request via contact form
                                    <br /><br />
                                    2. Send the request via live chat
                                    <br /><br />
                                    3. Send the request to 
                                    <Link color="inherit" href="mailto: contact@izsoftwares.com" underline='none'>
                                            {' contact@izsoftwares.com '}
                                    </Link>
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='title' variant='h4'>
                                        <strong>Content, Copyright and Trademarks</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h6'>
                                        <strong>Content, Copyright and Trademarks</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    1. All text, material, data, and information, data files, description of our services or/and our products, graphics, images, user interfaces, visual interfaces, photographs, trademarks, logos and computer code etc. 
                                    ("Content"), contained on the Site is owned, controlled or licensed by or to Company, and is protected by applicable intellectual property and other laws, including trademark and copyright laws. 
                                    Company owns and retains all copyrights in the Content.
                                <br /><br />
                                    2. You acknowledge that Company does not make any representations or warranties about the Content which you may have access to. 
                                    Under no circumstances is Company liable in any way for any Content, including, but not limited to: any infringing Content, any errors or omissions in Content, 
                                    or for any loss or damage of any kind incurred as a result of the use of any Content posted, transmitted, linked from, or otherwise accessible through or made available via the Site.
                                <br /><br />
                                    3. You agree that you are solely responsible for your reuse of Content made available through the Site, including providing proper attribution. 
                                    You should review the terms of the applicable license before you use the Content so that you know what you can and cannot do.
                                <br /><br />
                                    4. Except as expressly provided in these Terms, no part of the Site and no Content may be copied, reproduced, modified, published, republished, uploaded, 
                                    posted, publicly displayed, encoded, translated, transmitted or distributed in any way (including "mirroring") to any other computer, server, Web site or other medium for publication or distribution or 
                                    for any commercial enterprise, without Company's express prior written consent. You also agree not to modify, rent, lease, loan, sell, distribute, transmit, broadcast, or create derivative works based on the Content or the Site, in whole or in part, by any means.
                                <br /><br />
                                    5. Company's logos and trademarks are trademarks and the property of Company. The appearance, layout, color scheme, and design of the Site are protected trade dress. 
                                    You do not receive any right or license to use the foregoing. We may use and incorporate into the Site any suggestions or other feedback you provide, without payment or condition.
                                </Typography>
                            </Grid>


                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='title' variant='h4'>
                                        <strong>Prohibited Use of the Site</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h6'>
                                        <strong>Prohibited Use of the Site</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    1. By accessing the Site, you agree that you will not:
                                <br /><br />   
                                    2. Use the Site in violation of these Terms
                                <br /><br />
                                    3. Copy, modify, create a derivative work from, reverse engineer or reverse assemble the Site, or otherwise attempt to discover any source code, or allow any third party to do so
                                <br /><br />
                                    4. Sell, assign, sublicense, distribute, commercially exploit, grant a security interest in or otherwise transfer any right in, or make available to a third party, the Content or Site in any way
                                <br /><br />
                                    5. Use or launch any automated system, including without limitation "deep-link", "page-scrape", "robots," "spiders," or "offline readers" or other automatic device, program, algorithm or methodology, 
                                    or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the Site or any Content, or in any way reproduce or circumvent the navigational structure or presentation of the Site or any Content;
                                <br /><br />
                                    6. Use the Site in any manner that damages, disables, overburdens, or impairs Site or interferes with any other party's use and enjoyment of the Site
                                <br /><br />
                                    7. Mirror or frame the Site or any part of it on any other web site or web page
                                <br /><br />
                                    8. Probe, scan or test the vulnerability of the Site or any network connected to the Site, nor breach the security or authentication measures on the Site or any network connected to the Site
                                <br /><br />
                                    9. Take any action that imposes an unreasonable or disproportionately large load on the infrastructure of the Site or any systems or networks connected to the Site
                                <br /><br />
                                    10. Use any device, software or routine to interfere or attempt to interfere with the proper working of the Site
                                </Typography>
                            </Grid>



                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='title' variant='h4'>
                                        <strong>Third Party Content</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h6'>
                                        <strong>Third Party Content</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    The Website makes information of third parties available, including articles, analyst reports, news reports, 
                                    tools to facilitate calculation, company information and data about financial markets, including any regulatory 
                                    authority and other financial markets and other data from external sources (the “Third Party Content”). 
                                    That the links to other third-party websites and services that are outside our controland not covered by this Privacy Statement. 
                                    We encourage you to review the privacy statements posted on those websites(and all websites) you visit.
                                <br /><br />
                                    By using any Third Party Content, You may leave this Website and be directed to an external website, or to a website maintained by an entity other than IZSoftwares. 
                                    If You decide to visit any such site, You do so at Your own risk and it is Your responsibility to take all protective measures to guard against viruses or any other destructive elements. 
                                    
                                    <br /> IZSoftwares makes no warranty or representation regarding, and does not endorse, any linked Websites or the information appearing thereon or any of the products or services described thereon
                                </Typography>
                            </Grid>


                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='title' variant='h4'>
                                        <strong>Changes</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h6'>
                                        <strong>Changes</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time without giving you prior notice. 
                                    Your use of the Site following any such modification constitutes your acceptance to follow and be bound by these Terms as modified. 
                                    The last date these Terms were revised is set forth above.
                                </Typography>
                            </Grid>



                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='title' variant='h4'>
                                        <strong>Disclaimer</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h6'>
                                        <strong>Disclaimer</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    To the maximum extent permitted by applicable law, Company disclaims any and all representations, warranties and conditions relating to Site and the use of Site 
                                    (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill).
                                <br /> <br />
                                    To the extent that the Site and Content are provided free of charge, Company will not be liable for any loss or damage of any nature.
                                <br /> <br />
                                    COMPANY MAKES NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, SECURITY OR ACCURACY OF THE SITE OR THE CONTENT FOR ANY PURPOSE. 
                                    THE SITE AND ITS CONTENT ARE DELIVERED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. THE CONTENT MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS OR OTHER ERRORS OR INACCURACIES AND MAY NOT BE COMPLETE OR CURRENT.
                                <br /> <br />
                                    IN NO EVENT SHALL COMPANY BE LIABLE OR RESPONSIBLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL OR EXEMPLARY DAMAGES OF ANY KIND, INCLUDING WITHOUT LIMITATION, 
                                    LOST PROFITS OR LOST OPPORTUNITIES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES IN ADVANCE AND REGARDLESS OF THE CAUSE OF ACTION UPON WHICH ANY SUCH CLAIM IS BASED.
                                <br /> <br />
                                    YOUR SOLE REMEDY AGAINST COMPANY FOR DISSATISFACTION WITH THE SITE OR ANY CONTENT IS TO STOP USING THE SITE OR ANY SUCH CONTENT.
                                <br /> <br />
                                    If, notwithstanding the other provisions of these Terms, Company is found to be liable to you for any damage or loss that arises out of or is in any way connected with your use of the Site or any Content, 
                                    Company's liability shall in no event exceed two hundred US dollars.
                                <br /> <br />
                                    The above disclaimer applies to any damages, liability or injuries caused by any failure of performance, error, omission, interruption, deletion, defect, 
                                    delay in operation or transmission, computer virus, communication line failure, theft or destruction of or unauthorized access to, alteration of, or use, whether for breach of contract, tort, negligence or any other cause of action.
                                </Typography>
                            </Grid>
                


                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='title' variant='h4'>
                                        <strong>Indemnification</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h6'>
                                        <strong>Indemnification</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    You understand and agree that you are personally responsible for your behavior on the Site. 
                                    You agree to indemnify, defend and hold harmless Company, its affiliated companies, employees, agents, and any third-party information providers from and against all 
                                    claims, losses, expenses, damages and costs (including, but not limited to, direct, incidental, consequential, exemplary and indirect damages), and reasonable attorneys' fees,
                                    resulting from or arising out of your use, misuse, or inability to use the Site or the Content, or any violation by you of these Terms.
                                </Typography>
                            </Grid>


                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='title' variant='h4'>
                                        <strong>Privacy Policy</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h6'>
                                        <strong>Privacy Policy</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    By using Site you accept the terms of Privacy Policy which is an integral part of these Terms.
                                <br /><br />
                                    Please check our Privacy Policy to learn more  <Link color="inherit" href="/about/privacy-policy" underline='none'> https://www.izsoftwares.com/about/privacy-policy  </Link>
                                </Typography>
                            </Grid>

                              
                            <Grid item xs={12} sm={12} md={10}>
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