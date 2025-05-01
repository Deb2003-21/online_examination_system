
//import './components/App.css';

import Mainl from './components/Mainl'
import Frm from './components/Frm';
import Login from './components/Login';
import Sdash from './components/Sdash'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Testl from './components/Testl';
import Tdash from './components/Tdash';
import Editer from './components/Editer';
import Tsign from './components/Tsign';
import Tlists from './components/Tlists';
import Score from './components/Score';
import Rlist from './components/Rlist';
import Rk from './components/Rk';




function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/exam" element={<Frm />}>
          </Route>
          <Route path="/" element={<Mainl />}>
            
          </Route>
          <Route path="/slogin" element={<Login />}>

          </Route>
          <Route path="/studentDashboard" element={<Sdash />}>

          </Route>
          <Route path="/Testlist" element={<Testl />}>

          </Route>
          <Route path='/Editer' element={<Editer/>}></Route>
          <Route path='/teacher' element={<Tsign/>}></Route>
    
          <Route path='/teacherDashboard' element={<Tdash/>}></Route>
          <Route path='/Your sets' element={<Tlists/>}></Route>
          <Route path='/Results' element={<Rlist/>}></Route>
          <Route path='/stat' element={<Score/>}></Route>
          <Route path='/ranking' element={<Rk/>}></Route>
        </Routes>
        
      </Router>

    </>
  );
}

export default App;
