import React from "react";
//data for each project page
import projectPageData from "../data/projectPageData.json";

function FYProject(){
    return(
        <div className = "headerOne">
            <h1>Final Year Project</h1>
            <div className = "projectSpace">


            <div className = "projectPageImageContainer">
                <a href = {process.env.PUBLIC_URL + "/images/fyprojectImages/poster.png"}>
                    <img className = "projectPageImage" src={process.env.PUBLIC_URL + "/images/fyprojectImages/poster.PNG"} alt = "payload map"></img>
                </a>
                <a href = {process.env.PUBLIC_URL + "/images/fyprojectImages/sampleresults.png"}>
                    <img className = "projectPageImage" src={process.env.PUBLIC_URL + "/images/fyprojectImages/sampleresults.PNG"} alt = "payload map"></img>
                </a>
                <a href = {process.env.PUBLIC_URL + "/images/fyprojectImages/unityeditor.PNG"}>
                    <img className = "projectPageImage" src={process.env.PUBLIC_URL + "/images/fyprojectImages/unityeditor.PNG"} alt = "prophunt map"></img>
                </a>
            </div>

            <p className = "projectPageDescription">
            <hr></hr>
            {
            projectPageData.FYProject.map(project => {
                return(
                    project.description
                 );
                
            })
            }
            <hr></hr>
            </p>


            <p className = "projectPageSkills">Technologies: <br></br>
            {
                projectPageData.FYProject.map(skill => {
                    return(
                        <ul>
                            {
                                skill.skills.map((skillDetail) => {
                                return (
                                    <li>
                                        {skillDetail.name}
                                    </li>
                                );
                                })
                            }
                        </ul>
                    );
                
                })
            }
            </p>
        </div>
    </div>
    )
    
}

export default FYProject;





