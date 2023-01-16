import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Work from "./Pages/Work";
// import Context from "./component/Context"
// import { createContext } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Home from "./Pages/Home";
// import { ThemeContext } from "styled-components";


function App() {
// const [Princes, Setprince ] = useState("prince")
  return (
    <div className="App">
      <Router>
        <Routes>

          {/* <ThemeContext.Provider value={{Princes,Setprince}}> */}
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          {/* </ThemeContext.Provider>                   */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>

      </Router>


    </div>
  );
}

export default App;
