import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Candidate from './pages/candidate/Candidate';
import Party from './pages/party/Party';
import Home from './pages/home/Home';
import HomeRank2 from './pages/rank2/HomeRank2';
import AdminList from './pages/admin/AdminList';
import AddAdmin from './pages/admin/AddAdmin';
import AdminTable from './pages/admin/AdminTable';
import EditAdmin from './pages/admin/EditAdmin';

import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './components/GlobalStyles';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './components/Theme';
import HomePolling from './pages/homePolling/HomePolling';

function App() {

  const [isOpen ,setIsOpen] = useState(false);

  const toggle =() =>{
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div>
    <GlobalStyle />
    <Navbar  toggle = {toggle}/>
    <Dropdown isOpen = {isOpen} toggle={toggle} />

      <Router>
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route path = "/adminList" component={AdminList} />
          <Route path = "/editAdmin/:id" component={EditAdmin} />

          <Route path = "/homeRank2" component={HomeRank2} />
          <Route path = "/homePolling" component={HomePolling} />
          <Route path = "/adminList" component={AdminList} />
        </Switch>
      </Router>
    
      <ThemeProvider theme={theme}>
    <CssBaseline />
    <Footer/>
    </ThemeProvider>
    </div>
    </> 
  );
}

export default App;
