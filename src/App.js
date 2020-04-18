import React from 'react';
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Error from './pages/Error'
import Navbar from './component/Navbar';
import {Route,Switch} from 'react-router-dom';
import './App.css';

function App() {
  return( 
  <>
    <Navbar/>
    <Switch>
    <Route exact path ='/'  component={Home}/>
    <Route exact path ='/projects/' component={Projects}/>
    <Route exact path ='/projects/:slug' component={ProjectDetails}/>
    <Route component={Error}/>
    </Switch>
  </>
  )
}

export default App;
