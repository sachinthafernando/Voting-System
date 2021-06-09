import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ButtonBase } from '@material-ui/core';
export const images = [
  {
    //url: '/static/images/grid-list/breakfast.jpg',
    url: 'https://ak.picdn.net/shutterstock/videos/3769277/thumb/1.jpg',
    title: 'ABOUT US',
    body:'',
    width: '100%',
   
    
  },
 
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    maxHeight:'800',
    width: '100%',
    backgroundImage: 'linear-gradient(45deg, #FFC312, #EE5A24, #00a8ff)',
  },
  image: {
    position: 'relative',
    height: 400,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 50,
   
  },
  focusVisible: {},
  
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

  imageBody: {
     
    position: 'relative',
    fontSize:'30px',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },


},
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
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
            <Typography 
              component="span"
              variant="h3"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              
            </Typography>
<div>
            <Typography 
              component="div"
              variant="body"
              color="inherit"
              align="center"
              style={{whiteSpace: 'pre-line'}}
              className={classes.imageBody}
             
            > 
               {image.body}
              
              
            </Typography>
            </div>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
