import React, { Component } from 'react'
import axios from 'axios';
import { Grid, Container, Paper,  Button, Link } from '@material-ui/core';

const styles = {
    root: {
          overflow: 'hidden',
        },
        paper : {
          margin: "30px auto",
          padding: 20,
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
  }

export default class VoteCandidate extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          business: []
        };
    }
    
    
    componentDidMount(){
        debugger;
        axios.get('http://localhost:5000/api/candidate/')
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
    
    selectCandidate(e) {
      debugger;
      const formData = new FormData()
            formData.append('candidateVoteCount',++e.candidateVoteCount)
            formData.append('candidateNo',e.candidateNo)
            formData.append('candidateName',e.candidateName)
            formData.append('party_ID',parseInt(e.party_ID))
            formData.append('image',e.image)
            formData.append('imageFile',e.imageFile)
      axios.put('http://localhost:5000/api/candidate/'+e.candidateID, formData)
      .then(res => {console.log(res.config.data);});
      debugger;
      // this.props.close();
      this.props.history.push('/voteParty');
      
    }
    
      render() {
        return (
        <Container style={styles.root}>
             <Paper style={styles.paper} elevation={3} >
                <Grid  spacing={4}>
                {this.state.business.map((tile, i) => (
                        <Button 
                          key={i}
                          onClick={() => this.selectCandidate(tile)}
                          variant="contained"
                          //style= {styles.card}
                        // onMouseOver={MouseOver} 
                        // onMouseOut={MouseOut}
                        >
                          <div style={styles.card} >
                            <div style={styles.media}>
                            <img src={tile.imageSrc} alt={tile.image} />
                            </div>
                            <div style={styles.text}>
                            <h1>{tile.candidateName}</h1>
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