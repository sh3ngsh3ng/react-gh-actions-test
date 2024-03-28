import React from "react";
import { useLocation } from "react-router-dom"

export default function SubmittedForm(){

    const location = useLocation();
    let fullName = location.state.fullName;
    let email = location.state.email;

    return(
        <React.Fragment>
            <h1> Thank you for contacting us. We received your feedback. </h1>
            <p> Your name: {fullName} </p>
            <p> Your email: {email} </p>
        </React.Fragment>
    )

}