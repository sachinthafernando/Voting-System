import React, { Component } from 'react'
import '../Result.css';
import { MenuItem,FormControl,Table, TableBody,TableCell, TableContainer, TableRow,Paper, TextField, Box} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ProgressBar from './ProgressBar';
import ProgressBarMin from './ProgressBarMin';
import axios from 'axios';
//import barChart from '../result/barChart';
import { Jumbotron } from 'react-bootstrap';
import "react-sweet-progress/lib/style.css";


const styles = {

    table: {
        minWidth: 650,
        background:"#500707"       
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
      margin :"0px"
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
        margin: "0px",
    },  
    cross: {
        Fontsize: "20px",
    },

  

};

export default class CanResult extends Component {

    constructor(props){
  //     debugger;
        super(props);

        this.onChangeDistrict = this.onChangeDistrict.bind(this);
        this.onChangeDistrictInitial = this.onChangeDistrictInitial.bind(this);
        this.CanChart = this.CanChart.bind(this);
        this.loadData = this.loadData.bind(this);
       
        this.state = {
            disctOptions: [{ value: '', display:'Select District'}],
            District: "",
            Candidates : [],
            PartyData: [],
            partyWiseCan :[],
            // partyAmount :"",

            districtCanCount: [],
            divisionCanCount: [],
            candidateCount: [],

            districtPartyCount: [],
            divisionPartyCount: [],
            partyCount: [],

            candidateData: [],
            districtCanData: [],
            divisionCanData: [],

            label: 'Candidate Result',
            clickMe: true,

            CanData: [],
            ptyData: [],
        };
    }

    componentDidMount(){

        axios.get('https://localhost:5001/api/District/')
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

        this.intervalID = setInterval(this.loadData,5000);
        
       debugger;
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    loadData(){
        this.setState({
            CanData: this.props.objct.districtCanData,
            ptyData: this.props.objct.partyData,
        })
    }

    onChangeDistrict(e, dist) {
     debugger;
        this.setState({
            District: e.target.value,
            label: dist.props.district
        });

        const DisID = parseInt(e.target.value);
        const DisName = e.target.name;

         const Candidates =  this.state.CanData
        .filter(item => item.districtID === DisID)
        .map(canItem => canItem.Candidate)
        .reduce((Prev, current) => Prev.concat(current),[]);
        debugger;
       this.CanChart(DisID,Candidates);
    }

    onChangeDistrictInitial(e, dist) {
      debugger;
         this.setState({
             District: e.target.value,
             label: dist.props.district,
             clickMe: false,
         });
 
         const DisID = parseInt(e.target.value);
         const DisName = e.target.name;
 
          const Candidates =  this.state.CanData
         .filter(item => item.districtID === DisID)
         .map(canItem => canItem.Candidate)
         .reduce((Prev, current) => Prev.concat(current),[]);
 
        this.CanChart(DisID,Candidates);
     }

    

    CanChart(DisID,Candidates){   
         var totData;
       debugger;
         if(DisID == ''){
          //  totData = this.state.candidateData;
            <p>select the District you are looking forward Results</p>
         }

         else {
             if(Candidates.length === 0){
                 totData =[];
             }
             else {
                 totData = Candidates; 
            }
         }

       const canList = [];

       if(totData.length !==0){
           debugger;
           let canVotecount = [];
           let canID = [];
           let CanNo =[];
           totData.forEach(element => {
               canVotecount.push(element.candidateCount);
               canID.push(element.candidateID);
               CanNo.push(element.candidateNo);        
           });

       //    debugger;
           var canPercent =[];
        
          const totvote = this.state.CanData
                           .map(item => item.districtCount)
                           .reduce((Prev, current) => Prev.concat(current),[])
         //   debugger;
           for (let i=0; i< canVotecount.length; i++){
               var numerator = canVotecount[i];

               if(numerator == undefined){
                   canPercent.push(0);
               }
               else{
                   var cal = (((parseInt(numerator))/ (parseInt(totvote)))*100).toFixed(2);
                   canPercent.push(cal);
               }
          //     debugger;
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
               debugger;
               if (a.candidateCount === b.candidateCount){
                   return 0;
               }
               else{
                   return (a.candidateCount > b.candidateCount) ? -1 : 1;
               }
           }
           const percentage = canPercentID;

          const ptyData = this.state.ptyData;
         // const ptyData = this.state.PartyData;

           let ptyColor =[];
           let ptyID = [];
           let ptyName =[];
           
        //debugger;
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
            debugger;
        // var ptyAmount = this.state.PartyData.length;
       var ptyWiseCan = [];

            for(let j=0; j< ptyData.length; j++){
                debugger;
            ptyWiseCan.push({
                 ...ptyData[j],
                can: canList.find(item => item.party_ID === partyColorID[j].pID),
                
                 });
               }

       debugger;
            
       this.setState({
        Candidates : canList,
        partyWiseCan : ptyWiseCan,
       
         });

      }
      else{
        this.setState({
          Candidates : [],
          partyWiseCan : [],
         
          });
      }
    }

    render() {
        return (
            this.state.clickMe? 

            <div id="CanResultView">
                <div className="can__container ">
                    <Jumbotron>
                        <div className="jumbotron_back">
                            <div className="can__title">
                                <div className="can__greeting">
                                    <h1>Candidate Result View</h1>
                                    <p>Select the District You Are Looking Forward Candidate Result</p>
                                </div>
                            </div>
                            {/* <div className='btton'> */}
                            <Box className= "btton">
                            <FormControl variant="outlined" style={styles.formControl}>

                                <TextField
                                  select
                                  variant="filled"
                                  label="Select District"
                                  value={this.state.District}
                                  onChange= {this.onChangeDistrictInitial}
                                  color="primary"
                                >
                                  {this.state.disctOptions.map((disctOption) => 
                                        <MenuItem key={disctOption.value} value={disctOption.value} district={disctOption.display}>{disctOption.display}</MenuItem>
                                    )}
                                </TextField>
                            </FormControl>
                            </Box>
                            </div>
                        {/* </div> */}
                    </Jumbotron>
                </div>   
            </div> 
            
            :<main>

            <div className="main__container">       
              <div className="main__title">
                <div className="main__greeting">
                  <h1>Candidate Result View</h1>
                 
                  <FormControl variant="outlined" style={styles.formControl}>
                  <TextField
                                  select
                                  variant="outlined"
                                  label="Select District"
                                  value={this.state.District}
                                  onChange= {this.onChangeDistrict}
                                >
                                  {this.state.disctOptions.map((disctOption) => 
                                        <MenuItem key={disctOption.value} value={disctOption.value} district={disctOption.display}>{disctOption.display}</MenuItem>
                                    )}
                                </TextField>
                            </FormControl>
                </div>
              </div>
      

             
      
              {/* <!-- CHARTS STARTS HERE --> */}
              <div className="charts">

                <div className="charts__right">
                  <div className="charts__right__title">
                    <div>
                      <h1>{this.state.label} District Candidate Result</h1>
                    </div>
                  </div>
                  <hr className="new1"/>
                  <div className="charts__right__cards">
                  <div>
                  <div className="Canscroll">
                     <TableContainer component={Paper} >
                    <Table style={styles.table} aria-label="simple table" >
                        <TableBody>
                            {this.state.Candidates.map((row) => (
                                <TableRow key={row.candidateID}  style={styles.rowProperty} hover>
                                    <TableCell component="th" scope="row" style={{width : "15%"}}>

                                        <div className="v1" height="25px" ><strong>{row.pName}</strong></div>
                                        <div className ="v1" height="50px" ><h2> <strong> {row.candidateNo}&#10006;</strong></h2></div>
                                        
                                    </TableCell>
                                    <TableCell component="th" scope="row" style={{width : "5%"}}>                         
                                        <div style={styles.media}>
                                            <Avatar alt={row.image} src={row.imageSrc} />
                                        </div>                           
                                    </TableCell>
                                    <TableCell align="left">
                                        <span className="charts__right__title_percent"><strong>{row.candidateName}</strong></span>
                                        <div>
                                            <ProgressBar key={row.candidateID} bgcolor={row.colr} completed={row.percnt} style={styles.progressStyles}/> 
                                        </div>
                                        <span className="charts__right__title_count">{row.candidateCount}</span>
                                    </TableCell>
                                    <TableCell align="right" style={{width : "5%"}}>
                                        <span className="charts__right__title_percent"><strong>{row.percnt}%</strong></span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
               </div>
                    </div>
                  </div>
      
                </div>
              </div>

                 {/* cadidate_party_table */}
                <div className="cadidate_party_table" id="ptyWiseCan">
                  <div className="cadidate_party__title">
                    <div>
                      <h1>Party Wise Candidates Result </h1>
                    </div>
                    {/* <i className="fa fa-usd" aria-hidden="true"></i> */}
                  </div>
                  <hr className="new1"/>
                  <div className="block__cards">
                
                  {this.state.partyWiseCan.map((item) => (
           

                <TableCell hover>
                        <div className="add_candidate_container tableContainerCard" >
                            {/* <div className= "card_Candidate_title"> */}
                            <div className='card_Candidate_title'><h2>{item.partyName}</h2></div> 
                            {/* </div> */}
                            {/* <hr className="new1"/> */}
                            <div className="tableContainerCard" src={item.logoSrc} alt={item.logo}>
                               
                            </div>
                            
                       {/* <TableContainer >  */}
                        {/* <div className="CardRowScroll"> */}
                            {item.can.map((row) => (

                             

                                <div className= "dis_ele_result">
                                    <div className= "dis_ele_block" background-color={row.colr}>
                                        <div className= "ele_log">
                                             
                                        </div>
                                        <div className="ele_party">
                                        <Avatar src={row.imageSrc} height="20" width="2 0" alt={row.image} />
                                           <div className="canNameDiv"> {row.candidateName}</div>  
                                        </div>
                                        <div className="ele_value">
                                         {row.candidateCount}  </div>
                                        <div className= "DivPercent">    <strong> {row.percnt}% </strong> </div>
                                            
                                     
                                         <div className="progress">
                                    <ProgressBarMin key={row.candidateID} bgcolor={row.colr} completed={row.percnt} /> 
                                    </div>
                                    </div>
                                   
                                </div>
                                ))}
                                </div>
                                {/* </TableContainer> */}

                                {/* </div> */}
    
                        {/* </div> */}
                        </TableCell>
                  ))}
                
                    </div>
                  </div>
                  </div>
                       

            {/* </div> */}
          </main>
        )
    }
}
