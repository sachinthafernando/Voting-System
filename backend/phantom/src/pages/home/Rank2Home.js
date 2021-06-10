import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { ButtonBase } from '@material-ui/core';
import Flip from 'react-reveal/Flip';
import SideNavbar from '../../components/sidebar/SideNavbar';
export const images = [
  
  {
    url: 'https://ak.picdn.net/shutterstock/videos/20789104/thumb/1.jpg',
    title: 'Data Entry',
    width: '33%',
    path:'/dataEntry'
  },
  {
    url: 'https://www.kindpng.com/picc/m/149-1492068_enterprise-document-search-document-search-icon-png-transparent.png',
    title: 'View Database',
    width: '34%',
    path:'/databaseView'
  },
  {
    url: 'https://cdn2.iconfinder.com/data/icons/metro-ui-dock/512/Administrative_Tools.png',
    title: 'Operator',
    width: '33%',
    path:'/operator'
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    maxHeight:'800',
    width: '100%',
    backgroundImage: 'linear-gradient(180deg, #FFC312, #EE5A24, #00a8ff)',
    position: 'absolute',
    top: '10%',
    padding: '20px',
  },
  homeback: {
    background: 'linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    minHeight: '100%',
    minWidth: '100%',
    backgroundSize: 'cover',
    position: 'fixed',
  },
  image: {
    position: 'relative',
    height: 400,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 50,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid white',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'theme.palette.common.white',
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
     
    position: 'relative',
    fontSize:'30px',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: '#00a8ff',
    backgroundImage: 'linear-gradient(45deg, #FFC312, #EE5A24, #00a8ff)',
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <>
    <SideNavbar/>
    <div className={classes.homeback}>
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase to={image.path}
        component={Link}  //this line is essential to add page navigation through ButtonBase.
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
           
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
          <Flip top>
            <Typography 
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              
              <span className={classes.imageMarked} />
              
            </Typography>
            </Flip>
          </span>
        </ButtonBase>
      ))}
    </div>
    </div>
    </>
  );
}
