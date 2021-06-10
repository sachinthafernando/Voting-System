import React, { Component } from 'react'
import axios from 'axios';
import { Grid, Container, Paper,  Button, Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import jwt_decode from "jwt-decode"

import nota from '../../../../images/NOTA_Option_Logo.png'

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
          display: 'flex',
          width: 1000
        },
        text: {
          alignSelf: 'center',
          paddingLeft: 30,
        },
        media: {
          paddingLeft: 20,
          padding: 10,
        },
        sMargin: {
          top: '20px',
          height: '100%',
          width: '100%',
          left: '20px'
        }
  }

export default class VoteCandidate extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.closeMessage = this.closeMessage.bind(this);

        var today = new Date(),

        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ':' + today.getMilliseconds();
    
        this.state = {
          business: [],
          count : 0,
          currentTime: time,
          personDist: 1,
          personDiv: 1,
          PollingCenter: '',
          message: '',
          setMessage: false,
          votes: 3,
          disableSubmit: true,
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
        this.setState({PollingCenter: decoded})
        debugger;
        axios.get('https://localhost:5001/api/Rank4Admin/'+ decoded.id)
        .then(res => {
            this.setState({ 
              personDist: res.data.personDist,
              personDiv: res.data.personDiv,
            });
            debugger;
            const distId =  this.state.personDist;
            axios.get('https://localhost:5001/api/candidate/GetByParty/'+ this.props.history.location.state.party + '/'+ distId)
            .then(response => {
                this.setState({ 
                  business: response.data
                });
                debugger;
            })
            .catch(function (error) {
                console.log(error);
            })
        })
        .catch(function (error) {
            console.log(error);
        })
        debugger;
      }
    }

    nextVote(e) {
      this.setState(( {count}) => ({
        count : count + 1
      }));
      this.setState({
        setMessage: true,
        message: 2-this.state.count +" votes left",
        votes: 2-this.state.count
      });
      if (this.state.count < 3) {
        debugger;
        this.selectCandidate(e);
        if(this.state.count === 2){
          debugger;
          this.onSubmit();
        }
      }
    }
    
    async selectCandidate(e) {
      debugger;
      const obj = {
        Time: this.state.currentTime,
        Candidate_ID: parseInt(e.candidateID),
        personDist: parseInt(this.state.personDist),
        personDiv: parseInt(this.state.personDiv),
      };
      debugger;
      await axios.post('https://localhost:5001/api/voteCan/', obj)
      .then(json => {
          if (json.data){
            debugger;
            console.log(json.statusText);
            debugger;
            this.setState({
              setMessage: true,
              message: 'vote Saved Successfully',
              disableSubmit: false,
            });
          }
          else{
              debugger;
              this.setState({
                setMessage: true,
                message: 'vote not Saved',
              });
          }
      });
    }

    async onSubmit() {
      const obj = {
        ScanScreen: Boolean(true),
        VoteScreen: Boolean(false),
      };
      debugger;
      await axios.put('https://localhost:5001/api/Rank4Admin/Screen/'+this.state.PollingCenter.id, obj)
      .then(res => {
          console.log(res.config.data);
          debugger;
      })
      .catch(function (error) {
          console.log(error);
      })
      debugger;
    this.props.history.push('/freezeScreen');
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
              <Grid item xs={4} style={{padding: '12px 30px'}}>
                <Typography variant='h5'>You have left : {this.state.votes} votes</Typography>
              </Grid>
              <Grid item xs={8} >
                <Typography variant='h2'>Vote Candidates</Typography>
              </Grid>
            </Grid>
            <Container style={styles.root} maxWidth='xl'>
             <Grid container>
               <Grid item xs={10} >
                <Paper style={styles.paper} elevation={3} >
                  <Grid>
                  {this.state.business.map((tile, i) => (
                          <Button 
                            key={i}
                            onClick={() => this.nextVote(tile)}
                            variant="contained"
                            className="votebtn"
                          >
                            <div style={{backgroundColor:'#655a5a'}} className='tile'>
                              <div style={styles.media}>
                              <img src={tile.imageSrc} alt={tile.image} style={{maxWidth: '200px', height: '200px'}}/>
                              </div>
                              <div style={styles.text}>
                                <Typography variant='h1'>x {tile.candidateNo}</Typography>
                                <h1>{tile.candidateName}</h1>
                              </div>
                            </div>
                          </Button>
                      )).concat(
                        <Button 
                        onClick = {this.onSubmit}
                          variant="contained"
                          className="votebtn"
                        >
                          <div style={{backgroundColor:'gainsboro'}} className='tile'>
                            <div style={styles.media}>
                            <img src={nota} alt='nota' style={{maxWidth: '200px', height: '200px'}}/>
                            </div>
                            <div style={styles.text}>
                              <Typography variant='h1'>NOTA</Typography>
                              <h4>None of the above</h4>
                            </div>
                          </div>
                        </Button>
                      )}
                  </Grid>
              </Paper>
               </Grid>
               <Grid item xs={2} > 
                  <Button
                    variant = "contained"
                    color = "secondary"
                    onClick = {this.onSubmit}
                    style= {styles.sMargin}
                    disabled= {this.state.disableSubmit}
                  >
                    <h2>Submit</h2>
                  </Button>
               </Grid>
             </Grid>
        </Container>
        </div>
        )
      }
    }