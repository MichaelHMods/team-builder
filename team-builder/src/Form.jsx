import React, { useState } from 'react';


const Form = props => {

    const [newUser, setNewUser] = useState({ name: "", email: "", role: ""});

    const changeHandler = e => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
        const freshMember = {
            ...newUser,
            id: Date.now()
        };
        props.addMember(freshMember);
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