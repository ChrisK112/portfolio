import React from 'react';
import { BrowserRouter as HashRouter, Switch, Route } from 'react-router-dom';

import './style.css';
import Header from "./components/Header";
import FooterDiv from "./components/Footer";
import SideBar from "./components/SideBar";
import ProjectTile from "./components/ProjectTile";
import ProjectSpace from "./components/ProjectSpace";
import Doomesq from "./components/Dumesq";
import TrieData from "./components/TrieData";
import MapCreation from "./components/MapCreation";
import FYProject from "./components/FYProject";
import Contact from "./components/Contact";
import WeatherApp from "./components/WeatherApp";
import About from "./components/About";

//data - will change to jQuery later
import projectData from "./data/projectData";




function App() {

  const projectComponents = projectData.map(project => {
    return (
      <ProjectTile 
      projectPage ={project.projectURL}
      imgURL={project.imgURL} 
      name={project.name} 
      skills={project.skills} 
      description={project.description}/>
    )
  })
  
  


  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <SideBar />
        <div className = {"container"}>
        
          <Switch>
            <Route path = "process.env.PUBLIC_URL"  exact render = {() => (<div><Header /><ProjectSpace>{projectComponents}</ProjectSpace></div>)}/>
            <Route path = "process.env.PUBLIC_URL/dumesq" component = {Doomesq} />
            <Route path = "process.env.PUBLIC_URL/weatherapp" component = {WeatherApp} />
            <Route path = "process.env.PUBLIC_URL/triedata" component = {TrieData} />
            <Route path = "process.env.PUBLIC_URL/maps" component = {MapCreation} />
            <Route path = "process.env.PUBLIC_URL/fyproject" component = {FYProject} />
            <Route path = "process.env.PUBLIC_URL/contact" component = {Contact} /> 
            <Route path = "process.env.PUBLIC_URL/about" component = {About} /> 
          </Switch> 
          <FooterDiv />

        </div>
        
        
        
      </div>
    </HashRouter>
  );

}



export default App;
