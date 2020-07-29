import React from "react";
//data for each project page
import projectPageData from "../data/projectPageData.json";

function Dumesq(){
    return(
        <div className = "headerOne">
        <h1>Dumesq</h1>
        <div className = "projectSpace">


        <div className = "projectPageImageContainer">
            <a href = {process.env.PUBLIC_URL + "/images/dumesqImages/design1.PNG"}>
                <img className = "projectPageImage" src={process.env.PUBLIC_URL + "/images/dumesqImages/design1.PNG"} alt = "dumesq"></img>
            </a>
            <a href = {process.env.PUBLIC_URL + "/images/dumesqImages/design2.PNG"}>
                <img className = "projectPageImage" src={process.env.PUBLIC_URL + "/images/dumesqImages/design2.PNG"} alt = "dumesq"></img>
            </a>
            <a href = {process.env.PUBLIC_URL + "/images/dumesqImages/design3.PNG"}>
                <img className = "projectPageImage" src={process.env.PUBLIC_URL + "/images/dumesqImages/design3.PNG"} alt = "prophunt map"></img>
            </a>
        </div>


        <p className = "projectPageDescription">
        <hr></hr>
            {
            projectPageData.Dumesq.map(project => {
                return(
                    project.description
                 );
                
            })
            }

        <a href="https://www.youtube.com/watch?v=EiOzHfedvgY">https://www.youtube.com/watch?v=EiOzHfedvgY</a>
        <hr></hr>
        </p>


        <p className = "projectPageSkills">Technologies: <br></br>
            {
            projectPageData.Dumesq.map(skill => {
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



export default Dumesq;

