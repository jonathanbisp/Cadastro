import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import Logo from '../components/Templates/Logo';
import Nav from '../components/Templates/Nav';
import Footer from '../components/Templates/Footer';

import Routes from './Routes';

export default props =>
  <BrowserRouter>    
    <div className="app">
      <Logo />
      <Nav />
      <Routes/>
      <Footer />
    </div>
  </BrowserRouter>