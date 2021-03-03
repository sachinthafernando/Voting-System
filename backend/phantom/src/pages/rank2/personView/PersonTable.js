import { Button, ButtonGroup, TableCell, TableRow } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from 'axios';
import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
//import Draggable from 'react-draggable';

import EditPerson from './EditPerson';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'




export default function PersonTable(props) {

    const [open, setOpen] = React.useState(false);debugger;

    // function PaperComponent(props) {
    //     return (
    //       <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
    //         <Paper {...props} />
    //       </Draggable>
    //     );
    // };

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const DeletePerson = () =>{
        axios.delete('http://localhost:5000/api/person/'+props.obj.nic)
        .then(json => {
            if(json.statusText=='OK'){
                alert('Record deleted successfully!!');
            }
        })
    };

        return (
            <TableRow>
                <TableCell>{props.obj.serialNo}</TableCell>
                <TableCell>{props.obj.nic}</TableCell>
                <TableCell>{props.obj.gnd}</TableCell>
                <TableCell>{props.obj.voted.toString()}</TableCell>
                <TableCell>
                    <ButtonGroup variant="text">
                        <Button>
                        {/* <Link to={"/editPerson/"+this.props.obj.nic}>
                        <EditIcon color="primary" />
                        </Link> */}
                        <EditIcon color="primary" onClick={handleClickOpen}/>
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            // PaperComponent={PaperComponent}
                            // aria-labelledby="draggable-dialog-title"
                        >
                            <DialogTitle style={{ cursor: 'move' }} >
                            Edit NIC Details
                            </DialogTitle>
                            <DialogContent>
                            <EditPerson 
                                user = {props.obj.nic}
                                close = {handleClose}
                            />
                            </DialogContent>
                        </Dialog>
                        <Button>
                            <DeleteIcon color= "secondary"
                            onClick={DeletePerson}/>
                        </Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
        );
}


// export default class PersonTable extends Component {

//     constructor(props) {
//         super(props);
//         debugger;
//     }

//     DeleteAdmin = () =>{
//         axios.delete('http://localhost:5000/api/person/'+this.props.obj.nic)
//         .then(json => {
//             if(json.statusText=='OK'){
//                 alert('Record deleted successfully!!');
//             }
//         })
//     };

//     render() {
//         return (
//             <TableRow>
//                 <TableCell>{this.props.obj.serialNo}</TableCell>
//                 <TableCell>{this.props.obj.nic}</TableCell>
//                 <TableCell>{this.props.obj.gnd}</TableCell>
//                 <TableCell>{this.props.obj.voted.toString()}</TableCell>
//                 <TableCell>
//                     <ButtonGroup variant="text">
//                         <Button>
//                         <Link to={"/editPerson/"+this.props.obj.nic}>
//                         <EditIcon color="primary" />
//                         </Link>
//                         </Button>
//                         <Button>
//                             <DeleteIcon color= "secondary"
//                             onClick={this.DeleteAdmin}/>
//                         </Button>
//                     </ButtonGroup>
//                 </TableCell>
//             </TableRow>
//         );
//     }
// }
