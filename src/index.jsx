import React from 'react'
import ReactDOM from 'react-dom'
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './assets/css/owl.carousel.css'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/animate.min.css'
import './assets/css/main.css'
import './assets/css/responsive.css'

/* import './assets/js/vendor/jquery-1.10.2.min.js'
import './assets/js/vendor/modernizr-2.6.2.min.js'

import './assets/js/jquery.nav'
import './assets/js/jquery.sticky'
//import './assets/js/bootstrap.min.js'
import './assets/js/plugins'
import './assets/js/wow.min.js'
import './assets/js/main.js' */

import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Slider from './components/Slider'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { Menu } from './pages/Menu'
import { Subscribe } from './pages/Subscribe'
import { Contact } from './pages/Contact'
import { FooterInfo } from './components/FooterInfo'
//import Error from './components/Error'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Slider />
    <About />
    <Blog />
    <Menu />
    <Subscribe />
    <Contact />
    <FooterInfo />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
