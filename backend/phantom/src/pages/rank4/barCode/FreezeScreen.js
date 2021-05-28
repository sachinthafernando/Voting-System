import React, { Component } from 'react'

import jwt_decode from "jwt-decode"
import axios from 'axios';
import { Container, Paper } from '@material-ui/core';

const styles = {
    root: {
          margin: "30px auto",
          minWidth: 230,
    },
    
}

export default class FreezeScreen extends Component {

    constructor(props){
        super(props)

        this.screen = this.screen.bind(this);

        this.state = {
            PollingCenter: '',
            onScreen: '',
            intervalID : 0,
        }
    }

    componentDidMount(){
       
        debugger;
        this.onget();
        this.intervalID = setInterval(this.screen,2000);
    }

    onget(){
        debugger;
        if(localStorage.token){
            var decoded = jwt_decode(localStorage.token);
            this.setState({PollingCenter: decoded})
        }
        debugger;
        axios.get('https://localhost:5001/api/Rank4Admin/'+ decoded.id)
            .then(res => {debugger;
                this.setState({
                    onScreen: res.data.voteScreen,
                });
                debugger;
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    screen(){
        debugger;
        axios.get('https://localhost:5001/api/Rank4Admin/'+ this.state.PollingCenter.id)
        .then(res => {debugger;
            this.setState({
                onScreen: res.data.voteScreen,
            });
            debugger;
        })
        .catch(function (error) {
            console.log(error);
        })
        this.endScreen();
    }

    endScreen(){
        if (this.state.onScreen) {
            clearInterval(this.intervalID);
            this.props.history.push('/voteParty');
        }
    }

    render() {
        return (
            <Container style= {styles.root}>
                <Paper>
                    <h1>Freeze Screen</h1>
                    
                </Paper>
            </Container>
        )
    }
}
