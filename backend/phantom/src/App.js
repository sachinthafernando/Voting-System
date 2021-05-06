import { BrowserRouter as Router, Route, Switch,NavLink, Link, Redirect } from 'react-router-dom';
//import './App.css';
//import Candidate from './pages/candidate/Candidate';
//import Party from './pages/party/Party';
import Home from './pages/home/Home';
//import HomeRank2 from './pages/rank2/HomeRank2';

import AdminList from './pages/admin/AdminList';
import AddAdmin from './pages/admin/AddAdmin';
import AdminTable from './pages/admin/AdminTable';
import EditAdmin from './pages/admin/EditAdmin';

import AddCandidate from './pages/candidate/AddCandidate';
import CandidateList from './pages/rank2/candidateView/CandidateList';
import CandidateTable from './pages/rank2/candidateView/CandidateTable';
import EditCandidate from './pages/rank2/candidateView/EditCandidate';

import AddPerson from './pages/person/AddPerson';
import PersonTable from './pages/rank2/personView/PersonTable';
import EditPerson from './pages/rank2/personView/EditPerson';
import PersonList from './pages/rank2/personView/PersonList';

import AddParty from './pages/party/AddParty';
import PartyList from './pages/rank2/partyView/PartyList';
import PartyTable from './pages/rank2/partyView/PartyTable';
import EditParty from './pages/rank2/partyView/EditParty';

import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Hero from './components/Hero';

import { SliderData } from './data/SliderData';
import GlobalStyle from './components/globalStyles';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './components/Theme';
import HomePolling from './pages/homePolling/HomePolling';
import Navbar from './components/Navbar';
import Rank1Home from './pages/home/Rank1Home';
import Rank2Home from './pages/home/Rank2Home';
import Rank3Home from './pages/home/Rank3Home';
import Rank4Home from './pages/home/Rank4Home';

import DatabaseView from './pages/rank2/DatabaseView';
import DataEntryMenu from './pages/rank2/DataEntryMenu';

import AboutUs from './components/AboutUs';


import { Provider } from "react-redux";
import { Fragment } from "react";
import store from "./store";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import VoteCandidate from './pages/rank4/voteCandidate/VoteCandidate';
import VoteParty from './pages/rank4/voteParty/VoteParty';
import Scanner from './pages/barCode/Scanner';
import AddDistricts from './pages/rank1/setting/AddDistricts';
import PollingCenter from './pages/rank1/pollingCenter/PollingCenter';
import barChart from './pages/rank1/result/barChart';

import  PrivateRoute  from "./components/PrivateRoutes/PrivateRoutes";
// import NotFound from './components/auth/NotFound';
import Authtoken from './utilities/Authtoken';
import { loadUser } from './Actions/auth';
import{useEffect} from 'react';
import test from './pages/rank1/result/test';

if (localStorage.token){
  Authtoken(localStorage.token);
}


const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
    

  const [isOpen ,setIsOpen] = useState(false);
  const toggle =() =>{
    setIsOpen(!isOpen);
  };


return (
  <Provider store={store}>
  <Router>
    <>
    <div>
    <GlobalStyle />
    <Navbar toggle = {toggle} />
    <Dropdown  isOpen = {isOpen} toggle={toggle}/>
    {/* <ThemeProvider theme={theme}> */}
    
        <Switch>
          
          <Route exact path = "/" component={Home} />
          <Route exact path = "/home" component={Home} />
          {/* <Route render={() => <Error404/> }/> */}
          <Route exact path = "/aboutUs" component={AboutUs} />
          


          <Route path = "/adminList" component={AdminList} />
          {/* <Route path = "/editAdmin/:id" component={EditAdmin} /> */}
          {/* <Route path = "/homeRank2" component={HomeRank2} /> */}
      
          
          <Route path = "/addCandidate" component={AddCandidate} />
          {/* <Route path = "/candidateList" component={CandidateList} />
          <Route path = "/editCandidate/:id" component={EditCandidate} /> */}
          <Route path = "/rank1Home" component={Rank1Home} />
          <Route path = "/rank2Home" component={Rank2Home} />
          <Route path = "/rank3Home" component={Rank3Home} />
          <Route path = "/rank4Home" component={Rank4Home} />
          <Route path = "/adminList" component={AdminList} />
         
          <Route path= "/dataEntry" component={DataEntryMenu}/>

          <Route path = "/databaseView" component={DatabaseView} />
          <Route path = "/homePolling" component={HomePolling} />
          <Route path= "/addPerson" component={AddPerson}/>
          {/* <Route path = "/editPerson/:id" component={EditPerson} /> */}
          <Route path= "/addParty" component={AddParty}/>

          <Route path= "/voteParty" component={VoteParty}/>
          <Route path= "/voteCandidate" component={VoteCandidate}/>
          
          <Route path= "/addDistricts" component={AddDistricts}/>
          <Route path= "/polCenter" component={PollingCenter}/>
          <Route path= "/barChart" component={barChart}/>
          
          <Route path= "/test" component={test}/>

          <Route path= "/scanner" component={Scanner}/>
          <Route exact path="/login" component={Login} />

        </Switch>
       
    <Footer/>
    
    <CssBaseline />
    {/* </ThemeProvider> */}
    </div>
    </> 
    </Router>
    </Provider>
  );
}
export default App;
