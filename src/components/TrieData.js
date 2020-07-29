import React from "react";
//data for each project page
import projectPageData from "../data/projectPageData.json";


function TrieData(){
    return(
        <div className = "headerOne">
            <h1>Trie Data Structure</h1>
            <div className = "projectSpace">


            <div className = "projectPageImageContainer">
                <a href = {process.env.PUBLIC_URL + "/images/triedataImages/trieTests.PNG"}>
                    <img className = "projectPageImage" src={process.env.PUBLIC_URL + "/images/triedataImages/trieTests.PNG"} alt = "payload map"></img>
                </a>
                <a href = {process.env.PUBLIC_URL + "/images/triedataImages/triedata.png"}>
                    <img className = "projectPageImage" src={process.env.PUBLIC_URL + "/images/triedataImages/triedata.png"} alt = "payload map"></img>
                </a>
            </div>

            <p className = "projectPageDescription">
            <hr></hr>
            {
            projectPageData.TrieData.map(project => {
                return(
                    project.description
                 );
                
            })
            }
            <hr></hr>
            </p>


            <p className = "projectPageSkills">Technologies: <br></br>
            {
                projectPageData.TrieData.map(skill => {
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

export default TrieData;






