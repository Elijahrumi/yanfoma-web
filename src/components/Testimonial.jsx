import React from "react";

export default function Testimonial(){
    return (
        <section id="testimonial">
        <div className ="container">
            <h6 className ="section-subtitle text-center">Testimonial</h6>
            <h6 className ="section-title text-center mb-6">What Our Clients Says</h6>
            <div className ="row">
                <div className ="col-md-6">
                    <div className ="testimonial-wrapper">
                        <div className ="img-holder">
                            <img src="assets/imgs/avatar-5.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"/>                     
                        </div>
                        <div className ="body">
                            <p className ="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
                            <h6 className ="title">Richard Reb</h6>
                        </div>
                    </div>
                </div>
                <div className ="col-md-6">
                    <div className ="testimonial-wrapper">
                        <div className ="img-holder">
                            <img src="assets/imgs/avatar-6.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"/>                     
                        </div>
                        <div className ="body">
                            <p className ="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
                            <h6 className ="title">John Doe</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}