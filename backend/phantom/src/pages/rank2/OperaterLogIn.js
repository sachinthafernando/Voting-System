import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { BoxLoading } from 'react-loadingg';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Log in as an operator'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function OperaterLogIn(props) {

    const [name, setName] = useState('');
    const [key, setKey] = useState('');
    const [loading, setloading] = useState(true);

    useEffect(() => {
      setloading(false);
    })

    const onChangeName = (e) => {
        setName(e.target.value);
        debugger;
    }
    const onChangeKey = (e) => {
        setKey(e.target.value);
        debugger;
    }
    const submit = () => {
        if (name === 'admin' && key === 'password') {
          debugger;
            props.history.push('/operatorView');
            debugger;
        }
        else {
            alert('You have entered wrong name or key. Please check again and proceed.')
        }
    }
  const classes = useStyles();

  return (
    loading? <BoxLoading/> :
    <Container  maxWidth="xs" style={{backgroundColor: "lightsteelblue"}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form onSubmit={submit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Operator name"
            name="name"
            autoComplete="off"
            autoFocus
            value={name}
            onChange={(e) => onChangeName(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="key"
            label="key"
            type="password"
            id="key"
            autoComplete="off"
            value={key}
            onChange={(e) => onChangeKey(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Enter
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}