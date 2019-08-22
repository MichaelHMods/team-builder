import React, { useState } from 'react';


const Form = props => {

    const [newUser, setNewUser] = useState({ name: "", email: "", role: ""});

    const changeHandler = e => {
        // record input box, adds to state (newUser) remember spread operator to save values that we are not changing
    
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    const submitForm = e => {
        //stop reload
        e.preventDefault();
        const freshMember = {
            ...newUser,
            id: Date.now()
        };
        //set state in App
        props.addMember(freshMember);
        //reset the form important
        setNewUser({ name: "", email: "", role: "" })
    }

  console.log(newUser);
    return (
       <form onSubmit={submitForm}>
           <label htmlFor="name">Name</label>
           <input 
                type="text"
                name="name"
                placeholder="ex. Joe Smith"
                value={newUser.name}
                onChange={changeHandler}
                />
           <label htmlFor="email">Email</label>
           <input 
                type="email"
                name="email"
                placeholder="ex. sample@samplyplace.com"
                value={newUser.email}
                onChange={changeHandler}
                />
           <label htmlFor="role">Role</label>
           <input 
                type="text"
                name="role"
                placeholder="your role"
                value={newUser.role}
                onChange={changeHandler}
                />
            <button className="submit">Submit!</button>
                
       </form> 


    )
}


export default Form;