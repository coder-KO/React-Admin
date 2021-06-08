import React from 'react';
import {
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import customTheme from '../../theme';

import sidebarStyles from './styles';
import { SideMenu } from './SideMenu';

let primary = customTheme.palette.primary.main;
let light = customTheme.palette.light.main;

const Sidebar = (props) => {
  const { window } = props;
  const classes = sidebarStyles();
  const theme = useTheme();
  const location = useLocation();
  const path = location.pathname;

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <div className={classes.sideBrand}>
          {/* <Typography variant='h5'>Sports Ami</Typography> */}
          <Link to='/'>
            <img
              src='/assets/logo.png'
              alt='Logo'
              style={{ width: 200, height: 'auto' }}
            />
          </Link>
        </div>
      </div>
      <Divider variant='middle' style={{ backgroundColor: light }} />
      <List component='nav'>
        {SideMenu.map((item, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            to={item.path}
            onClick={props.mobileOpen ? props.handleDrawerToggle : ''}
            style={
              path === item.path
                ? { background: light, color: primary }
                : { background: 'none' }
            }
          >
            <ListItemIcon
              style={
                path === item.path ? { color: primary } : { color: '#fff' }
              }
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  /*

########## Sub menu in Sidebar - To be implemented later ##########

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List component='nav'>
        {SideMenu.map((item, index) => (
          <>
            <ListItem
              button
              key={index}
              component={Link}
              to={item.path}
              onClick={props.mobileOpen ? props.handleDrawerToggle : ''}
              selected={path === item.path}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
              {item.subMenu === undefined ? (
                ''
              ) : open ? (
                <ExpandLess
                  onClick={(e) => {
                    handleClick(e);
                  }}
                />
              ) : (
                <ExpandMore
                  onClick={(e) => {
                    handleClick(e);
                  }}
                />
              )}
            </ListItem>
            {item.subMenu === undefined ? (
              ''
            ) : (
              <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  <ListItem
                    button
                    className={classes.nested}
                    component={Link}
                    to={item.subMenu.path}
                    onClick={props.mobileOpen ? props.handleDrawerToggle : ''}
                    selected={path === item.subMenu.path}
                  >
                    <ListItemIcon>{item.subMenu.icon}</ListItemIcon>
                    <ListItemText primary={item.subMenu.title} />
                  </ListItem>
                </List>
              </Collapse>
            )}
          </>
        ))}
      </List>
    </div>
  );
*/

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <nav className={classes.drawer}>
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.mobileOpen}
            onClose={props.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default Sidebar;
