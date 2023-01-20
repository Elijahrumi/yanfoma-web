import React from "react";
import portfolio from "../data/portfolio";

export default function Portfolio() {
  const portfolioitems = portfolio.map(
    item => {
      return (
        <div className="col-sm-4">
          <div className="img-wrapper">
            <img
              src={`assets/imgs/${item.image}`}
              alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
            />
            <div className="overlay">
              <div className="overlay-infos">
                <h5>Project Title</h5>
                <a href="javascript:void(0)">
                  <i className="ti-zoom-in"></i>
                </a>
                <a href="javascript:void(0)">
                  <i className="ti-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  )
  return (
    // Portfolio section
    <section id="portfolio">
      <div className="container text-center">
        <h6 className="section-subtitle">Our Awesome Works</h6>
        <h6 className="section-title mb-5">Our Portfolio</h6>
        <div className="row">
          {portfolioitems}
          
        </div>
      </div>
    </section>
  );
}
