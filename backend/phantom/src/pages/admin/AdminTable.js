import { Button, ButtonGroup, TableCell, TableRow } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class AdminTable extends Component {

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
            <TableRow>
                <TableCell>{this.props.obj.name}</TableCell>
                <TableCell>{this.props.obj.password}</TableCell>
                <TableCell>{this.props.obj.rank}</TableCell>
                <TableCell>
                    <ButtonGroup variant="text">
                        <Button>
                        <Link to={"/editAdmin/"+this.props.obj.adminID}>
                            <EditIcon color="primary"
                            />
                        </Link>
                        </Button>
                        <Button>
                            <DeleteIcon color= "secondary"
                            onClick={this.DeleteAdmin}/>
                        </Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
        );
    }
}
