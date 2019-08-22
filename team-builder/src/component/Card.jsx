import React from "react";

const Card = props => {
    return(
    <div>
    {props.teamMembers.map(member => {
        return(
            <div className="card">
        
                <h2>{member.name} </h2>
                <h3>{member.role}</h3>
                <p>{member.email}</p>
            </div>
        )

    } )}

    </div>
    )


}
export default Card;