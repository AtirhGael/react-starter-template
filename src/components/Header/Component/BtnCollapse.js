import React from "react";
import Box from '@mui/material/Box';
import Menu  from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';


class BtnCollapse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        };
        this.handleMenu = this.handleMenu.bind(this);
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div sx={{boxShadow: 'none'}}>
                <Box sx={{display: {xs: 'block', sm: 'none', md: 'none'}, position: 'absolute', bottom: 20}} >
                    <IconButton onClick={this.handleMenu}>
                        <MenuIcon fontSize="large" />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center"
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "center"
                        }}
                        open={open}
                        onClose={this.handleClose}>
                        {this.props.children}
                    </Menu>
                </Box>
            </div>
        );
    }
}
export default BtnCollapse;
