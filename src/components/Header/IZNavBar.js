import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import NavBarCollapse from './NavBarCollapse'
import Avatar from '@mui/material/Avatar';
import Logo from '../../resources/images/IZ.svg';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
   
});

export default function IZNavBar() {
    return (
        <div>
            <AppBar position="fixed" sx={{borderBottom: "1px solid #00d8ff"}} color="default">
                <Toolbar>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={12} md={10}>
                            <Grid container direction="row" justifyContent="center" alignItems="center">
                                <Grid item xs={10} sm={4} md={2} lg={4} xl={6}>
                                    <Avatar sx={{width: 100, height: 100}} alt="IZ Logo" src={Logo} />
                                </Grid>
                                <Grid item xs={2} sm={8} md={9} lg={7} xl={5}>
                                    <NavBarCollapse /> 
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                               
                </Toolbar>
            </AppBar>  
        </div>
    )
}