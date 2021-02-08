import axios from 'axios';
import React, { Component } from 'react'

export default class EditAdmin extends Component {

    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRank = this.onChangeRank.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            Password: '',
            Rank: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/admin/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                Name: response.data.name,
                Password: response.data.password,
                Rank: response.data.rank
            });
        })
        .catch(function (error) {
            console.log(error);
        })
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

    onChangeRank(e) {
        this.setState({
            Rank: e.target.value
        });
    }

    onSubmit(e) {
        debugger;
        e.preventDefault();
        const obj = {
            Id: this.props.match.params.id,
            Name: this.state.Name,
            Password: this.state.Password,
            Rank: parseInt(this.state.Rank)
        };
        axios.put('http://localhost:5000/api/admin/'+this.props.match.params.id, obj)
        .then(res => {console.log(res.config.data);});
        debugger;
        this.props.history.push('/adminList');
        debugger;
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} autoComplete="off">
                <input name="name" placeholder="Name" onChange={this.onChangeName} value={this.state.Name} /> <br />
                <input name="password" placeholder="Password" onChange={this.onChangePassword} value={this.state.Password} /> <br />
                <input name="rank" placeholder="Rank" onChange={this.onChangeRank} value={this.state.Rank} /> <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}
