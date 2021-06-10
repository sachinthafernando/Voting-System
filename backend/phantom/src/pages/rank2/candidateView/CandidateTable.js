import { Button, ButtonGroup, TableCell, TableRow, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from 'axios';
import React from 'react'
import EditCandidate from './EditCandidate';

export default function CandidateTable(props) {

    const [open, setOpen] = React.useState(false);debugger;

    const handleClickOpen = () => {
        setOpen(true);
        };
    
        const handleClose = () => {
        setOpen(false);
        };
    
        const DeleteCandidate = () =>{
            if(window.confirm('Are you sure to delete this record?'))
            {
                axios.delete('https://localhost:5001/api/candidate/'+props.obj.candidateID)
                .then(json => {
                    if(json.data){
                        alert('Record deleted successfully!!');
                    }
                })
            }
        };

    return (
        <TableRow>
                <TableCell style={{width: '12%', textAlign: 'center'}}>{props.obj.candidateID}</TableCell>
                <TableCell style={{width: '12%', textAlign: 'center'}}>{props.obj.candidateNo}</TableCell>
                <TableCell style={{width: '25%'}}>{props.obj.candidateName}</TableCell>
                <TableCell style={{width: '16%', textAlign: 'center'}}>{props.obj.party_ID}</TableCell>
                <TableCell style={{width: '20%', textAlign: 'center'}}>
                    <img src={props.obj.imageSrc} height={"150px"} alt={props.obj.candidateName}/>
                </TableCell>
                <TableCell style={{width: '15%', textAlign: 'center'}}>
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
                            maxWidth='md'
                            // PaperComponent={PaperComponent}
                            // aria-labelledby="draggable-dialog-title"
                        >
                            <DialogTitle style={{ cursor: 'move' }} >
                            Edit Candidate Details
                            </DialogTitle>
                            <DialogContent>
                            <EditCandidate 
                                user = {props.obj.candidateID}
                                close = {handleClose}
                            />
                            </DialogContent>
                        </Dialog>
                        <Button>
                            <DeleteIcon color= "secondary"
                            onClick={DeleteCandidate}/>
                        </Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
    )
}

