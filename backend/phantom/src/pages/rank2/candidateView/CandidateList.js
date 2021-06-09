import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'
import CandidateTable from './CandidateTable';
import { CommonLoading  } from 'react-loadingg';


const styles = {
    root: {
        "& .MuiTableCellHead": {
            fontSize:"1.25px",
        }
    },
    paper : {
        margin: "10px 10px 0px 10px",
        padding: "20px 20px 0px 20px",
    },
}

export default class CandidateList extends Component {

    constructor(props) {
        super(props);

        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);

        this.state = {
            business: [],
            page: 0,
            rowsPerPage: 10,
            isLoading: true,
        };
    }

    componentDidMount(){
        debugger;
        axios.get('https://localhost:5001/api/candidate/')
        .then(response => {
            this.setState({ business: response.data});
            debugger;
        })
        .catch(function (error) {
            console.log(error);
        })

        setTimeout(() => {
            this.setState({
                isLoading: false,
            })
        }, 1000);
    }

    handleChangePage(e, newpage){
        debugger;
        this.setState({
            page: newpage,
        })
    }
    handleChangeRowsPerPage(e){
        this.setState({
            rowsPerPage: e.target.value,
        })
    }

    tabRow(){
        return this.state.business.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
        .map(function (object, i) {
            return <CandidateTable obj={object} key={i} /> ;
        })
    }

    render() {
        return (
            this.state.isLoading? <CommonLoading /> :
            <Container>
                <Paper style={styles.paper} elevation={3} >
                    <Grid container spacing={4}>
                        <Grid item xs= {12}>
                            <TableContainer style={{maxHeight: '500px'}}>
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead style={styles.root}>
                                <TableRow>
                                    <TableCell><h4>Candidate ID</h4></TableCell>
                                    <TableCell><h4>Candidate No</h4></TableCell>
                                    <TableCell><h4>Candidate Name</h4></TableCell>
                                    <TableCell><h4>Party</h4></TableCell>
                                    <TableCell><h4>Image</h4></TableCell>
                                    <TableCell><h4>Actions</h4></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody style={{overflow:'auto'}}>
                                {this.tabRow()}
                            </TableBody>
                            </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={this.state.business.length}
                                rowsPerPage={this.state.rowsPerPage}
                                page={this.state.page}
                                onChangePage={this.handleChangePage}
                                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        )
    }
}
