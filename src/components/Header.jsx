import React from "react";

export default function Header(){
    return (
        //  Page Header
    <header className="header">
        <div className="overlay">
            <h6 className="subtitle">We host content focused websites for organizations</h6>
            <h1 className="title">Yanfoma</h1>
            <div className="buttons text-center">
                <a href="#service" className="btn btn-primary rounded w-lg btn-lg my-1">Our Service</a>
                <a href="#contact" className="btn btn-outline-light rounded w-lg btn-lg my-1">Contact Us</a>
            </div>              
        </div>      
    </header>
    );
}