import React from "react";

//project data for displaying project on sidebar dropdown

import projectData from "../data/projectDataBackup";
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
            <a href="#/about"><img className = "sideBarImage" src="./images/face.jpg"/></a>
            
                <div className = "sideBarItems">

                    <div className = "sideBarItem">
                        <a href="#/" className = "sideBarLink"> 
                            <div className = "sideBarImageContainer">
                                <img className = "sideBarIcon" src = "./icons/home.png" />
                            </div>

                            <div className = "sideBarText">
                                Home
                            </div>
    
                        </a>
                    </div>

                    <div className = "sideBarPopup">
                        <a className = "sideBarLink"> 
                            <div className = "sideBarImageContainer">
                                <img className = "sideBarIcon" src = "./icons/projects.png" />
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
                                <img className = "sideBarIcon" src = "./icons/cv.png" />
                            </div>

                            <div className = "sideBarText">
                                About
                            </div>
    
                        </a>
                    </div>

                    <div className = "sideBarItem">
                        <a href="#/contact" className = "sideBarLink"> 
                            <div className = "sideBarImageContainer">
                                <img className = "sideBarIcon" src = "./icons/contact.png" />
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


