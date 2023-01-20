import React from "react";
import  teamMembers  from '../data/teamMembers';

export default function Team() {
  const DisplayTeam = teamMembers.map(
    (member)=>{
      return (
        //  Team Section
        <div className="col-sm-6 col-md-4">
          <div className="card text-center mb-4">
            <img className="card-img-top inset" src={member["image-src"]} />
            <div className="card-body">
              <h6 className="small text-primary font-weight-bold">
                {member.title}
              </h6>
              <h5 className="card-title">{member.name}</h5>
              <p>{member.description}</p>
              <div className="socials">
                <a href={member["facebook-url"]}>
                  <i className="ti-facebook"></i>{" "}
                </a>
                <a href={member["github-url"]}>
                  <i className="ti-github"></i>
                </a>
                <a href={member["dropbox-url"]}>
                  <i className="ti-dropbox"></i>
                </a>
                <a href={member["twitter-url"]}>
                  <i className="ti-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  )
  return (
    <section id="team">
          <div className="container">
            <h6 className="section-subtitle text-center">Meet With</h6>
            <h6 className="section-title mb-5 text-center">Our Team</h6>
             <div className="row">
                
                  {DisplayTeam}
                
             </div>
          </div>
        
        </section>
  )
}
