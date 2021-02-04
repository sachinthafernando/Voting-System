import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from "@material-ui/core";
import React,{useState, useEffect} from "react";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/admin";

import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          minWidth: 230,
        },
    },
    formControl: {
        margin: theme.spacing(1),
          minWidth: 230,
    },
    textField: {
        margin: theme.spacing(1),
        width: 230,
      },
    sMargin:{
        margin: theme.spacing(1),
    }
})

const initialFieldValues = {
    name : '',
    password : '',
    rank : '',
    showPassword: false,
}

const AdminForm = ({classes, ...props}) => {

      //validate()
      const validate = (fieldValues = values) =>{
        let temp = { ...errors}
        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "":"Required"
        if ('password' in fieldValues)
            temp.password = fieldValues.password ? "":"Required"
        if ('rank' in fieldValues)
            temp.rank = fieldValues.rank ? "":"Required"
        setErrors({
            ...temp
        })
        if (fieldValues === values)
            return Object.values(temp).every(x => x==="")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, validate, props.setCurrentId)

    //material-ui select dropdown
    const inputLabel = React.useRef(null);
    const [labelWidth, setLableWidth] = React.useState(0);
    React.useEffect(() => {
        setLableWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    useEffect(()=>{
        if (props.currentId !== 0){
            setValues({
                ...props.adminList.find(x=> x.id === props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])

    const handleSubmit = e => {
        e.preventDefault()
        if(validate())
        {   
            const onSuccess = () => {
                resetForm()
                //addToast("Submitted successfully", { appearance: 'success' })
            }
            if (props.currentId===0)
            props.createAdmin(values, onSuccess)
                //props.createAdmin(values,()=>{window.alert('Admin profile created.')})
            else
            props.updateAdmin(props.currentId, values, onSuccess)
                //props.updateAdmin(props.currentId, values, ()=> {window.alert('Admin profile updated.')})
        }
    }


    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField 
                        name= "name"
                        variant= "outlined"
                        label= "Name"
                        value = {values.name}
                        onChange= {handleInputChange}
                        {...(errors.name && {error:true, helperText:errors.name})}
                    />
                     {/* <TextField 
                        name= "password"
                        variant= "outlined"
                        label= "Password"
                        type="password"
                        //autoComplete="current-password"
                        value = {values.password}
                        onChange= {handleInputChange}
                    /> */}
                    <FormControl 
                    className={clsx(classes.margin, classes.textField)} 
                    variant="outlined"
                    {...(errors.password && {error:true})}
                    >
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                        labelWidth={70}
                        />
                        {errors.password && <FormHelperText>{errors.password}</FormHelperText>}
                    </FormControl>
                     {/* <TextField 
                        name= "rank"
                        variant= "outlined"
                        label= "Rank"
                        value = {values.rank}
                        onChange= {handleInputChange}
                    /> */}
                    <FormControl variant="outlined" 
                    className={classes.formControl}
                    {...(errors.rank && {error:true})}
                    >
                        <InputLabel ref={inputLabel}>Rank</InputLabel>
                        <Select
                            name= "rank"
                            value = {values.rank}
                            onChange= {handleInputChange}
                            labelWidth={labelWidth}
                        >
                            <MenuItem value="">Select Rank</MenuItem>  
                            <MenuItem value="1">Rank 1</MenuItem> 
                            <MenuItem value="2">Rank 2</MenuItem> 
                            <MenuItem value="3">Rank 3</MenuItem> 
                            <MenuItem value="4">Rank 4</MenuItem> 
                        </Select>
                        {errors.rank && <FormHelperText>{errors.rank}</FormHelperText>}
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <Button
                        variant = "contained"
                        color="primary"
                        type="Submit"
                        className={classes.sMargin}
                        >
                            Submit
                        </Button>
                        <Button
                        variant = "contained"
                        className={classes.sMargin}
                        onClick= {resetForm}
                        >
                            Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    )
}

const mapStateToProps = state => ({
    adminList:state.admin.list
})

const mapActionToProps = {
createAdmin :  actions.create,
updateAdmin : actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(AdminForm));