import React from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';

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
    <Router  basename="/portfolio">
      <div className="App">
        <SideBar />
        <div className = {"container"}>
        
          <Switch>
            <Route path = "/"  exact render = {() => (<div><Header /><ProjectSpace>{projectComponents}</ProjectSpace></div>)}/>
            <Route path = "/dumesq" component = {Doomesq} />
            <Route path = "/weatherapp" component = {WeatherApp} />
            <Route path = "/triedata" component = {TrieData} />
            <Route path = "/maps" component = {MapCreation} />
            <Route path = "/fyproject" component = {FYProject} />
            <Route path = "/contact" component = {Contact} /> 
            <Route path = "/about" component = {About} /> 
          </Switch> 
          <FooterDiv />

        </div>
        
        
        
      </div>
    </Router >
  );

}



export default App;
