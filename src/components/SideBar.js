import React from "react";

//project data for displaying project on sidebar dropdown

import projectData from "../data/projectData";
import ProjectSpace from "./ProjectSpace";

function SideBar(){

    //get all present project + names + links
    const projectComps = projectData.map(project => {
        return (
            <a href = {project.projectURL}> 
                {project.name}
            </a>
        )
      })




    return(

        <nav className = "sideBar">
            <a href="#/about"><img className = "sideBarImage" src={process.env.PUBLIC_URL + "/images/face.jpg"}/></a>
            
                <div className = "sideBarItems">

                    <div className = "sideBarItem">
                        <a href="#/" className = "sideBarLink"> 
                            <div className = "sideBarImageContainer">
                                <img className = "sideBarIcon" src = {process.env.PUBLIC_URL + "/icons/home.png"} />
                            </div>

                            <div className = "sideBarText">
                                Home
                            </div>
    
                        </a>
                    </div>

                    <div className = "sideBarPopup">
                        <a href="#/"  id = "projectLink" className = "sideBarLink"> 
                            <div className = "sideBarImageContainer">
                                <img className = "sideBarIcon" src = {process.env.PUBLIC_URL + "/icons/projects.png"} />
                            </div>

                            <div className = "sideBarText">
                                Projects
                            </div>
                            <div className = "sideBarPopupContent">
                                {projectComps}
                            </div>
                        </a>
                        
                    </div>

                    <div className = "sideBarItem">
                        <a href="#/about" className = "sideBarLink"> 
                            <div className = "sideBarImageContainer">
                                <img className = "sideBarIcon" src = {process.env.PUBLIC_URL + "/icons/cv.png"} />
                            </div>

                            <div className = "sideBarText">
                                About
                            </div>
    
                        </a>
                    </div>

                    <div className = "sideBarItem">
                        <a href="#/contact" className = "sideBarLink"> 
                            <div className = "sideBarImageContainer">
                                <img className = "sideBarIcon" src = {process.env.PUBLIC_URL + "/icons/contact.png"} />
                            </div>

                            <div className = "sideBarText">
                                Contact
                            </div>
    
                        </a>
                    </div>

                </div>
        </nav>
    )
    
}

export default SideBar;


