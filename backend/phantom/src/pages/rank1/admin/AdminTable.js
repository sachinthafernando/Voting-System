import { Button, ButtonGroup, TableCell, TableRow, Table, TableBody, TableContainer, TableHead } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from 'axios';
import React, { useState, useEffect } from 'react'

import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import EditAdmin from './EditAdmin';

export default function AdminTable(props) {
    
    const [admin, setAdmin] = useState([]);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState('');

    useEffect(() => {
        return () => {
            console.log('AdminTable');
        }
    }, [])

    useEffect(() => {
        axios.get('https://localhost:5001/api/'+ props.rank)
        .then(response => {
            setAdmin(response.data) ;
        })
        .catch(function (error) {
            console.log(error);
        });
    })
    
    const handleClickOpen = (admin, event) => {
        setOpen(true);
        setEdit(admin);
    };
    
    const handleClose = () => {
        setOpen(false);
        setEdit('');
    };

    const DeleteAdmin = () =>{
        debugger;
        if (admin.rank1AdminID) {debugger;
            axios.delete('https://localhost:5001/api/rank1Admin/'+admin.rank1AdminID)
            .then(json => {
                if(json.data){
                    alert('Record deleted successfully!!');
                }
            })
        } 
        if (admin.rank2AdminID) {debugger;
            axios.delete('https://localhost:5001/api/rank2Admin/'+admin.rank2AdminID)
            .then(json => {
                if(json.data){
                    alert('Record deleted successfully!!');
                }
            })
        }
        if (admin.rank3AdminID) {debugger;
            axios.delete('https://localhost:5001/api/rank3Admin/'+admin.rank3AdminID)
            .then(json => {
                if(json.data){
                    alert('Record deleted successfully!!');
                }
            })
        }
        if (admin.rank4AdminID) {debugger;
            axios.delete('https://localhost:5001/api/rank4Admin/'+admin.rank4AdminID)
            .then(json => {
                if(json.data){
                    alert('Record deleted successfully!!');
                }
            })
        }
    }

    return (
        
        <TableContainer style={{maxHeight: '700px'}} className="tableContainer">
            <Table  stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {admin.map((admin, index) => (
                        <TableRow key={index}>
                        <TableCell>{admin.name}</TableCell>
                        <TableCell>{admin.password}</TableCell>
                        <TableCell>
                            <ButtonGroup variant="text">
                                <Button>
                                <EditIcon color="primary" onClick={(e) => handleClickOpen(admin, e)}/>
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
                                        table = {props.rank}
                                        user = {edit.rank1AdminID?edit.rank1AdminID
                                            :edit.rank2AdminID?edit.rank2AdminID
                                            :edit.rank3AdminID?edit.rank3AdminID
                                            :edit.rank4AdminID?edit.rank4AdminID:null}
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
                )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}