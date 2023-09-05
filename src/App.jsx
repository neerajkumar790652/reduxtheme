import Home from './components/Home';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './App.css';
import ThemeToggle from './components/ThemeToggle';
import {Routes,Route} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import { toggleTheme } from './actions/themeActions';
function App({theme,toggleTheme}) {

  return (
    
   <>
   <div className={`theme-toggle ${theme}-theme`}>
    <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/contact' element={<Contact/>}/>
 </Routes>
 
        
        <button onClick={toggleTheme}>Toggle Theme to {theme}</button>
        <p>I Have Changed theme to {theme}</p>
        <Link to="/">Home</Link>
        <Link to='/about'>About</Link>
        <Link to="/contact">Contact</Link>
      </div>
     
 </>
    
     
      
   
 
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

const mapDispatchToProps = {
  toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

