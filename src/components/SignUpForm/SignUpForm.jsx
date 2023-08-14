import { useState } from "react"

export default function SignUpForm({handleSignUp}){
    const [formData, setFormData]= useState({
        name: "",
    });

    function handleChange(evt){
        const newFormData = {...formData, [evt.target.name]: evt.target.value}
        setFormData(newFormData)
    }
    function handleSubmit(evt){
        evt.preventDefault();
        handleSignUp(formData.name);
    }

    
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
                <input
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder=""   
            />
            </label>
                <button type="submit">Sign Up</button>
        </form> 
    )
}