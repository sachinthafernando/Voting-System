import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

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
import Content from './components/Content';

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

    {/* <Header/> */}
    <Content/>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Footer/>
    </ThemeProvider>
    </div>
    </> 
  );
}

export default App;
