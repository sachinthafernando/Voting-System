import React from 'react';
import {
  Avatar,
  Grid,
  ListItem,
  List,
  ListItemAvatar,
  useTheme,
  makeStyles,
  Hidden,
} from '@material-ui/core';

import {
  FcAutomotive,
  FcPhone,
  FcOnlineSupport,
  FcVoicemail,
} from 'react-icons/fc';

import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
//import './Footer.css';
import { GiBookAura } from 'react-icons/gi';

const useStyles = makeStyles(theme => ({

  footer:{
        width: '100%',
        padding: '50px 0',
        backgroundColor: 'Black',
        color: 'white',
        textAlign: 'center',
        
        
        
  },
  footer_icons: {
    fontSize: '2rem',
  },
  text: {
    fontSize: '1.0rem',
    textAlign:'justify',
    marginRight:'30px',
  },
  logo: {
    fontSize: '8rem',
    color: 'yellow',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Hidden smDown>
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='center'>
          <Grid item sm={12} xs={12} md={4}>
            <div className='childe1__container'>
              <div>
                <DeveloperModeIcon className={classes.logo} />
              </div>
            </div>
          </Grid>

          <Grid sm={12} xs={12} md={4}>
            <div className='childe2__container'>
              <div className='childe2__title'>
                <List dense>
                  <ListItem>
                    <ListItemAvatar>
                      <HelpOutlinedIcon className={classes.footer_icons} />
                    </ListItemAvatar>
                    <ListItem className={classes.text}>System Support</ListItem>
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <BusinessOutlinedIcon className={classes.footer_icons} />
                    </ListItemAvatar>
                    <ListItem className={classes.text}>eVote SriLanka</ListItem>
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <BusinessCenterOutlinedIcon className={classes.footer_icons} />
                    </ListItemAvatar>
                    <ListItem className={classes.text}>
                      Collabaration with Election Commission SL
                    </ListItem>
                  </ListItem>
                </List>
              </div>
            </div>
          </Grid>

          <Grid sm={12} xs={12} md={4}>
            <div className='child3__container'>
              <div className='child3__title'>
                <h1>About Us</h1>
                <p className={classes.text}>
                  This text is just only for test of footer in eVote SriLanka.This text
                   is just only for test of footer in eVote SriLanka.
                  This text is just only for test of footer in eVote SriLanka.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
};

export default Footer;
