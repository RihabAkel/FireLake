import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Update title - {id}</span>
                    <p>this document contained code of my web site project</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted Rihab Akel</div>
                    <div>2nd july, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails