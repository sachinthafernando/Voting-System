import { Button, ButtonGroup, TableCell, TableRow } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import EditAdmin from './EditAdmin';

export default function AdminTable(props) {

    const [open, setOpen] = React.useState(false);debugger;

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const DeleteAdmin = () =>{
        axios.delete('http://localhost:5000/api/admin/'+props.obj.adminID)
        .then(json => {
            if(json.statusText=='OK'){
                alert('Record deleted successfully!!');
            }
        })
    }

    return (
        <TableRow>
                <TableCell>{props.obj.name}</TableCell>
                <TableCell>{props.obj.password}</TableCell>
                <TableCell>{props.obj.rank}</TableCell>
                <TableCell>
                    <ButtonGroup variant="text">
                        <Button>
                        <EditIcon color="primary" onClick={handleClickOpen}/>
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                        >
                            <DialogTitle style={{ cursor: 'move' }} >
                            Edit User Details
                            </DialogTitle>
                            <DialogContent>
                            <EditAdmin 
                                user = {props.obj.adminID}
                                close = {handleClose}
                            />
                            </DialogContent>
                        </Dialog>
                        <Button>
                            <DeleteIcon color= "secondary"
                            onClick={DeleteAdmin}/>
                        </Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
    )
}


// export default class AdminTable extends Component {

//     constructor(props) {
//         super(props);debugger;
//     }

//     DeleteAdmin = () =>{
//         axios.delete('http://localhost:5000/api/admin/'+this.props.obj.adminID)
//         .then(json => {
//             if(json.statusText=='OK'){
//                 alert('Record deleted successfully!!');
//             }
//         })
//     }

//     render() {
//         return (
//             <TableRow>
//                 <TableCell>{this.props.obj.name}</TableCell>
//                 <TableCell>{this.props.obj.password}</TableCell>
//                 <TableCell>{this.props.obj.rank}</TableCell>
//                 <TableCell>
//                     <ButtonGroup variant="text">
//                         <Button>
//                         <Link to={"/editAdmin/"+this.props.obj.adminID }>
//                             <EditIcon color="primary" />
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
