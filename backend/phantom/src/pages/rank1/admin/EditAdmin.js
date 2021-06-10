import { Button, Container, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'

const styles = {
    root: {
          margin: "30px auto",
          minWidth: 230,
    },
    formControl: {
        margin: "10px auto",
        minWidth: 230,
    },
    textField: {
        margin: "10px",
        width: 230,
      },
    sMargin:{
        margin: "10px",
    },
    paper : {
        margin: "30px auto",
        padding: 20,
    }
}

export default class EditAdmin extends Component {

    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.cancel = this.cancel.bind(this);

        this.state = {
            Name: '',
            Password: '',
            PollingCenter: ''
        }
    }

    componentDidMount() {debugger;
        if (this.props.table === "Rank4Admin") {
            axios.get('https://localhost:5001/api/'+ this.props.table + '/' +this.props.user)
            .then(response => {
                debugger;
                this.setState({
                    Name: response.data.name,
                    Password: response.data.password,
                    PollingCenter: response.data.pollingCenter,
                });debugger;
            })
            .catch(function (error) {
                console.log(error);
            });
        } else {
            axios.get('https://localhost:5001/api/'+ this.props.table + '/' +this.props.user)
            .then(response => {
                debugger;
                this.setState({
                    Name: response.data.name,
                    Password: response.data.password,
                });debugger;
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            Password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        var obj = {};
        switch (this.props.table) {
            case "Rank1Admin":
                obj = {
                    Rank1AdminID: this.props.user,
                    Name: this.state.Name,
                    Password: this.state.Password,
                };
                break;
            case "Rank2Admin":
                obj = {
                    Rank2AdminID: this.props.user,
                    Name: this.state.Name,
                    Password: this.state.Password,
                };
                break;
            case "Rank3Admin":
                obj = {
                    Rank3AdminID: this.props.user,
                    Name: this.state.Name,
                    Password: this.state.Password,
                };
                break;
            case "Rank4Admin":
                obj = {
                    Rank4AdminID: this.props.user,
                    Name: this.state.Name,
                    Password: this.state.Password,
                    PollingCenter: this.state.PollingCenter,
                    ScanScreen: true,
                    VoteScreen: false,
                };
                break;
        
            default:
                break;
        }
        
        axios.put('https://localhost:5001/api/'+ this.props.table + '/' +this.props.user, obj)
        .then(res => {console.log(res.config.data);})
        .catch(function (error) {
            console.log(error);
        });
        this.props.close();
    }

    cancel(){
        this.props.close();
    }

    render() {
        return (
            <Container maxWidth="lg" >
                <form onSubmit={this.onSubmit} autoComplete="off" noValidate style={styles.root}>
                <Grid container>
                        <TextField
                            name = "name"
                            variant = "outlined"
                            label = "Name"
                            value = {this.state.Name}
                            onChange = {this.onChangeName}
                            style= {styles.textField}
                        />
                        <TextField
                            name = "password"
                            variant = "outlined"
                            label = "Password"
                            value = {this.state.Password}
                            onChange = {this.onChangePassword}
                            style= {styles.textField}
                        />
                </Grid>
                        <div>
                            <Button
                                variant = "contained"
                                color = "primary"
                                type = "submit"
                                style= {styles.sMargin}
                            >
                                Submit
                            </Button>
                            <Button
                                variant = "contained"
                                onClick = {this.cancel}
                                style= {styles.sMargin}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
            </Container>
        )
    }
}
