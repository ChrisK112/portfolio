import React from "react";

function ProjectTile(props){
    return(
        <a className = "projectTile" href = {props.projectPage}>
            <h3 className = "projectTitle">{props.name}</h3>
            <div className = "imageContainer">
                    <img className = "projectImage" src={props.imgURL}/>
            </div>        
            <p className = "projectText">{props.description}</p>
            <p className = "projectSkills">{props.skills}</p>
        </a>
    )
    
}

export default ProjectTile;

