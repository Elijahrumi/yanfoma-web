import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import Portfolio from './components/Portfolio';
import ServiceSection from './components/ServiceSection';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
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
      <Header />
      <Landing />
      <About />
      <ServiceSection />
      <Portfolio />
      <Team />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
