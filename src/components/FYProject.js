import React from "react";


function FYProject(){
    return(
        <div className = "headerOne">
            <h1>Final Year Project</h1>
            <div className = "projectSpace">


            <div className = "projectPageImageContainer">
                <a href = "./images/fyprojectImages/poster.png">
                    <img className = "projectPageImage" src="./images/fyprojectImages/poster.png" alt = "payload map"></img>
                </a>
                <a href = "./images/fyprojectImages/sampleresults.png">
                    <img className = "projectPageImage" src="./images/fyprojectImages/sampleresults.png" alt = "payload map"></img>
                </a>
                <a href = "./images/fyprojectImages/unityeditor.png">
                    <img className = "projectPageImage" src="./images/fyprojectImages/unityeditor.png" alt = "prophunt map"></img>
                </a>
            </div>

            <p className = "projectPageDescription">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <p2 className = "projectPageSkills">Technologies:
                <ul>
                    <li>Blender</li>
                    <li>Hammer Source Tool</li>
                    <li>Sound editing Software</li>
                    <li>Image editing Software </li>
                </ul>
            
            </p2>

            </div>
        </div>
    )
}

export default FYProject;





