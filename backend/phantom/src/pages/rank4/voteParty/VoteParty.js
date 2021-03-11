import React, { Component } from 'react'
import axios from 'axios';
import { Grid, Container, Paper,  Button, Link } from '@material-ui/core';

//   // function MouseOver(event) {debugger;
//   //   //backColor = event.target.style.background;
//   //   event.target.style.background = 'grey';
//   // }
//   // function MouseOut(event){debugger;
//   //   event.target.style.background='blue';
//   // }

const styles = {
  root: {
        overflow: 'hidden',
      },
      paper : {
        margin: "30px auto",
        padding: 20,
      },
      card: {
        display: 'contents',
      },
      text: {
        alignSelf: 'center',
        paddingLeft: 30,
      },
      media: {
        paddingLeft: 20,
        padding: 10,
      },
}

export default class VoteParty extends Component {

  constructor(props) {
    super(props);

    this.state = {
      business: []
    };
}


componentDidMount(){
    debugger;
    axios.get('http://localhost:5000/api/party/')
    .then(response => {
        this.setState({ 
          business: response.data
        });
        debugger;
    })
    .catch(function (error) {
        console.log(error);
    })
}

selectParty(e) {
  debugger;
  const formData = new FormData()
        formData.append('partyVotecount',++e.partyVotecount)
        formData.append('partyName',e.partyName)
        formData.append('logo',e.logo)
        formData.append('logoFile',e.logoFile)
        formData.append('color',e.color)
  axios.put('http://localhost:5000/api/party/'+e.partyID, formData)
  .then(res => {console.log(res.config.data);});
  debugger;
  // this.props.close();
  this.props.history.push('/voteCandidate');
  
}

  render() {
    return (
    <Container style={styles.root}>
         <Paper style={styles.paper} elevation={3} >
            <Grid  spacing={4}>
            {this.state.business.map((tile, i) => (
                    <Button 
                      key={i}
                      onClick={() => this.selectParty(tile)}
                      variant="contained"
                      //style= {styles.card}
                    // onMouseOver={MouseOver} 
                    // onMouseOut={MouseOut}
                    >
                      <div style={{backgroundColor:tile.color, display :"flex", width: 1000}} >
                        <div style={styles.media}>
                        <img src={tile.logoSrc} alt={tile.logo} />
                        </div>
                        <div style={styles.text}>
                        <h1>{tile.partyName}</h1>
                        </div>
                      </div>
                    </Button>
                ))}
            </Grid>
        </Paper>
    </Container>
    )
  }
}
