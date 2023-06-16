import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink, useLocation } from 'react-router-dom';
import Colors from '../../constants/colors'

export default function NavMenuItem({menu}) {
   let location = useLocation();

    return (
        <ListItem disablePadding disableGutters>
           <NavLink
              className={(ele) => (ele.isActive ? "item-active nav-item" : 'nav-item')}
              to={menu.params ? `${menu.path}?${menu.params}` : menu.path}
              style={{textDecoration: 'none', color: 'black'}}
           >
              <ListItemIcon  sx={{ pl: 3}}  className="menu-icon">
                <i className={menu.menu_icon} style={location.pathname === menu.path ? {color: Colors.dark.primary} : {color: Colors.dark.black}}></i>
              </ListItemIcon>
              <ListItemText sx={{ my: 0}} primary={menu.menu_title} />
           </NavLink>
        </ListItem>
     );
}
