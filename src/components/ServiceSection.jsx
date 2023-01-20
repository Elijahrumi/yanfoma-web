import React from "react";
import services from "../data/services";

export default function ServiceSection(){
    const displayService = services.map(
        service => {
            return (
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className={`${service.icon} text-primary`}></i>
                    </h2>
                    <h6 className="card-title">{service.title}</h6>
                    <p>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
        }
    )
    return(
        // Service Section 
    <section id="service">
        <div className = "container">
            <h6 className = "section-subtitle text-center">Makes Happen</h6>
            <h5 className = "section-title text-center mb-6">Our Service</h5> 
            <div className = "row">
                {displayService}
            </div>  
        </div>
    </section>
    )
}