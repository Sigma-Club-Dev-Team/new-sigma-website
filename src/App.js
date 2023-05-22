import AboutNavBar from "./components/AboutNavBar"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import History from "./components/History"
import Chief from "./components/Chief"
import Executives from "./components/Executives";
import RollOfHonour from "./components/RollOfHonour"
import Header from './components/Header'



function App() {
 


  return (
   
    


      <Router>
    <div className="App">
     <Header/>
        <AboutNavBar />
       
 <div className="content">
<Routes>
            <Route path="about/sigma-chief" element={<Chief />} />
            <Route path="about/history" element={<History/>} />
  
            <Route path="about/executives" element={<Executives />} />
            <Route path="about/roll-of-honour" element={<RollOfHonour />} />
            
 
  </Routes>
  
  
 </div>
 
    </div>
    </Router>
  );
}

export default App;
