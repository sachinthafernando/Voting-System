import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Container, Grid, Paper } from '@material-ui/core';
import AddDistricts from './AddDistricts';
import AssignParties from './AssignParties';
import { BoxLoading } from 'react-loadingg';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    content: {
        color: "#000"
    },
    paper : {
        margin: "40px auto",
        padding: 20,
        height: "700px",
    }
  }));
  

export default function Settings() {
    const classes = useStyles();
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    loading ? <BoxLoading/> :
    <Container>
        <Paper elevation={3} className={classes.paper}>
            <div className={classes.root}>
                <Grid container>
                <Grid item lg={2}>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth" orientation="vertical">
                    <Tab label="Add Districts" {...a11yProps(0)} />
                    <Tab label="Add Divisions" {...a11yProps(1)} />
                    <Tab label="Add GNDivisions" {...a11yProps(2)} />
                    <Tab label="Assign Parties" {...a11yProps(3)} />
                    </Tabs>
                </Grid>
                <Grid item lg={10}>
                    <TabPanel value={value} index={0} className={classes.content}>
                        <AddDistricts index={0}/>
                    </TabPanel>
                    <TabPanel value={value} index={1} className={classes.content}>
                        <AddDistricts index={1}/>
                    </TabPanel>
                    <TabPanel value={value} index={2} className={classes.content}>
                        <AddDistricts index={2}/>
                    </TabPanel>
                    <TabPanel value={value} index={3} className={classes.content}>
                        <AssignParties/>
                    </TabPanel>
                </Grid>
                </Grid>
            </div>
        </Paper>
    </Container>
  );
}
