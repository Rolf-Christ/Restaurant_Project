import React from 'react'
import ReactDOM from 'react-dom'
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './assets/css/owl.carousel.css'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/animate.min.css'
import './assets/css/main.css'
import './assets/css/responsive.css'

/* import Moderniz from './assets/js/vendor/modernizr-2.6.2.min.js'
import JqueryMin from './assets/js/vendor/jquery-1.10.2.min.js'

import JqueryNav from './assets/js/jquery.nav.js'
import JquerySticky from './assets/js/jquery.sticky.js'
import Bootstrap1 from './assets/js/bootstrap.min.js'
import Plugins from './assets/js/plugins.js'
import Wow from './assets/js/wow.min.js'
import Main from './assets/js/main' */

import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Slider from './components/Slider'
import About from './pages/About'
import { Blog } from './pages/Blog'
import { Menu } from './pages/Menu'
import { Subscribe } from './pages/Subscribe'
import { Contact } from './pages/Contact'
import { FooterInfo } from './components/FooterInfo'
//import Error from './components/Error'

ReactDOM.render(
  <React.StrictMode>
    
    {/* <Moderniz />
    <JqueryMin />
    <JqueryNav />
    <JquerySticky />
    <Bootstrap1 />
    <Plugins />
    <Wow />
    <Main /> */}

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
