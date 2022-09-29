import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Work from "./Pages/Work";

function App() {

  
  return (
    <div className="App">
      
      <Router>

        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/resume" element={ <Resume />} />
          <Route path="/work" element={ <Work />} />
          <Route path="/blogs" element={ <Blogs />} />
        </Routes>

      </Router>
      
    
    </div>
  );
}

export default App;
