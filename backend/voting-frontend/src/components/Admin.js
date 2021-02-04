import { Button, ButtonGroup, Grid, Paper,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/admin";
import AdminForm from "./AdminForm";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

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
//props.classes
//const {classes, props} = props

const Admin = ({classes, ...props}) => {
    const [currentId, setCurrentId] = useState(0)
    //const {x, setX} = useState(0)
    //setX(5)

    useEffect(()=> {
        props.fetchAllAdmin()
    },[]) //componentAdmin

    const onDelete = id =>{
        if(window.confirm('Are you sure to delete this user?'))
            props.deleteAdmin(id)
    }

    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs= {6}>
                    <AdminForm {...({currentId, setCurrentId})} />
                </Grid>
                <Grid item xs= {6}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Password</TableCell>
                                    <TableCell>Rank</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.adminList.map((record, index)=>{
                                        return (<TableRow key = {index} hover>
                                            <TableCell>{record.name}</TableCell>
                                            <TableCell>{record.password}</TableCell>
                                            <TableCell>{record.rank}</TableCell>
                                            <TableCell>
                                                <ButtonGroup variant= "text">
                                                    <Button><EditIcon color= "primary"
                                                    onClick= {()=>{setCurrentId(record.id)}}
                                                    /></Button>
                                                    <Button><DeleteIcon color= "secondary"
                                                    onClick={()=>onDelete(record.id)}
                                                    /></Button>
                                                </ButtonGroup>
                                            </TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = state => ({
        adminList:state.admin.list
    })

const mapActionToProps = {
    fetchAllAdmin :  actions.fetchAll,
    deleteAdmin : actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Admin));