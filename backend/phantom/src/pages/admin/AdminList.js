import { Button, ButtonGroup, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'
import AddAdmin from './AddAdmin';
import AdminTable from './AdminTable';

const styles = {
    root: {
        "& .MuiTableCellHead": {
            fontSize:"1.25px",

            margin: "50px auto",
            minWidth: 230,
            height: "800",
            display:"flex",
        }
    },
    paper : {
       // margin: "10px auto",  //removed for fixed NavBar on top
        padding: 80,
    }
}

//const classes = styles();

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
            return <AdminTable obj={object} key={i} />;
        })
    }
    createAdmin(){
        return <AddAdmin/>;
    }

    render() {
        return (
            <Paper style={styles.paper} elevation={3} >
                <Container >
                <Grid container spacing={4}>
                    <Grid item xs= {6}>
                        {this.createAdmin()}
                        </Grid>
                    <Grid item xs= {6}>
                        <TableContainer>
                            <Table>
                            <TableHead style={styles.root}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Password</TableCell>
                                    <TableCell>Rank</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.tabRow()}
                            </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
                </Container>
            </Paper>
        );
    }
}
