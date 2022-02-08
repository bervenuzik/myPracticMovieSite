
import '../styles/App.css';
import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import MostPopular from "./MostPopular.jsx"
import Navigation from "./Navigation.jsx"




function App() {


  return (
    <div>

      <Router>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<MostPopular/>}/>  
        </Routes>

      </Router>
    
    </div>
      
  );
}

export default App;

 