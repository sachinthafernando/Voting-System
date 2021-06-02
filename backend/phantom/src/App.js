
import{useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch,NavLink, Link, Redirect } from 'react-router-dom';
//import './App.css';
//import Candidate from './pages/candidate/Candidate';
//import Party from './pages/party/Party';
import Home from './pages/home/Home';
//import HomeRank2 from './pages/rank2/HomeRank2';

import AdminList from './pages/rank1/admin/AdminList';

import AddCandidate from './pages/rank2/candidate/AddCandidate';

import AddPerson from './pages/rank3/person/AddPerson';

import AddParty from './pages/rank2/party/AddParty';

import React, {useState} from 'react';
// import Dropdown from './components/Dropdown';
import GlobalStyle from './components/GlobalStyles';

import { CssBaseline } from '@material-ui/core';
import Rank1Home from './pages/home/Rank1Home';
import Rank2Home from './pages/home/Rank2Home';
import Rank3Home from './pages/home/Rank3Home';
import Rank4Home from './pages/home/Rank4Home';

import DatabaseView from './pages/rank2/DatabaseView';
import DataEntryMenu from './pages/rank2/DataEntryMenu';

import AboutUs from './components/AboutUs';

import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";


// import { PublicRoute, PrivateRoute } from "react-private-public-route";
import  PrivateRoute  from "./components/PrivateRoutes/PrivateRoute";
import Authtoken from './utilities/Authtoken';
import { loadUser } from './Actions/auth';
import { LOGOUT } from './Actions/types';
import DynamicLayout from './components/layout/DynamicLayout';
import ScrollTop from './components/layout/ScrollTop';

import Scanner from './pages/rank4/barCode/Scanner';
import VoteCandidate from './pages/rank4/voting/voteCandidate/VoteCandidate';
import VoteParty from './pages/rank4/voting/voteParty/VoteParty';
import AddDistricts from './pages/rank1/setting/AddDistricts';
import Settings from './pages/rank1/setting/Settings';
import barChart from './pages/rank1/result/barChart';
import FreezeScreen from './pages/rank4/barCode/FreezeScreen';


if (localStorage.token){
  Authtoken(localStorage.token);
}

const App = () => {
      useEffect(() => {
        store.dispatch(loadUser());
    
      


//make the admin completely loggedout
window.addEventListener("storage", () => {
  if (!localStorage.token) store.dispatch({ type: LOGOUT });
});
},
 []);


 //define toggle function
 const [isOpen ,setIsOpen] = useState(false);
  const toggle =() =>{
    setIsOpen(!isOpen);
  };

return (
  <Provider store={store}>
  <Router >
    <>
    <div >
    <GlobalStyle />
    {/* <Navbar toggle = {toggle} /> */}
      <Alert />
        <Switch>
          
          {/* <Route exact path = "/home" component={Home} /> */}
          {/* <Route exact path = "/" component={Home} /> */}
          <Route path="/login" component={Login} />
          {/* make private below */}
          <Route path = "/rank1Home" component={Rank1Home} />
          <PrivateRoute path = "/rank2Home" component={Rank2Home} />
          <PrivateRoute path = "/rank3Home" component={Rank3Home} />
          <PrivateRoute path = "/rank4Home" component={Rank4Home} />
          {/* <Route path = "/aboutUs" component={AboutUs} /> */}
          
          <DynamicLayout
              exact  
              path="/aboutUs" 
              component={AboutUs} 
              layout="MAIN_NAV" 
          />
            <DynamicLayout 
              exact 
              path="/" 
              component={Home} 
              layout="MAIN_NAV"//no need of this line bcz default case
          />
            <DynamicLayout 
              exact 
              path="/home" 
              component={Home} 
          />
            <DynamicLayout 
              exact 
              path="/adminList" 
              component={AdminList}
              layout="SUB_NAV" 
          />


          <Route path = "/adminList" component={AdminList} />
          <Route path = "/addCandidate" component={AddCandidate} />
          <Route path = "/adminList" component={AdminList} />
          


          <Route path= "/scanner" component={Scanner}/>
          <Route path= "/addDistricts" component={AddDistricts}/>
          <Route path= "/setting" component={Settings}/>
          <Route path= "/barChart" component={barChart}/>


          <Route path= "/voteParty" component={VoteParty}/>
          <Route path= "/voteCandidate" component={VoteCandidate}/>
          <Route path= "/freezeScreen" component={FreezeScreen}/>



          <Route path= "/dataEntry" component={DataEntryMenu}/>
          <Route path = "/databaseView" component={DatabaseView} />
          <Route path= "/addPerson" component={AddPerson}/>
          <Route path= "/addParty" component={AddParty}/>
          {/* below 404 should be at the bottom of rote paths */}
          <Route exact path="*" render={() => {window.location.href="404.html"}} />
        </Switch>    
    
    <CssBaseline />
    </div>
    <div>
    {/* <Footer/> */}
    </div>
    <ScrollTop/>
    </> 
    </Router>
    </Provider>
  );
};
export default App;





{/* <Route path = "/editPerson/:id" component={EditPerson} /> */}
{/* <Route path = "/candidateList" component={CandidateList} />
          <Route path = "/editCandidate/:id" component={EditCandidate} /> */}