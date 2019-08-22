import React from "react";

const Card = props => {
    return(
    <div>
    {props.teamMembers.map(member => {
        return(
            <div className="card">
        
                <h1>{member.name} </h1>
                <h2>{member.role}</h2>
                <p>{member.email}</p>
            </div>
        )

    } )}

    </div>
    )


}
export default Card;