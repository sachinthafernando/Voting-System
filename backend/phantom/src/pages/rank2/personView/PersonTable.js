import { Button, ButtonGroup, TableCell, TableRow } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PersonTable extends Component {

    constructor(props) {
        super(props);
        debugger;
    }

    DeleteAdmin = () =>{
        axios.delete('http://localhost:5000/api/person/'+this.props.obj.nic)
        .then(json => {
            if(json.statusText=='OK'){
                alert('Record deleted successfully!!');
            }
        })
    }

    render() {
        return (
            <TableRow>
                <TableCell>{this.props.obj.serialNo}</TableCell>
                <TableCell>{this.props.obj.nic}</TableCell>
                <TableCell>{this.props.obj.gnd}</TableCell>
                <TableCell>{this.props.obj.voted.toString()}</TableCell>
                <TableCell>
                    <ButtonGroup variant="text">
                        <Button>
                        <Link to={"/editPerson/"+this.props.obj.nic}>
                        </Link>
                        <EditIcon color="primary" />
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
