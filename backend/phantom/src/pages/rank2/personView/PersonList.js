import { Container, Grid, IconButton, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'
import PersonTable from './PersonTable';
import SearchIcon from '@material-ui/icons/Search';
import { CloseSharp } from '@material-ui/icons';
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

export default class PersonList extends Component {

    constructor(props) {
        super(props);

        this.getSearch = this.getSearch.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
        this.searchNIC = this.searchNIC.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);

        this.state = {
            business: [],
            checking: '',
            search: [],
            message: '',
            page: 0,
            rowsPerPage: 10,
            isLoading: true,
        };
    }

    componentDidMount(){
        debugger;
        axios.get('https://localhost:5001/api/person/')
        .then(response => {
            this.setState({ business: response.data, search: response.data,});
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

    getSearch(e){
        this.setState({
            checking: e.target.value,
        });
    }
    closeSearch(){
        const data = this.state.business;

        this.setState({
            checking: '',
            search: data,
            message: '',
        });
    }

    searchNIC(){
        const nic = this.state.checking.toString();
        const data = this.state.business;

        let newData = [];
        if (nic.match(/^[0-9]+$/)){
            for(var i = 0; i < data.length; i++) {

                let check = data[i].nic.toString();
    
                if (check.includes(nic)) {
                    newData.push(data[i]);
                }
            }

            let message = newData.length + " results found";
            this.setState({
                search: newData,
                message: message,
            });
        }
        else{
            this.setState({
                search: data,
                message: '',
            });
        }
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
        return this.state.search.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
        .map(function (object, i) {
            return <PersonTable obj={object} key={i} /> ;
        })
    }
    
    render() {
        return (
            this.state.isLoading? <CommonLoading /> :
            <Container>
                <div style={{display: 'flex', alignItems: 'center', marginLeft: '20px'}}>
                    <InputBase
                        className= "searchBar"
                        placeholder="Search NIC"
                        value = {this.state.checking}
                        onChange = {this.getSearch}
                        style= {styles.textField}
                    />
                    <IconButton className= "searchButton" aria-label="search" onClick={this.searchNIC}>
                        <SearchIcon />
                    </IconButton>
                    {this.state.message? 
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h4 className= 'validate' style={{paddingLeft: '20px', fontSize: '1rem', width: 'fit-content'}}>{this.state.message}</h4> 
                        <IconButton className= "searchButton" aria-label="search" onClick={this.closeSearch}>
                            <CloseSharp/>
                        </IconButton>
                    </div>
                    : null}
                </div>
                <Paper style={styles.paper} elevation={3} >
                    <Grid container spacing={4}>
                        <Grid item xs= {12} >
                            <TableContainer style={{maxHeight: '500px'}}>
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead style={styles.root}>
                                <TableRow>
                                    <TableCell><h4>Serial No</h4></TableCell>
                                    <TableCell><h4>NIC</h4></TableCell>
                                    <TableCell><h4>GN Division</h4></TableCell>
                                    <TableCell><h4>Voted</h4></TableCell>
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
                                count={this.state.search.length}
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
