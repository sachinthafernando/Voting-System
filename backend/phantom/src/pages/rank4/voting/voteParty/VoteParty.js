import React, { Component } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode"
import { Grid, Container, Paper,  Button, Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';


const styles = {
  root: {
        overflow: 'hidden',
        position: 'fixed',
        top: '80px',
        bottom: '20px'
      },
      paper : {
        margin: "30px auto",
        padding: 20,
        maxHeight: '700px',
        overflowY: 'scroll'
      },
      card: {
        display: 'contents',
      },
      text: {
        alignSelf: 'center',
        paddingLeft: 30,
        textAlign: 'start',
      },
      media: {
        paddingLeft: 20,
        padding: 10,
      },
}

export default class VoteParty extends Component {

  constructor(props) {
    super(props);

    
    this.closeMessage = this.closeMessage.bind(this);

    var today = new Date(),

    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ':' + today.getMilliseconds();

    this.state = {
      business: [],
      district: '',
      division: '',
      currentTime: time,
      personDist: '',
      personDiv: '',
      message: '',
      setMessage: false,
    };
}

closeMessage(){
  this.setState({
      setMessage: false,
      message: '',
  });
}


componentDidMount(){
    debugger;
    if(localStorage.token){
      var decoded = jwt_decode(localStorage.token);
      debugger;
      axios.get('https://localhost:5001/api/Rank4Admin/'+ decoded.id)
      .then(res => {
          this.setState({ 
            personDist: res.data.personDist,
            personDiv: res.data.personDiv,
          });
          debugger;
          const distId =  res.data.personDist;
          const divId =  res.data.personDiv;
          axios.get('https://localhost:5001/api/party/district/' + distId)
          .then(response => {
              this.setState({ 
                business: response.data
              });
              debugger;
          })
          .catch(function (error) {
              console.log(error);
          });
          axios.get('https://localhost:5001/api/district/'+ distId)
          .then(dist => {debugger;
              this.setState({ 
                district: dist.data.name,
              });
          })
          .catch(function (error) {
            console.log(error);
          });
          axios.get('https://localhost:5001/api/division/'+ divId)
          .then(div => {
              this.setState({ 
                division: div.data.name,
              });
          })
          .catch(function (error) {
            console.log(error);
          })
      })
      .catch(function (error) {
          console.log(error);
      })

     
  }
    
}

async selectParty(e) {
  debugger;

  const obj = {
    // VoteID: '',
    Time: this.state.currentTime,
    Party_ID: parseInt(e.partyID),  
    personDist: parseInt(this.state.personDist),
    personDiv: parseInt(this.state.personDiv),
  };
  debugger;
  await axios.post('https://localhost:5001/api/vote/', obj)
  .then(json => {
      if (json.data){
          debugger;
          console.log(json.statusText);
          debugger;
          this.setState({
            setMessage: true,
            message: 'Vote Save Successfully',
          });
      }
      else{
          debugger;
          this.setState({
            setMessage: true,
            message: 'Vote not Saved',
          });
      }
  });
debugger;
  // this.props.close();
  this.props.history.push('/voteCandidate', {party: e.partyID });
  
}

  render() {
    return (
      <div>
        <Snackbar open={this.state.setMessage} autoHideDuration={3000} onClose={this.closeMessage} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
          <Alert severity="success">
              {this.state.message}
          </Alert>
        </Snackbar>
        <Grid container className='voteHeader'>
          <Grid item xs={4} style={{padding: '5px 30px'}}>
            <Typography variant='h5'>Your District : {this.state.district}</Typography>
            <Typography variant='h5'>Your Division : {this.state.division}</Typography>
          </Grid>
          <Grid item xs={8} >
            <Typography variant='h2'>Select a Party</Typography>
          </Grid>
        </Grid>
      <Container style={styles.root} maxWidth='xl'>
            <Paper style={styles.paper} elevation={3} >
              <Grid >
              {this.state.business.map((tile, i) => (
                      <Button 
                        key={i}
                        onClick={() => this.selectParty(tile)}
                        variant="contained"
                        className="votebtn"
                      >
                        <div style={{backgroundColor:tile.color}} className='tile'>
                          <div style={styles.media}>
                            <img src={tile.logoSrc} alt={tile.logo} style={{maxWidth: '200px', height: '200px'}}/>
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
      </div>
    )
  }
}
