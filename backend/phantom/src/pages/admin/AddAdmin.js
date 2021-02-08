import { Container } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react';


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
            <Container className="App">
                <h4>Enter Admin Informations</h4>
                <form onSubmit={this.addAdmin} autoComplete="off">
                <input name="name" placeholder="Name" onChange={this.onChangeName} value={this.state.Name} /> <br />
                <input name="password" placeholder="Password" onChange={this.onChangePassword} value={this.state.Password} /> <br />
                <input name="rank" placeholder="Rank" onChange={this.onChangeRank} value={this.state.Rank} /> <br />
                <button type="submit">Submit</button>
            </form>
            </Container>
        )
    }
}
