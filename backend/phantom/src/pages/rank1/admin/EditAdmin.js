import { Button, Container, Grid, TextField, MenuItem, Select, InputLabel, FormControl } from '@material-ui/core';
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
        margin: "10px auto",
        width: 230,
      },
    sMargin:{
        margin: "30px auto",
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
        this.onChangeCenter = this.onChangeCenter.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            Password: '',
            PollingCenter: '',
            disabled: true,
            obj: {},
        }
    }

    componentDidMount() {debugger;
<<<<<<< Updated upstream:backend/phantom/src/pages/admin/EditAdmin.js
        axios.get('http://localhost:5000/api/'+this.props.table+'/'+this.props.user)
=======
        axios.get('https://localhost:5001/api/admin/'+this.props.user)
>>>>>>> Stashed changes:backend/phantom/src/pages/rank1/admin/EditAdmin.js
        .then(response => {
            this.setState({
                Name: response.data.name,
                Password: response.data.password,
                PollingCenter: response.data.pollingCenter,
            });debugger;
        })
        .catch(function (error) {
            console.log(error);
        });

        if (this.props.table === 'Rank4Admin') {debugger;
            this.setState({
                disabled: false,
            })
        }
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value,
        });
        debugger;
        this.checkRank(e.target.value, this.state.Password, this.state.PollingCenter);
    }

    onChangePassword(e) {
        this.setState({
            Password: e.target.value,
        });
        debugger;
        this.checkRank(this.state.Name, e.target.value, this.state.PollingCenter);
    }

    onChangeCenter(e) {
        this.setState({
            PollingCenter: e.target.value,
        });
        debugger;
        this.checkRank(this.state.Name, this.state.Password, e.target.value);
    }

    checkRank(name, password, center){
        if (this.props.table === "Rank1Admin") {debugger
            this.setState({
                obj: {
                    Rank1AdminID: this.props.user,
                    Name: name,
                    Password: password,
                },
            })
        }
        if (this.props.table === "Rank2Admin") {
            this.setState({
                obj: {
                    Rank2AdminID: this.props.user,
                    Name: name,
                    Password: password,
                },
            })
        }
        if (this.props.table === "Rank3Admin") {
            this.setState({
                obj: {
                    Rank3AdminID: this.props.user,
                    Name: name,
                    Password: password,
                },
            })
        }
        if (this.props.table === "Rank4Admin") {
            this.setState({
                obj: {
                    Rank4AdminID: this.props.user,
                    Name: name,
                    Password: password,
                    PollingCenter: center,
                },
            })
        }
    }

    onSubmit(e) {
        debugger;
        e.preventDefault();
<<<<<<< Updated upstream:backend/phantom/src/pages/admin/EditAdmin.js
        axios.put('http://localhost:5000/api/'+this.props.table+'/'+this.props.user, this.state.obj)
=======
        const obj = {
            Id: this.state.adminID,
            Name: this.state.Name,
            Password: this.state.Password,
            Rank: parseInt(this.state.Rank)
        };
        axios.put('https://localhost:5001/api/admin/'+this.props.user, obj)
>>>>>>> Stashed changes:backend/phantom/src/pages/rank1/admin/EditAdmin.js
        .then(res => {console.log(res.config.data);});
        debugger;
        this.props.close();
        // this.props.history.push('/adminList');
        // debugger;
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
                        {
                        this.state.disabled? null :
                            <TextField 
                                name = "center"
                                variant = "outlined"
                                label = "Polling Center"
                                value = {this.state.PollingCenter}
                                onChange = {this.onChangeCenter}
                                style= {styles.textField}
                                disabled= {this.state.disabled}
                            />
                        }
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
                                style= {styles.sMargin}
                            >
                                Reset
                            </Button>
                        </div>

                {/* <input name="name" placeholder="Name" onChange={this.onChangeName} value={this.state.Name} /> <br />
                <input name="password" placeholder="Password" onChange={this.onChangePassword} value={this.state.Password} /> <br />
                <input name="rank" placeholder="Rank" onChange={this.onChangeRank} value={this.state.Rank} /> <br />
                <button type="submit">Submit</button> */}
                </form>
            </Container>
        )
    }
}
