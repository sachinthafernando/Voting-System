import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Grid, Container, Paper,  Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'content',
    // flexWrap: 'nowrap',
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  paper : {
    margin: "30px auto",
    padding: 20,
  },
  card: {
    display: 'flex',
    width: 1000,
    // '&:hover': {
    //   backgroundColor: 'blue',
    // }
  },
  text: {
    alignSelf: 'center',
    paddingLeft: 30,
  },
  media: {
    paddingLeft: 20,
    padding: 10,
  },
  }));

export default function VoteParty() {

  const classes = useStyles();

  const [ partyList, setPartyList] = useState([])

  useEffect(() => {
    refreshPartyList();
}, [])
debugger;
  const partyAPI = (url = 'http://localhost:5000/api/party/') => {
      return {
          fetchAll: () => axios.get(url),
          update: (id, updatedRecord) => axios.put(url + id, updatedRecord)
      }
  }
debugger;
  const refreshPartyList = () => {
      partyAPI().fetchAll()
      .then(res => setPartyList(res.data))
      .catch(err => console.log(err))
  }

  // const selectParty=() => {debugger;
  //   this.props.history.push("/homeRank2");
  // }
  //var backColor= null;

  // function MouseOver(event) {debugger;
  //   //backColor = event.target.style.background;
  //   event.target.style.background = 'grey';
  // }
  // function MouseOut(event){debugger;
  //   event.target.style.background='blue';
  // }


  return (
    <Container className={classes.root}>
        <Paper className={classes.paper} elevation={3} >
            <Grid  spacing={4}>
                {partyList.map((tile) => (
                  <Button 
                    variant="contained"
                    // onClick={selectParty}
                  // onMouseOver={MouseOver} 
                  // onMouseOut={MouseOut}
                  >
                    <div className={classes.card} style={{backgroundColor:tile.color}} >
                      <div className={classes.media}>
                      <img src={tile.logoSrc} alt={tile.logo} />
                      </div>
                      <div className={classes.text}>
                      <h1>{tile.partyName}</h1>
                      </div>
                    </div>
                  </Button>
                ))}
            </Grid>
        </Paper>
    </Container>
  );
}