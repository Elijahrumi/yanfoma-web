import React from "react";

export default function About(){
    return (
        
    <div>
            {/* About Section */}
    <section id="about">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-5 col-lg-4">
                    <img src="assets/imgs/about.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page" className="w-100 img-thumbnail mb-3"/>
                </div>
                <div className="col-md-7 col-lg-8">
                    <h6 className="section-subtitle mb-0">We Create</h6>
                    <h6 className="section-title mb-3">Awesome Work</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente cupiditate quas, amet harum perferendis minus, cum dolorum obcaecati iste aspernatur voluptatum aut.</p>
                    <p>Cum laudantium unde nemo doloribus eligendi quodarum ea vitae dicta. Accusantium vero, ea? Alias, atque libero. Id, ut harum. </p>
                    <p>consectetur adipisicing elit. Omnis quidem, quos iure a dolorum illum culpa quia nemo soluta, ratione harum beatae minus doloribus consectetur! Similique tempora sunt doloribus molestias.</p>
                </div>
            </div>
        </div>
    </section>
  {/* About Section with bg */}
        <section className = "has-bg-img py-md">
            <div className = "container text-center">
                <h6 className = "section-subtitle">We See</h6>
                <h6 className = "section-title mb-6">What Other Don't See.</h6>
                <div className = "widget mb-4">
                    <div className = "widget-item">
                        <i className = "ti-notepad"></i>
                        <h4>Planning</h4>
                    </div>
                    <div className = "widget-item">
                        <i className = "ti-layout"></i>
                        <h4>Mockup</h4>
                    </div>
                    <div className = "widget-item">
                        <i className = "ti-filter"></i>
                        <h4>Develop</h4>
                    </div>
                    <div className = "widget-item">
                        <i className = "ti-thumb-up"></i>
                        <h4>Provide</h4>
                    </div>
                </div>
            </div>
        </section> </div>
    )
}