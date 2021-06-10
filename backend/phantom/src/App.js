import{useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import AdminList from './pages/rank1/admin/AdminList';
import AddCandidate from './pages/rank2/candidate/AddCandidate';
import AddPerson from './pages/rank3/person/AddPerson';
import AddParty from './pages/rank2/party/AddParty';
import React, {useState} from 'react';
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
import OperaterLogIn from './pages/rank2/OperaterLogIn';
import OperatorView from './pages/rank2/OperatorEntryMenu';
import ContactUs from './components/ContactUs.js';

import jwt_decode from "jwt-decode"


import { WaveLoading   } from 'react-loadingg';

if (localStorage.token){
  Authtoken(localStorage.token);
}



const App = () => {

  
  const [userRole,setUserRole] = useState( localStorage.token ? jwt_decode(localStorage.token).role : 'Guest');
  const [userName, setUserName] = useState( localStorage.token ? jwt_decode(localStorage.token).sub : 'Guest');
  const [loading, setloading] = useState(true);

  useEffect(() => {

    setloading(false);
    store.dispatch(loadUser());
      
    //make the admin completely loggedout
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });

  },[]);



  const RoleBasedRoute = (router) => {
    debugger;
    setUserRole(localStorage.token ? jwt_decode(localStorage.token).role : 'Guest');
    setUserName(localStorage.token ? jwt_decode(localStorage.token).sub : 'Guest');
    // debugger;
    if (userRole === 'Guest') {
      debugger;
      return(
        <>
          <Route  component={Login} />
        </>
      )
    } else {
      // debugger;
      switch (router.dynamicLayout) {
        case true:
          if (userRole === router.role) {
            if (userRole === "Rank2Admin" && userName === router.name) {
              return (
                <>
                  <DynamicLayout exact path= {router.path} component={router.hiddenComponent} layout="SUB_NAV" />
                </>
              );
            } else {
              return (
                <>
                  <DynamicLayout exact path= {router.path} component={router.component} layout="SUB_NAV" />
                </>
              );
            }
          } else {
            return (
              <>
                <DynamicLayout exact path="/home" component={Home} /> 
              </>
            );
          }
        case false:
          return (
            <>
              {userRole === router.role  ?
                
              <Route exact path= {router.path} component={router.component} />
      
              : <DynamicLayout exact path="/home" component={Home} />
              }
            </>
          );
      
        default:
          return (
            <>
              <Route exact path="*" render={() => {window.location.href="404.html"}} />
            </>
          );
      }
    }
  }

  return (
    loading? 
    <div 
      style={{
        backgroundColor: "#232354", 
        position: "fixed", 
        minWidth: "100%", 
        minHeight: "100%", 
        display: "flex", 
        top: "0", 
        left: "0"
      }}
    >
      <WaveLoading  />
    </div> :

    <Provider store={store}>
      <Router >
      <>
      <div >
      <GlobalStyle />
        <Alert />
          <Switch>
            
            <Route path="/login" component={Login} />

            {/* make private below */}
            <PrivateRoute path = "/rank1Home" component={Rank1Home} />
            <PrivateRoute path = "/rank2Home" component={Rank2Home} />
            <PrivateRoute path = "/rank3Home" component={Rank3Home} />
            <PrivateRoute path = "/rank4Home" component={Rank4Home} />
            
            <DynamicLayout exact  path="/aboutUs" component={AboutUs} layout="MAIN_NAV" />
            <DynamicLayout exact path="/" component={Home} layout="MAIN_NAV" />
            <DynamicLayout exact path="/home" component={Home} />
            <DynamicLayout exact path= "/contactUs" component={ContactUs} layout="MAIN_NAV"/>


            {/* rank 1 routes */}
            
            <RoleBasedRoute path= "/setting" component={Settings} role={"Rank1Admin"} dynamicLayout= {true}/>
            <RoleBasedRoute path = "/adminList" component={AdminList} role={"Rank1Admin"} dynamicLayout= {true}/>
            <RoleBasedRoute path= "/barChart" component={barChart} role={"Rank1Admin"} dynamicLayout= {false}/>
            <RoleBasedRoute path= "/addDistricts" component={AddDistricts} role={"Rank1Admin"} dynamicLayout= {true}/>

            {/* rank 2 routes */}

            <RoleBasedRoute path= "/dataEntry" component={DataEntryMenu} role={"Rank2Admin"} dynamicLayout= {true} name={"Other"}/>
            <RoleBasedRoute path = "/databaseView" component={DatabaseView} role={"Rank2Admin"} dynamicLayout= {true} name={"Other"}/>
            <RoleBasedRoute path = "/addCandidate" component={AddCandidate} role={"Rank2Admin"} dynamicLayout= {true} name={"Other"} />
            <RoleBasedRoute path= "/addParty" component={AddParty} role={"Rank2Admin"} dynamicLayout= {true} name={"Other"}/>

            <PrivateRoute path= "/operator" component={OperaterLogIn} />
            <RoleBasedRoute path= "/operatorView" component={DataEntryMenu} hiddenComponent={OperatorView} role={"Rank2Admin"} dynamicLayout= {true} name={"Operator"}/>

            <RoleBasedRoute path= "/settings" component={DataEntryMenu} hiddenComponent={Settings} role={"Rank2Admin"} dynamicLayout= {true} name={"Operator"}/>
            <RoleBasedRoute path = "/adminLists" component={DataEntryMenu} hiddenComponent={AdminList} role={"Rank2Admin"}  dynamicLayout= {true} name={"Operator"}/>
            
            {/* rank 3 routes */}

            <RoleBasedRoute path= "/addPerson" component={AddPerson} role={"Rank3Admin"} dynamicLayout= {true}/>

            {/* rank 4 routes */}

            <RoleBasedRoute path= "/scanner" component={Scanner} role={"Rank4Admin"} dynamicLayout= {true}/>
            <RoleBasedRoute path= "/voteParty" component={VoteParty} role={"Rank4Admin"} dynamicLayout= {false}/>
            <RoleBasedRoute path= "/voteCandidate" component={VoteCandidate} role={"Rank4Admin"} dynamicLayout= {false}/>
            <RoleBasedRoute path= "/freezeScreen" component={FreezeScreen} role={"Rank4Admin"} dynamicLayout= {false}/>


            {/* below 404 should be at the bottom of rote paths */}
            <Route exact path="*" render={() => {window.location.href="404.html"}} />
          </Switch>    
      
      <CssBaseline />
      </div>
      <div>
      </div>
      <ScrollTop/>
      </> 
      </Router>
      </Provider>
  );
};
export default App;

