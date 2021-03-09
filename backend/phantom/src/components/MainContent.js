import React from 'react';
import { Grid, Button, makeStyles, Typography } from '@material-ui/core';
//import studentsPic from '../../img/bannerimg.png';
import SLmap from '../images/SL-1.png';
//import './MainContent.css';


const useStyles = makeStyles(theme => ({
  content: {
    fontSize: '1.2rem',
  },

  mainview:{
    backgroundImage: `url(${process.env.PUBLIC_URL + '/Assets/votingbak.png'})`,
    height: '40em',
    width: '40em',
    marginLeft:'5em',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  container: {
    border: '1px solid white',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    '&:hover': {
      background: '#272C34',
    },
  },
  btn: {
    color: '#53F2F5',
    border: '1px solid #00ff71',
  },
  // imgText: {
  //   color: '#457b9d',
  //   border: '1px solid white',
  //   width: '100%',
  //   textAlign: 'right',
  //   paddingRight: '10px',
  //   zIndex: '-1',
  //   fontSize: '2rem',
  //   padding: '90px',
  // },
}));

const MainContent = () => {
  const classes = useStyles();

  return (
    
    <>
      <Grid container justify='space-around' alignItems='center'>
        <Grid md={5} item>
          <div className={classes.mainview}>
            {/* <p className={classes.imgText}>Be safe and</p> */}
          </div>
        </Grid>

      
        <Grid md={5} item>
          <div className={classes.container}>
            <Typography variant='h2'>Safe and Efficient way of Voting</Typography>
            <p className={classes.content}>
              This online voting system is safe to use in an Emergency situation
              and this is more efficient than marking and putting ballet paper.
              So,Be prepared for online voting.
            </p>
            <Button variant='outlined'   className={classes.btn}>
              READ MORE
            </Button>
          </div>
        </Grid>
      </Grid>
      

      {/* Container 2 */}
      <Grid container justify='space-around' alignItems='center'>

        <Grid md={5} item>
          <div className={classes.container}>
            <Typography variant='h2'>It's Easy to manage Results</Typography>
            <p className={classes.content}>
      
              The Results can be generated as Graphically and Numerically.It Is
              easy to manage the results according to different references and 
              observe how behave with recent elections. 
            </p>
            <Button className={classes.btn} variant='outlined' color='primary'>
              READ MORE
            </Button>
          </div>

        </Grid>

        <Grid md={5} item>
          <div className='main'>
            <img
              style={{ width: '45rem', height: '40rem' }}
              src={SLmap}
              alt=''
            />
          </div>
        </Grid>
        
      </Grid>
      
    </>
    
  );
};

export default MainContent;
