import React from "react";
//data for each project page
import projectPageData from "../data/projectPageData.json";


function MapCreation(){
    return(
        <div className = "headerOne">
            <h1>Map Creation</h1>
            <div className = "projectSpace">


            <div className = "projectPageImageContainer">
                <a href = {process.env.PUBLIC_URL + "/images/mapcreationImages/payload1.png"}>
                    <img className = "projectPageImage" src={process.env.PUBLIC_URL + "/images/mapcreationImages/payload1.png"} alt = "payload map"></img>
                </a>
                <a href = {process.env.PUBLIC_URL + "/images/mapcreationImages/payload2.png"}>
                    <img className = "projectPageImage" src={process.env.PUBLIC_URL + "/images/mapcreationImages/payload2.png"} alt = "payload map"></img>
                </a>
                <a href = {process.env.PUBLIC_URL + "/images/mapcreationImages/prophunt.png"}>
                    <img className = "projectPageImage" src={process.env.PUBLIC_URL + "/images/mapcreationImages/prophunt.png"} alt = "prophunt map"></img>
                </a>
            </div>

            <p className = "projectPageDescription">
            <hr></hr>
            {
            projectPageData.MapCreation.map(project => {
                return(
                    project.description
                 );
                
            })
            }
            

            {
                projectPageData.MapCreation.map(skill => {
                    return(
                        <ul>
                            {
                                skill.mods.map((modsDetail) => {
                                return (
                                    <div>
                                    <li>
                                        {modsDetail.name}
                                    </li>
                                    {modsDetail.description}
                                    <br></br><br></br>
                                    </div>
                                );
                                })
                            }
                        </ul>
                    );
                
                })
            }

        <hr></hr>
            </p>          

            <p className = "projectPageSkills">Technologies: <br></br>
            {
                projectPageData.MapCreation.map(skill => {
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

export default MapCreation;






