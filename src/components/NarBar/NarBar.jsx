import React from 'react'
import './NavBar.scss'
import '../../index.css'
import { styled, useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import avatarAdmin from './assests/img.JPG'

import { useNavigate } from 'react-router-dom';

import { navbarConfig1 } from '../../routes/routesConfig';
import { navbarConfig2 } from '../../routes/routesConfig';

// configs
import { SETTING } from '../../configs'

const drawerWidth = SETTING.DRAWER_WIDTH;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerStyled = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

export default function NarBar({open, handleDrawerClose}) {
    const theme = useTheme();
    const navigate = useNavigate();
    // const [style, setStyle] = useState("");

    function handleNavigate(href) {
      // setStyle("cont2");
      navigate(href);
    }

    return (
        <DrawerStyled variant="permanent" open={open}> 
        <DrawerHeader>
          <KeyboardDoubleArrowLeftIcon onClick={handleDrawerClose} style={{'cursor':'pointer'}} className='arrow-icon'>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </KeyboardDoubleArrowLeftIcon>
        </DrawerHeader>
        <Divider />
        
        <div className='profile-card hover-2'>
          <div className='avatar-admin'><img src={avatarAdmin} alt='avatar' href='/'/></div>
          <div className='name-role'>
            <h5>Tuyen Cat Van</h5>
            <p>admin</p>
          </div>
        </div>

        <List>
          <div className='topic'>MANAGEMENT</div>
          {navbarConfig1.map((item, index) => (
            <ListItemButton
            // className={style} 
            onClick={()=> handleNavigate(item.href)}
              key={index}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                
              }}
            >
              
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }}
                style={{fontSize:'10px'}}
              />
            </ListItemButton>
          ))}
        </List>
        <List>
          <div className='topic'>APP</div>
          {navbarConfig2.map((item, index) => (
            <ListItemButton
            // className={style} 
            onClick={()=> handleNavigate(item.href)}
              key={index}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                
              }}
            >
              
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }}
                style={{fontSize:'10px'}}
              />
            </ListItemButton>
          ))}
        </List>
      </DrawerStyled>
    )
}
