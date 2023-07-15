import React from "react";
import {Button, Menu, MenuItem, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import BtnCollapse from "./Component/BtnCollapse";
import Link from '@mui/material/Link';
import styled from "@emotion/styled";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function NavBarCollapse (){

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const ButtonStyledLink = styled(Button)({
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0)'
          },
          '&:after': {
            bottom: 0,
            content: "''",
            display: 'block',
            height: 2,
            left: 0,
            position: 'absolute',
            backgroundColor: '#00d8ff',
            transition: 'width 0.5s ease 0s, left 0.5s ease 0s',
            width: 0,
          },
          '&:hover:after': {
                width:' 100%', 
                left: 0,
          }
    })

    return (
        <div sx={{position: 'absolute', right: 0}}>
            
            <BtnCollapse>
                <Link href='/' underline="none" color="textPrimary">
                    <MenuItem>            
                        Home
                    </MenuItem>
                </Link>
                <Link href='/services' underline="none" color="textPrimary">
                    <MenuItem>
                        Services
                    </MenuItem>
                </Link>
                <Link href='/industries' underline="none" color="textPrimary">
                    <MenuItem>
                        Industries
                    </MenuItem>
                </Link>
                <Link href='/case-studies' underline="none" color="textPrimary">
                    <MenuItem>
                        Case Studies
                    </MenuItem>
                </Link>
                <Link href='/blog' underline="none" color="textPrimary">
                    <MenuItem>
                        Blog
                    </MenuItem>
                </Link>
                <Link href='/about' underline="none" color="textPrimary">
                    <MenuItem>
                        About
                    </MenuItem>
                </Link>
                <Link href="/contact-us" underline="none" color="textPrimary">
                    <MenuItem>
                        Let's Talk
                    </MenuItem>
                </Link>                 
            </BtnCollapse>

            <div sx={{width: "100%"}} id="appbar-collapse">
                <Box sx={{display: {xs: 'none', sm: 'block', md: 'block'} }} >
            
                    <Link  href='/' underline="none" color="textPrimary">
                        <ButtonStyledLink  color="inherit">         
                            <Typography sx={{ fontWeight: 420}} variant="body1"> 
                                Home
                            </Typography>
                        </ButtonStyledLink>
                    </Link>
                    <Link href='#' underline="none" color="textPrimary"  endIcon={<KeyboardArrowDownIcon />}
                     aria-controls={open ? 'basic-menu' : undefined}
                     aria-haspopup="true"
                     aria-expanded={open ? 'true' : undefined}
                     onClick={handleClick}
                    >
                        <ButtonStyledLink color="inherit">           
                            <Typography sx={{ fontWeight: 420}} variant="body1"> 
                                Services
                            </Typography>
                        </ButtonStyledLink>
                    </Link>
                    <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                            sx={{marginTop: '20px',  borderRadius: 6}}
                        >
                            <MenuItem component={"a"} href={"/services/software-consulting"}> Software Consulting</MenuItem>
                            <MenuItem component={"a"} href={"/services/software-development"}>Software Development</MenuItem>
                            <MenuItem component={"a"} href={"/services/software-consulting"}>e-Government Development</MenuItem>
                            <MenuItem component={"a"} href={"/services/software-consulting"}>Testing and QA</MenuItem>
                            <MenuItem component={"a"} href={"/services/software-consulting"}>IT Support</MenuItem>
                            <MenuItem component={"a"} href={"/services/software-consulting"}>Cloud Solutions</MenuItem>
                    </Menu>
                    <Link href='/industries' underline="none" color="textPrimary">
                        <ButtonStyledLink color="inherit">           
                            <Typography sx={{ fontWeight: 420}} variant="body1"> 
                                Industries
                            </Typography>
                        </ButtonStyledLink>
                    </Link>
                    <Link href='/case-studies' underline="none" color="textPrimary">
                        <ButtonStyledLink color="inherit">           
                            <Typography sx={{ fontWeight: 420}} variant="body1"> 
                                Case Studies
                            </Typography>
                        </ButtonStyledLink>
                    </Link>
                    <Link href='/blog' underline="none" color="textPrimary">
                        <Button color="inherit">           
                            <Typography sx={{ fontWeight: 420}} variant="body1"> 
                                Blog
                            </Typography>
                        </Button>
                    </Link>
                    <Link href="/about" underline="none" color="textPrimary">
                        <ButtonStyledLink color="inherit">          
                            <Typography sx={{ fontWeight: 420}} variant="body1"> 
                                About
                            </Typography>
                        </ButtonStyledLink>
                    </Link>
                    <Link href="/contact-us" underline="none" color="textPrimary">
                        <Button variant="contained" color="primary">
                            <Typography sx={{ fontWeight: 420}} variant="body1"> 
                                Let's Talk !
                            </Typography>
                        </Button>
                    </Link>      
                </Box> 
            </div>
        </div>
    );
}
export default NavBarCollapse;
