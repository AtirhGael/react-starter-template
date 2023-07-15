import React from 'react';
import { Box, Grid, Typography, Hidden } from '@mui/material';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import './PolicyStyle.css';


export default function MainPrivacyPolicy(){
    return(
        <div>
            <Box sx={{marginTop: 15}}>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={10} sm={10}>

                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={10}>
                                <Hidden mdDown='true'>
                                    <Typography className='title' variant='h2'>
                                        <strong>Privacy Policy</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h5'>
                                        <strong>Privacy Policy</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /><br />
                                    This privacy statement explains what personal data IZSoftwares collects from you and how we use that data.
                                <br /><br />
                                <Typography variant='subtitle1' paragraph="true">
                                    <i>Last Updated: December 01, 2022</i>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='title' variant='h4'>
                                        <strong>Who We Are</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h6'>
                                        <strong>Who We Are</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    We are IZSoftwares, a Rwanda headquartered provider of Custom Software Development and Software Consulting services with IT professionals located internationally. 
                                    As you read this document, you are currently visiting our website, which is a digital face of our company. We are strongly committed to deliver you great experience while you are surfing our website, 
                                    to share the materials you might be interested in, to promptly clarify any questions that might pop up and to ensure uninterrupted functioning of the website so that you don't feel annoyed. 
                                    <br />
                                    This won't be possible without your kind assistance, which you render by sharing your personal data with us. 
                                    At the same time, we understand that personal data is an extremely sensitive matter and we take your privacy very seriously. 
                                    To avoid making you feel uneasy in this regard, we've developed this privacy policy, which dwells on every little detail that refers to our work with your personal data.
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='title' variant='h4'>
                                        <strong>What Personal Data We Collect</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h6'>
                                        <strong>What Personal Data We Collect</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    IZSoftwares collects data to provide you with direct feedback in respect of our services. You provide some of this data directly, such as when you fill in the 
                                    Contact us form, Contact form, and Ask author forms to contact us for support or comment on our blog. We get some data using technologies like cookies, and receiving error reports or usage data from software running on your device
                                </Typography>
                            </Grid>


                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='title' variant='h4'>
                                        <strong>Why We Collect Personal Data</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h6'>
                                        <strong>Why We Collect Personal Data</strong>
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
                                        <strong>Why We Share Personal Data</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h6'>
                                        <strong>Why We Share Personal Data</strong>
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Typography variant='body1' paragraph="true">
                                    We will share your information with our Development Center, which will handle your request. 
                                    Our Development Department must abide by our data privacy and security requirements and is not allowed to use personal data it receives from us for any purposes other than specified above. 
                                    To ensure an adequate level of protection of personal data you share, all obligations of the Development Department are established in an agreement.
                                <br /><br />
                                    Please, note that some of our website pages include links to products of third parties whose privacy practices may differ from those of IZSoftwares. 
                                    If you provide personal data to any of those parties, your data is governed by their privacy statements.
                                </Typography>
                            </Grid>


                            <Grid item xs={12} sm={12} md={10}>
                                <br /> <br />
                                <Hidden mdDown='true'>
                                    <Typography className='title' variant='h4'>
                                        <strong>What Rights You Have</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h6'>
                                        <strong>What Rights You Have</strong>
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
                                        <strong>How We Secure Your Data</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h6'>
                                        <strong>How We Secure Your Data</strong>
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
                                        <strong>How We Change this Privacy Policy</strong>
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp='true'>
                                    <Typography className='title' variant='h6'>
                                        <strong>How We Change this Privacy Policy</strong>
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
                                <br />
                                <Typography variant='subtitle1'>
                                    <br />
                                        If you have a privacy concern, complaint, or question to Data Protection Officer, please email us at  <i> <strong> privacy@izsoftwares.com </strong> </i> 
                                    <br />
                                    We will respond within 30 days.
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