
// import SingleBlog from "./components/SingleBlog";

import Header from "./Header";
import Landing from "./Landing";
import About from "./About";
import ServiceSection from "./ServiceSection";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

function MainComponent() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <Landing/>
      <About/>
      <ServiceSection/>
      <Portfolio/>
      <Team/>
      <Testimonial/>
      <Blog/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default MainComponent;
