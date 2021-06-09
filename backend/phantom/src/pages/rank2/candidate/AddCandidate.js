import React, { Component } from 'react'
import axios from 'axios';
import { Button, Container, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Paper, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { BoxLoading } from 'react-loadingg';

import defaultCandidateImg from '../../../images/candidate_placeHolder.png'

const styles = {
    root: {
          margin: "30px auto",
          minWidth: 230,
          backgroundColor: "#ffff89ed",
          padding: "40px",
          borderStyle: "double",
          borderRadius: "40px",
    },
    background: {
        position: "fixed",
        minWidth: "100%",
        minHeight: "100%",
        background: "url(https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) no-repeat center center fixed",
        backgroundSize: "cover",
        overflow: "hidden",
    },
    formControl: {
        margin: "10px auto",
        minWidth: 230,
    },
    textField: {
        margin: "10px auto",
        width: 230,
      },
    sMargin:{
        margin: "10px",
    },
    paper : {
        margin: "30px auto",
        padding: 20,
        backgroundColor: "#fdfd92c9",
        borderRadius: '60px',
    }
}

export default class AddCandidate extends Component {

    constructor(props){
        super(props)

        this.onChangeCandidateNo = this.onChangeCandidateNo.bind(this);
        this.onChangeCandidateName = this.onChangeCandidateName.bind(this);
        this.onChangePartyID= this.onChangePartyID.bind(this);
        this.onChangeDistrictID= this.onChangeDistrictID.bind(this);
        this.onChangeImage= this.onChangeImage.bind(this);
        this.AddCandidate = this.addCandidate.bind(this);
        this.closeMessage = this.closeMessage.bind(this);
        this.formReset = this.formReset.bind(this);

        this.state = {
            CandidateNo:'',
            CandidateName:'',
            partyOptions: [{ value: '', display:'Select Party'}],
            PartyID:'',
            districtOptions: [{ value: '', display:'Select District'}],
            districtID:'',
            image: '',
            imageSrc: defaultCandidateImg,
            imageFile: null,
            message: '',
            setMessage: false,
            validateError: {CandidateNo: true, CandidateName: true, Party: true, District: true, Image: true},
            error: {CandidateNo: '', CandidateName: '', Party: '', District: '', Image: ''},
            isLoading: true,
        
        }
    }

    closeMessage(){
        this.setState({
            setMessage: false,
            message: '',
        });
    }

    componentDidMount(){
        axios.get('https://localhost:5001/api/district/')
        .then(res => {
            debugger;
            let DistrictfromApi = res.data.map(disrictOption =>{
                debugger;
                return { value: disrictOption.id, display: disrictOption.name}
            });
            this.setState({
                districtOptions: [{ value: '', display:'Select District'}].concat(DistrictfromApi)
            });
        })
        .catch(function (error) {
            console.log(error);
        })
        this.setState({
            isLoading: false,
        })
    }

    onChangeCandidateNo(e) {
        let num = e.target.value;

        if (!num){
            this.setState(prevState => ({
                validateError: {...prevState.validateError, CandidateNo: true},
                error : {...prevState.error, CandidateNo : 'Cannot be empty'}
            })) 
        }
        if(num !== ''){
            if (!num.match(/^[0-9]*$/gm)){
                debugger;
                this.setState(prevState => ({
                    validateError: {...prevState.validateError, CandidateNo: true},
                    error : {...prevState.error, CandidateNo : 'eg.: 23'}
                }))
            }
            else{
                debugger;
                this.setState(prevState => ({
                    validateError: {...prevState.validateError, CandidateNo: false},
                    error : {...prevState.error, CandidateNo : ''}
                }))
            }
        }

        this.setState({
            CandidateNo: e.target.value
        });
    }

    onChangeCandidateName(e) {
        let name = e.target.value;

        if (!name){
            this.setState(prevState => ({
                validateError: {...prevState.validateError, CandidateName: true},
                error : {...prevState.error, CandidateName : 'Cannot be empty'}
            })) 
        }
        if(name !== ''){
            if (!name.match(/^[a-zA-Z_ ]+$/)){
                debugger;
                this.setState(prevState => ({
                    validateError: {...prevState.validateError, CandidateName: true},
                    error : {...prevState.error, CandidateName : 'Numbers and special characters not accepted'}
                }))
            }
            else{
                debugger;
                this.setState(prevState => ({
                    validateError: {...prevState.validateError, CandidateName: false},
                    error : {...prevState.error, CandidateName : ''}
                }))
            }
        }
        
        this.setState({
            CandidateName: e.target.value
        });
    }

    onChangePartyID(e) {
        let party = e.target.value;

        if(!party){
            this.setState(prevState => ({
                validateError: {...prevState.validateError,  Party: true},
                error: {...prevState.error,  Party: 'Select a party'}
            }))
        }
        else{
            this.setState(prevState => ({
                validateError: {...prevState.validateError,  Party: false},
                error: {...prevState.error,  Party: ''}
            }))
        }
        debugger;
        this.setState({
            PartyID: e.target.value
        });
    }

    onChangeDistrictID(e) {
        let district = e.target.value;

        if(!district){
            this.setState(prevState => ({
                validateError: {...prevState.validateError,  District: true},
                error: {...prevState.error,  District: 'Select a district'}
            }))
        }
        else{
            this.setState(prevState => ({
                validateError: {...prevState.validateError,  District: false},
                error: {...prevState.error,  District: ''}
            }))
        }
        debugger;
        axios.get('https://localhost:5001/api/party/district/' + district)
          .then(response => {

            let PartyfromApi = response.data.map(partyOption =>{
                debugger;
                return { value: partyOption.partyID, display: partyOption.partyName}
            });
            this.setState({
                districtID: district,
                partyOptions: [{ value: '', display:'Select Party'}].concat(PartyfromApi)
            });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onChangeImage(e) {
        e.preventDefault();

        if(e.target.files && e.target.files[0]){
            let imageFile = e.target.files[0];
            let reader = new FileReader();
debugger;
            reader.onloadend =()=> {debugger;
                this.setState(prevState => ({
                    imageFile: imageFile,
                    imageSrc: reader.result,
                    validateError: {...prevState.validateError, Image: false},
                    error : {...prevState.error, Image : ''}
                }));debugger;
            };
            reader.readAsDataURL(imageFile);
        }

        else{
            this.setState(prevState => ({
                imageFile:null,
                imageSrc: defaultCandidateImg,
                validateError: {...prevState.validateError, Image: true},
                error : {...prevState.error, Image : 'Add an image'}
            }));
        }

    }

    addCandidate =async (e)=>{
        debugger;
        const formData = new FormData()
        formData.append('candidateNo',this.state.CandidateNo)
        formData.append('candidateName',this.state.CandidateName)
        formData.append('image',this.state.image)
        formData.append('imageFile',this.state.imageFile)
        formData.append('party_ID',this.state.PartyID)
        formData.append('district_ID',this.state.districtID)
        
        debugger;
        await axios.post('https://localhost:5001/api/Candidate/', formData)
        .then(json => {
            debugger;
            console.log(json.data);
            this.setState({
                setMessage: true,
                message: 'Candidate Save Successfully',
            });
        })
        .catch(function (error) {
            console.log(error);
            alert("Data not saved");
        });
        debugger;
    }
    formReset(){
        this.setState({
            CandidateNo:'',
            CandidateName:'',
            PartyID:'',
            districtID: '',
            image: '',
            imageSrc: defaultCandidateImg,
            imageFile: null,
            validateError: {CandidateNo: true, CandidateName: true, Party: true, District: true, Image: true},
            error: {CandidateNo: '', CandidateName: '', Party: '', District: '', Image: ''},
        

        })
    }

    render() {
        return (
            this.state.isLoading? <BoxLoading/> :
            <div style={styles.background}>
            <Container maxWidth="md">
                <Paper style={styles.paper} elevation={3}>
                    <Snackbar open={this.state.setMessage} autoHideDuration={3000} onClose={this.closeMessage}>
                        <Alert severity="success">
                            {this.state.message}
                        </Alert>
                    </Snackbar>
                    <Typography variant='h4' align='center'>Enter Candidate Informations </Typography>
                    <form onSubmit={this.addCandidate} autoComplete="off" noValidate style={styles.root}>
                        <Grid container>
                            <Grid item xs={5}>
                            <FormControl variant="outlined" style={styles.formControl} required>
                                
                                <TextField
                                    select
                                    required
                                    label="District"
                                    value={this.state.districtID}
                                    onChange={this.onChangeDistrictID}
                                    variant="outlined"
                                    >
                                     {this.state.districtOptions.map((districtOption) => 
                                        <MenuItem key={districtOption.value} value={districtOption.value}>{districtOption.display}</MenuItem>
                                    )}
                                    </TextField>
                            </FormControl>
                                {this.state.validateError.District? 
                                <div>
                                    <h4 className= 'validate'>{this.state.error.District}</h4> 
                                </div>
                                : null}
                            <FormControl variant="outlined" style={styles.formControl} required>
                                
                                <TextField
                                    select
                                    required
                                    label="Party"
                                    value={this.state.PartyID}
                                    onChange={this.onChangePartyID}
                                    variant="outlined"
                                    >
                                    {this.state.partyOptions.map((partyOption) => 
                                        <MenuItem key={partyOption.value} value={partyOption.value}>{partyOption.display}</MenuItem>
                                    )}
                                    </TextField>
                            </FormControl>
                                {this.state.validateError.Party? 
                                <div>
                                    <h4 className= 'validate'>{this.state.error.Party}</h4> 
                                </div>
                                : null}
                                <TextField
                                    name = "candidateNo"
                                    variant = "outlined"
                                    required
                                    label = "CandidateNo"
                                    value = {this.state.CandidateNo}
                                    onChange = {this.onChangeCandidateNo}
                                    style= {styles.textField}
                                />
                                {this.state.validateError.CandidateNo? 
                                <div>
                                    <h4 className= 'validate'>{this.state.error.CandidateNo}</h4> 
                                </div>
                                : null}
                                <TextField
                                    name = "candidateName"
                                    variant = "outlined"
                                    required
                                    label = "CandidateName"
                                    value = {this.state.CandidateName}
                                    onChange = {this.onChangeCandidateName}
                                    style= {styles.textField}
                                />
                                {this.state.validateError.CandidateName? 
                                <div>
                                    <h4 className= 'validate'>{this.state.error.CandidateName}</h4> 
                                </div>
                                : null}
                                
                                <div>
                                    <Button
                                        variant = "contained"
                                        color = "primary"
                                        type = "submit"
                                        style= {styles.sMargin}
                                        disabled= {this.state.validateError.CandidateNo
                                            || this.state.validateError.CandidateName
                                            || this.state.validateError.Party
                                            || this.state.validateError.Image}
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        variant = "contained"
                                        onClick = {this.formReset}
                                        style= {styles.sMargin}
                                    >
                                        Reset
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item xs={7}>

                            <Card style={styles.root} >
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Choose The Candidate Image
                                    </Typography>
                                    <CardActionArea style={{display: "flex"}}>
                             
                                        {this.state.imageSrc ? (
                                            <img alt={this.state.imageSrc} src={this.state.imageSrc} />
                                            ) : null}
                                        <CardContent>
                                        <input  type="file" accept="image/*"  onChange = {this.onChangeImage} />
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                {this.state.validateError.Image? 
                                <div>
                                    <h4 className= 'validate'>{this.state.error.Image}</h4> 
                                </div>
                                : null}
                            </Grid>
                        </Grid>
                </form>
            </Paper>
        </Container>
        </div>
        )
    }
}
