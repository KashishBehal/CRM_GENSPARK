import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Login } from './components/login';
// import { Redirect } from './page/LoginRedirect';
import { Defaultlayout } from './layout/Defaultlayout';
import { Dashboard } from './page/Dashboard/Dashboard.page';
import { NewTicket } from './page/new-ticket/NewTicket';
import { TicketListing } from './page/Ticket-Listing/TicketListing';
import { Tickett } from './page/ticket/Tickett';
import {Parallax} from '../src/components/parallax/Parallax'
import { Recent } from './components/Recent';
function App() {
  return (
   
    <div>  
      {/* <Router>
    // <Routes>
    //   <Route path="/register" element={<Login />} />
    //   <Route path="/login" element={<Redirect />} />
    // </Routes>
  </Router>  */}
 <Router>
 <Routes>
    
       <Route path='/' element={ <Defaultlayout><Dashboard/><Parallax/> <Recent/>
   {/* <NewTicket/> */}
   </Defaultlayout>}
    ></Route>
    <Route path='/form' element={<NewTicket/>}
    >
       
    </Route>
    <Route path='/list' element={<TicketListing/>}>
    </Route>
    <Route path='/detail' element={<Tickett/>}>
    </Route>
    </Routes>
 </Router>
  
   {/* <Defaultlayout><Dashboard/>
   <NewTicket/>
   </Defaultlayout> */}
   
   </div>
  
  );
}

export default App;
