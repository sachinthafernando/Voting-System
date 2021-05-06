import { Button, Container, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Paper, Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'

const styles = {
    root: {
          margin: "30px auto",
          minWidth: 230,
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
        margin: "30px auto",
    },
    paper : {
        margin: "30px auto",
        padding: 20,
    }
}


export default class EditPerson extends Component {

    //{user} = props

    constructor(props){
        super(props)

        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeSerialNo = this.onChangeSerialNo.bind(this);
        this.onChangeDistrict = this.onChangeDistrict.bind(this);
        this.onChangeDivision = this.onChangeDivision.bind(this);
        this.onChangeGND = this.onChangeGND.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            NIC:'',
            SerialNo:'',
            disctOptions: [],
            District: "",
            divOptions: [{ value: '', display:'Select Division'}],
            Division: "",
            gndOptions: [{ value: '', display:'Select GND'}],
            GND: "",
            
        }
    }

    

    componentDidMount() {
        axios.get('http://localhost:5000/api/District/')
        .then(response => {
            debugger;
            let DisctfromApi = response.data.map(disctOption =>{
                return { value: disctOption.id, display: disctOption.name}
            });
            this.setState({
                disctOptions: [{ value: '', display:'Select District'}].concat(DisctfromApi)
            });
        })
        .catch(function (error) {
            console.log(error);
        });
        axios.get('http://localhost:5000/api/Division/')
        .then(response => {
            debugger;
            let DivfromApi = response.data.map(divOption =>{
                return { value: divOption.id, display: divOption.name}
            });
            this.setState({
                divOptions: [{ value: '', display:'Select Division'}].concat(DivfromApi)
            });
        })
        .catch(function (error) {
            console.log(error);
        });
        axios.get('http://localhost:5000/api/GNDivision/')
        .then(response => {
            debugger;
            let GNDfromApi = response.data.map(gndOption =>{
                return { value: gndOption.id, display: gndOption.name}
            });
            this.setState({
                gndOptions: [{ value: '', display:'Select GND'}].concat(GNDfromApi)
            });
        })
        .catch(function (error) {
            console.log(error);
        });
        axios.get('http://localhost:5000/api/person/'+this.props.user)
        .then(response => {
            this.setState({
                NIC: response.data.nic,
                SerialNo: response.data.serialNo,
                GND: response.data.gnd,
            });
            debugger;
            const gndId = response.data.gnd;
            axios.get('http://localhost:5000/api/GNDivision/'+gndId)
            .then(resp => {debugger;
                this.setState({
                    
                    Division: resp.data.pD_ID,
                });
                debugger;
                const divId = response.data.pD_ID;
                axios.get('http://localhost:5000/api/Division/'+ divId)
                .then(res => {debugger;
                    this.setState({
                        
                        District: res.data.eD_ID,
                    });
                    debugger;
                })
                .catch(function (error) {
                    console.log(error);
                })
            })
            .catch(function (error) {
                console.log(error);
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    onChangeNIC(e) {
        this.setState({
            NIC: e.target.value
        });
    }
    onChangeSerialNo(e) {
        this.setState({
            SerialNo: e.target.value
        });
    }

    onChangeDistrict(e) {
        debugger;
        this.setState({
            District: e.target.value,
            Division: ''
        });
        debugger;
        axios.get('http://localhost:5000/api/Division/GetByDistrict/' + e.target.value)
        .then(response => {
            debugger;
            let DivfromApi = response.data.map(divOption =>{
                debugger;
                return { value: divOption.id, display: divOption.name}
            });
            this.setState({
                divOptions: [{ value: '', display:'Select Division'}].concat(DivfromApi)
            });
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    onChangeDivision(e) {
        debugger;
        this.setState({
            Division: e.target.value,
            GND: ''
        });

        axios.get('http://localhost:5000/api/GNDivision/GetByDivision/' + e.target.value)
        .then(response => {
            debugger;
            let GNDfromApi = response.data.map(gndOption =>{
                debugger;
                return { value: gndOption.id, display: gndOption.name}
            });
            this.setState({
                gndOptions: [{ value: '', display:'Select GND'}].concat(GNDfromApi)
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    onChangeGND(e) {
        debugger;
        this.setState({
            GND: e.target.value
        });
    }

    onSubmit(e) {
        debugger;
        e.preventDefault();
        const obj = {
            NIC: parseInt(this.state.NIC),
            SerialNo: parseInt(this.state.SerialNo),
            GND: parseInt(this.state.GND)
        };
        axios.put('http://localhost:5000/api/person/'+this.props.user, obj)
        .then(res => {console.log(res.config.data);});
        debugger;
        this.props.close();
        // this.props.history.push('/personList');
        // debugger;
    }

    render() {
        return (
            <Container maxWidth="lg">
                {/* <Paper style={styles.paper} elevation={3}> */}
                <form onSubmit={this.onSubmit} autoComplete="off" noValidate style={styles.root}>
                    <Grid container>
                            <TextField
                                name = "nic"
                                variant = "outlined"
                                label = "NIC"
                                value = {this.state.NIC}
                                onChange = {this.onChangeNIC}
                                style= {styles.textField}
                            />
                            <TextField
                                name = "serialNo"
                                variant = "outlined"
                                label = "Serial No"
                                value = {this.state.SerialNo}
                                onChange = {this.onChangeSerialNo}
                                style= {styles.textField}
                            />
                            <FormControl variant="outlined" style={styles.formControl}>
                                <InputLabel >District</InputLabel>
                                <Select
                                    //name= "gND"
                                    value = {this.state.District}
                                    onChange= {this.onChangeDistrict}
                                >
                                    {this.state.disctOptions.map((disctOption) => 
                                        <MenuItem key={disctOption.value} value={disctOption.value}>{disctOption.display}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" style={styles.formControl}>
                                <InputLabel >Division</InputLabel>
                                <Select
                                    //name= "gND"
                                    value = {this.state.Division}
                                    onChange= {this.onChangeDivision}
                                >
                                    {this.state.divOptions.map((divOption) => 
                                        <MenuItem key={divOption.value} value={divOption.value}>{divOption.display}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" style={styles.formControl}>
                                <InputLabel >GND</InputLabel>
                                <Select
                                    value = {this.state.GND}
                                    onChange= {this.onChangeGND}
                                >
                                    {this.state.gndOptions.map((gndOption) => 
                                        <MenuItem key={gndOption.value} value={gndOption.value}>{gndOption.display}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                    </Grid>
                    <div>
                        <Button
                            variant = "contained"
                            color = "primary"
                            type = "submit"
                            style= {styles.sMargin}
                        >
                        Submit
                        </Button>
                        <Button
                            variant = "contained"
                            style= {styles.sMargin}
                            onClick= {this.props.close}
                        >
                            Cancel
                        </Button>
                    </div>        
                
                
                {/* <input name="name" placeholder="Name" onChange={this.onChangeName} value={this.state.Name} /> <br />
                <input name="password" placeholder="Password" onChange={this.onChangePassword} value={this.state.Password} /> <br />
                <input name="rank" placeholder="Rank" onChange={this.onChangeRank} value={this.state.Rank} /> <br />
                <button type="submit">Submit</button> */}
            </form>
                {/* </Paper> */}
            </Container>
        )
    }
}
