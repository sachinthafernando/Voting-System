import { Card, CardActionArea, CardContent, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
//import{ Link} from 'react-router-dom';
//import Link from '@material-ui/core/Link';
// import {
//   FaMoneyBillWave,
//   FaPhoenixFramework,
//   FaUserGraduate,
// } from 'react-icons/fa';
// import { GiPayMoney, GiSpellBook } from 'react-icons/gi';


import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';

const useStyles = makeStyles(theme => ({
  iconsGridContainer: {
    color: 'yellow',
    background: 'black',
    paddingTop: '20px',
  },

  card_1: {
    textAlign: 'center',
    marginBottom: '20px',
    '&:hover': {
      background: 'black',
    // marginTop: '-70px',
    // height: '150px',
    // marginBottom: '20px',
    // background: '#264653',
    // textAlign: 'center',
    // '&:hover': {
    //   background: 'black',
    },
  },

  card_2_3: {
    textAlign: 'center',
    marginBottom: '20px',
    '&:hover': {
      background: 'black',
    },
  },

  

  icon_1: {
    fontSize: '4rem',
    textAlign: 'center',
    marginRight: '80px',
    marginLeft: '100px',
    color: '#C545F0',
  },
}));

const IconsGrid = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.iconsGridContainer}
        container
        direction='row'
        justify='space-evenly'>




        <Grid item xs={12} md={3}>
          <Card  elevation={0} className={classes.card_1}>
            <CardActionArea  >                  
            <CardContent>
              <div>
                <div>
                  <CloudOutlinedIcon className={classes.icon_1} />
                </div>
                <div>
                  <h3>Database</h3>
                </div>
              </div>
            </CardContent>
            </CardActionArea>
          </Card>
        </Grid>


        <Grid item xs={12} md={3}>
          <Card className={classes.card_2_3}>
          <CardActionArea  >  
            <CardContent>
              <div className={classes.card_2_3_parent}>
                <div>
                  <LocationOnOutlinedIcon className={classes.icon_1} />
                </div>
                <div>
                  <h3>Locations</h3>
                </div>
              </div>
            </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        
        <Grid item xs={12} md={3}>
          <Card className={classes.card_2_3}>
          <CardActionArea >  
            <CardContent>
              <div className={classes.card_2_3_parent}>
                <div>
                  <InsertChartOutlinedIcon className={classes.icon_1} />
                </div>
                <div>
                  <h3>Results</h3>
                </div>
              </div>
            </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default IconsGrid;
