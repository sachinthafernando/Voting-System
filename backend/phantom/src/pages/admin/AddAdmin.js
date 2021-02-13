import { Button, Container, Grid, TextField, MenuItem, Select, InputLabel, FormControl } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react';

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
    }
}
export default class AddAdmin extends Component {

    constructor(props){
        super(props)

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRank = this.onChangeRank.bind(this);
        this.addAdmin = this.addAdmin.bind(this);

        this.state = {
            Name:'',
            Password:'',
            Rank:''
        }
    }

    // handleChange= (e) => {
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     })
    // }
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

    onChangeRank(e) {
        this.setState({
            Rank: e.target.value
        });
    }


    addAdmin=()=>{
        debugger;
        //e.preventDefault();
        const obj = {
            Name: this.state.Name,
            Password: this.state.Password,
            Rank: parseInt(this.state.Rank)
        };
        axios.post('http://localhost:5000/api/admin/', obj)
        .then(json => {
            if (json.statusText == 'Created'){
                debugger;
                console.log(json.statusText);
                debugger;
                alert("Data Save Successfully");
            }
            else{
                debugger;
                alert('Data not Saved');
            }
        });
        debugger;
        this.props.history.push('/adminList')
    }

    
    render() {
        return (
            <Container maxWidth="sm">
                <h4>Enter Admin Informations</h4>
                <form onSubmit={this.addAdmin} autoComplete="off" noValidate style={styles.root}>
                    <Grid container>
                        <Grid item xs={6}>
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
                            {/* <TextField
                                name = "rank"
                                variant = "outlined"
                                label = "Rank"
                                value = {this.state.Rank}
                                onChange = {this.onChangeRank}
                            /> */}
                            <FormControl variant="outlined" style={styles.formControl}>
                                <InputLabel >Rank</InputLabel>
                                <Select
                                    name= "rank"
                                    value = {this.state.Rank}
                                    onChange= {this.onChangeRank}
                                >
                                    <MenuItem value="">Select Rank</MenuItem>  
                                    <MenuItem value="1">Rank 1</MenuItem> 
                                    <MenuItem value="2">Rank 2</MenuItem> 
                                    <MenuItem value="3">Rank 3</MenuItem> 
                                    <MenuItem value="4">Rank 4</MenuItem> 
                                    </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
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
                        </Grid>
                    </Grid>
                
                
                {/* <input name="name" placeholder="Name" onChange={this.onChangeName} value={this.state.Name} /> <br />
                <input name="password" placeholder="Password" onChange={this.onChangePassword} value={this.state.Password} /> <br />
                <input name="rank" placeholder="Rank" onChange={this.onChangeRank} value={this.state.Rank} /> <br />
                <button type="submit">Submit</button> */}
            </form>
            </Container>
        )
    }
}
