import EventNav from "./components/EventNavBar"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Quiz from "./components/Quiz"
import Scholarship from "./components/Scholarship"
import Health from "./components/HealthOutreach";
import SportCompetition from "./components/SportCompetition"
import Header from './components/Header'



function App() {
 


  return (
   
    


      <Router>
    <div className="App">
     <Header/>
        <EventNav />
       
 <div className="content">
<Routes>
            <Route path="events/scholarship" element={<Scholarship />} />
            <Route path="events/quiz-competition" element={<Quiz/>} />
  
            <Route path="events/health-outreach" element={<Health />} />
            <Route path="events/sport-competition" element={<SportCompetition />} />
            
 
  </Routes>
  
  
 </div>
 
    </div>
    </Router>
  );
}

export default App;
