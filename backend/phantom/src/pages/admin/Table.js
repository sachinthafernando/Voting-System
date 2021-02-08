import { Grid, Paper, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize:"1.25rem"
        }
    },
    paper : {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})

export default class Table extends Component {

    constructor(props) {
        super(props);
    }

    DeleteAdmin = () =>{
        axios.delete('http://localhost:5000/api/admin/'+this.props.obj.adminID)
        .then(json => {
            if(json.statusText=='OK'){
                alert('Record deleted successfully!!');
            }
        })
    }

    render() {
        return (

            // ------ DELETE this commented section.------
            // <Paper style={styles.paper} elevation={3}>
            //     <Grid container>
            //         <TableContainer>
            //             <Table>
            //                 <TableHead style={styles.root}>
            //                     <TableRow>
            //                         <TableCell>Name</TableCell>
            //                         <TableCell>Password</TableCell>
            //                         <TableCell>Rank</TableCell>
            //                     </TableRow>
            //                 </TableHead>
            //             </Table>
            //         </TableContainer>
            //     </Grid>
            // </Paper>


            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.password}
                </td>
                <td>
                    {this.props.obj.rank}
                </td>
                <td>
                    <Link to={"/editAdmin/"+this.props.obj.adminID} className="btn btn-success">Edit</Link>
                </td>
                <td>
                    <button type="button" onClick={this.DeleteAdmin} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}
