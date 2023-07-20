import React from "react";
import { Alert } from "bootstrap";
import { Heading } from "./styled comp/component";


function EventHandler(){
    const handleClick=(args)=>{
        alert('welcome'+args)
    };
    

        function handleSubmit(event){
        console.log(event)
    }
    return (
 <form className="card">
        <button className="btn-btn-primary"onClick={()=>handleClick('react'+'world')}>alert</button>
    <Heading color='primary'>event handling exposure</Heading>
    <div className="card">
    <button className="btn-btn-primary" type="submit"onClick={handleSubmit}>
        submit</button></div>
</form>
    );
}
export default EventHandler;


