import { Container } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Table from './Table';

export default class AdminList extends Component {

    constructor(props) {
        super(props);
        this.state = {business: []};
    }
    // componentWillMount(){
    //     this.setState({
    //         obj: {},
    //     })
    // }
    componentDidMount(){
        debugger;
        axios.get('http://localhost:5000/api/admin/')
        .then(response => {
            this.setState({ business: response.data});
            debugger;
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    tabRow(){
        return this.state.business.map(function (object, i) {
            return <Table obj={object} key={i} />;
        })
    }

    render() {
        return (
            <Container>
                <h4 style={{margin:10} }>Admin List</h4>
                <table className="table table-striped" style={{margin:10}}>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Rank</th>
                        <th colSpan="4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
                <Link to={'/addAdmin'}>Add Admin</Link>
            </Container>
        );
    }
}
