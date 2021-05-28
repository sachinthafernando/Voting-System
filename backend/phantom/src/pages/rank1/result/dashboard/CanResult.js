// import React, { Component } from 'react'

// export default class CanResult extends Component {

//     constructor(props){
//         debugger;
//         super(props);

//         // this.example = this.example.bind(this);

//         // this.state = {
//         //     example: {},
//         // };
//     }

//     exampleClass(){ // this a demo
//         const candidateData = this.props.objct.districtCanData;  // this.props.objct.(example) will give you anything from barChart.js page
//     }

//     render() {
//         return (
//             <div>
//                 <h1>This is reserverd for candidate result</h1>
//                 <h4>danata methanama hdnna. psse wena thnakata dagamu</h4>
//             </div>
//         )
//     }
// }


import React, { Component } from 'react'
import {InputLabel, Container, MenuItem,Select,FormControl,Table, TableBody,TableCell, TableContainer, TableRow, TableHead,Paper} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ProgressBar from './ProgressBar';
import axios from 'axios';
import { Prev } from 'react-bootstrap/esm/PageItem';
import { StayCurrentLandscape } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';

const styles = {

    table: {
        minWidth: 650,       
      },

    root: {
      display: 'flex',
    },

    media: {
      paddingLeft: 20,
      padding: 10,
    },

     rowProperty: {
      height: 10,
      },

    colProperty1: {
      minWidth : 10
    },

    colProperty2: {
      minWidth : 50
    },  
    formControl: {
        margin: "10px auto",
        minWidth: 230,
    },  
    cross: {
        Fontsize: "20px",
    }  
};

export default class CanResult extends Component {

    constructor(props){
  //     debugger;
        super(props);

        this.onChangeDistrict = this.onChangeDistrict.bind(this);
        this.CanChart = this.CanChart.bind(this);
       
        this.state = {
            disctOptions: [{ value: '', display:'Select District'}],
            District: "",
            Candidates : [],
            PartyData: [],

        };
    }

    componentDidMount(){

        axios.get('https://localhost:5001/api/District/')
        .then(response => {
          //  debugger;
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
        debugger;
    }

    onChangeDistrict(e) {
        debugger;
        this.setState({
            District: e.target.value
        });

        const DisID = parseInt(e.target.value);
        const DisName = e.target.name;

        const Candidates =  this.props.objct.districtCanData
        .filter(item => item.districtID === DisID)
        .map(canItem => canItem.Candidate)
        .reduce((Prev, current) => Prev.concat(current),[]);

       this.CanChart(DisID,Candidates );
    }

    

    CanChart(DisID,Candidates){   
         var totData;
        debugger;
         if(DisID == ''){
          //  totData = this.state.candidateData;
            <p>select the District you are looking forward Results</p>
         }

         else {
             if(Candidates.length == 0){
                 totData =[];
             }
             else {
                 totData = Candidates; 
            }
         }

       const canList = [];

       if(totData.length !=0){
           debugger;
           let canVotecount = [];
           let canID = [];
           let CanNo =[];
           totData.forEach(element => {
               canVotecount.push(element.candidateCount);
               canID.push(element.candidateID);
               CanNo.push(element.candidateNo);        
           });

           debugger;
           var canPercent =[];
        
           const totvote = this.props.objct.districtCanData
                           .map(item => item.districtCount)
                           .reduce((Prev, current) => Prev.concat(current),[])
            debugger;
           for (let i=0; i< canVotecount.length; i++){
               var numerator = canVotecount[i];

               if(numerator == undefined){
                   canPercent.push(0);
               }
               else{
                   var cal = (((parseInt(numerator))/ (parseInt(totvote)))*100).toFixed(2);
                   canPercent.push(cal);
               }
               debugger;
           }

           var canPercentID = canID.map((id,index)=> {
               return{
                   ID : id,
                   percnt : canPercent[index]
               }
           });
            debugger;
           const canRec = totData.sort(sortFunction);

           function sortFunction(a,b){
               if (a.candidateCount === b.candidateCount){
                   return 0;
               }
               else{
                   return (a.candidateCount > b.candidateCount) ? -1 : 1;
               }
           }
           const percentage = canPercentID;

           const ptyData = this.props.objct.partyData;

           let ptyColor =[];
           let ptyID = [];
           let ptyName =[];

           ptyData.forEach(item =>{
               ptyColor.push(item.color);
               ptyID.push(item.partyID);
               ptyName.push(item.partyName);
           })

           var partyColorID  = canID.map((id,index) =>{
               return{
                  pID : ptyID[index],
                  colr: ptyColor[index], 
                  pName: ptyName[index], 
               }
           });

           for(let i=0; i< canRec.length; i++){
            canList.push({
                ...canRec[i],
                ...(partyColorID.find(item => item.pID === canRec[i].party_ID)),
                ...(percentage.find(item => item.ID === canRec[i].candidateID)),
               
            });
        }

       }
       debugger;
            
       this.setState({
        Candidates : canList,
    });
        


    }

    render() {
        return (
            <main>
            <div className="main__container">       
              <div className="main__title">
                <div className="main__greeting">
                  <h1>Candidates Results View</h1>
                  <FormControl variant="outlined" style={styles.formControl}>
                                <InputLabel >Select District</InputLabel>
                                <Select
                                    value = {this.state.District}
                                    onChange= {this.onChangeDistrict}
                                >
                                    {this.state.disctOptions.map((disctOption) => 
                                        <MenuItem key={disctOption.value} value={disctOption.value}>{disctOption.display}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                </div>
              </div>
      

             
      
              {/* <!-- CHARTS STARTS HERE --> */}
              <div className="charts">
                <div className="charts__left">
                  <div className="charts__left__title">
                    <div>
                      <h1>All Island Parties Result</h1>
                    </div>
                    <i className="fa fa-usd" aria-hidden="true"></i>
                  </div>
                  <hr className="new1"/>
                  {/* <BarChart /> */}
                </div>
              {/* Right handside chart */}
                <div className="charts__right">
                    <div className="charts__right__title">
                        <div>
                        <h1>All Island Result - Parties</h1>
                        </div>
                        <i className="fa fa-usd" aria-hidden="true"></i>
                    </div>
                    <hr className="new1"/>
                    <div className="charts__right__cards">    
                    <div>
                  {/* <div className="rowScroll"> */}
                        <TableContainer component={Paper}>
                            <Table style={styles.table} aria-label="simple table">
                                <TableBody>
                                    {this.state.Candidates.map((row) => (
                                        <TableRow key={row.candidateID}  style={styles.rowProperty} hover>
                                            <TableCell component="th" scope="row" style={{width : "15%"}}>

                                                <div className="v1" height="25px"><strong>{row.pName}</strong></div>
                                                <div className ="v1" height="50px"><h2> <strong> {row.candidateNo}&#10006;</strong></h2></div>
                                                
                                            </TableCell>
                                            <TableCell component="th" scope="row" style={{width : "5%"}}>                         
                                                <div style={styles.media}>
                                                    <Avatar alt={row.image} src={row.imageSrc} />
                                                </div>                           
                                            </TableCell>
                                            <TableCell align="left">
                                                <span className="charts__right__title"><strong>{row.candidateName}</strong></span>
                                                <div>
                                                    <ProgressBar key={row.candidateID} bgcolor={row.colr} completed={row.percnt} /> 
                                                </div>
                                                <span className="charts__right__title">{row.candidateCount}</span>
                                            </TableCell>
                                            <TableCell align="right" style={{width : "5%"}}>
                                                <span className="charts__right__title"><strong>{row.percnt}%</strong></span>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {/* </div> */}
                    </div>
                  </div>
      
                </div>
              </div>
            </div>
          </main>
        )
    }
}
