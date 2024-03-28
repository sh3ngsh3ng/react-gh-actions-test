
import React, {useState} from "react";
import {useNavigate} from "react-router-dom"

export default function ContactUs(){

    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    function submitForm(){
        navigate('/form-submitted', {
            state: {
                "fullName": fullName,
                "email": email
            }
        });
    }

    return(
        <React.Fragment>
            <h1> Contact Us </h1>           
            <div>
                <label> Full Name: </label>
                <input  type="text"
                        name="fullname"
                        value={fullName}
                        onChange={(event)=> setFullName(event.target.value)}
                />
            </div>
            <div>
                <label> Email: </label>
                <input  type="text"
                        name="email"
                        value={email}
                        onChange={(event)=> setEmail(event.target.value)}
                />
            </div>
            <input type="button" onClick={submitForm} value="Submit" />
        </React.Fragment>
    )

}