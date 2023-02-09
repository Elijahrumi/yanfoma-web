// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import SingleBlog from './components/SingleBlog';


function App() {
  return (
    // <div className="App">

    //   <MainComponent/>
    // </div>
    <BrowserRouter>
      <div>
        <Routes>
          
          
          <Route path="/" element={<MainComponent />}></Route>
          <Route path="/blog/:slug" element={<SingleBlog />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
