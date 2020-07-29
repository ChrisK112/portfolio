import React from "react";
//data for each project page
import projectPageData from "../data/projectPageData.json";


function WeatherApp(){
    return(
        <div className = "headerOne">
            <h1>Weather Application</h1>
            <div className = "projectSpace">


            <div className = "projectPageImageContainer">
                <a href = {process.env.PUBLIC_URL + "/images/weatherappImages/case1.jpg"}>
                    <img className = "projectPageImage" src={process.env.PUBLIC_URL + "/images/weatherappImages/case1.jpg"} alt = "payload map"></img>
                </a>
                <a href = {process.env.PUBLIC_URL + "/images/weatherappImages/design.PNG"}>
                    <img className = "projectPageImage" src={process.env.PUBLIC_URL + "/images/weatherappImages/design.PNG"} alt = "payload map"></img>
                </a>
                <a href = {process.env.PUBLIC_URL + "/images/weatherappImages/case2.jpg"}>
                    <img className = "projectPageImage" src={process.env.PUBLIC_URL + "/images/weatherappImages/case2.jpg"} alt = "prophunt map"></img>
                </a>
            </div>

            <p className = "projectPageDescription">
            <hr></hr>
            {
            projectPageData.WeatherApp.map(project => {
                return(
                    project.description
                 );
                
            })
            }
            <hr></hr>
            </p>


            <p className = "projectPageSkills">Technologies: <br></br>
            {
                projectPageData.WeatherApp.map(skill => {
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

export default WeatherApp;






