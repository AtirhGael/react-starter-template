import React from 'react';
import { Box, Grid, Card, CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import SoftwareConsultingImg from '../../../../resources/images/Consultation2.jpg';


export default function MainSoftwareConsulting(){

    return (
        <Box sx={{marginTop: 12}}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={10} sm={10}>
                    <Card sx={{ maxWidth: 5000, zIndex: -100}}>
                        <CardMedia
                            component="img"
                            image={SoftwareConsultingImg}
                            height={1000}
                            width={3500}
                            alt="IZ Consultation"
                        />
                    </Card>
                </Grid>
            </Grid>
            Consulting
        </Box>
    );
}