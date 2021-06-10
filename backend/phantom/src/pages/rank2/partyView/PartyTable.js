import { Button, ButtonGroup, TableCell, TableRow, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from 'axios';
import React from 'react'
import EditParty from './EditParty';
import { FiberManualRecordRounded } from '@material-ui/icons';

export default function PartyTable(props) {

    const [open, setOpen] = React.useState(false);debugger;

    const handleClickOpen = () => {
        setOpen(true);
        };
    
        const handleClose = () => {
        setOpen(false);
        };
    
        const DeleteParty = () =>{
            if(window.confirm('Are you sure to delete this record?'))
            {
                axios.delete('https://localhost:5001/api/party/'+props.obj.partyID)
            .then(json => {
                if(json.data){
                    alert('Record deleted successfully!!');
                }
            })
            }
        };

    return (
        <TableRow>
                <TableCell style={{width: '10%', textAlign: 'center'}}>{props.obj.partyID}</TableCell>
                <TableCell style={{width: '35%'}}>{props.obj.partyName}</TableCell>
                <TableCell style={{width: '20%', textAlign: 'center'}}><FiberManualRecordRounded style={{color: props.obj.color, fontSize: 'xxx-large'}}/></TableCell>
                <TableCell style={{width: '20%', textAlign: 'center'}}>
                    <img src={props.obj.logoSrc}  height={"150px"} alt ={props.obj.partyName}/>
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
                            Edit Party Details
                            </DialogTitle>
                            <DialogContent>
                            <EditParty 
                                user = {props.obj.partyID}
                                close = {handleClose}
                            />
                            </DialogContent>
                        </Dialog>
                        <Button>
                            <DeleteIcon color= "secondary"
                            onClick={DeleteParty}/>
                        </Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
    )
}
