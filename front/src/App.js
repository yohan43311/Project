// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import UserList from './pages/UserList';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

import PageInt from './pages/PageInt';
import Pro from './pages/Pro';
import PageSite from './pages/PageSite';
import UserEd from './pages/UserEd'
import UserMu from './pages/UserMu'
import Main from './pages/Main'
import Login from './users/Login';
import Join from './users/Join';
import R1 from './pages/R1';
import R2 from './pages/R2';
import R3 from './pages/R3';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<UserList/>}/>
          <Route exact path="/main" element={<Main/>}/>
          <Route exact path="/edituser/:id" element={<EditUser/>}/>
          <Route exact path="/viewuser/:id" element={<ViewUser/>}/>

          <Route exact path="/pageint" element={<PageInt/>}/>
          <Route exact path="/pro" element={<Pro/>}/>
          <Route exact path="/pagesite" element={<PageSite/>}/>
          <Route exact path="/usered" element={<UserEd/>}/>
          <Route exact path="/usermu" element={<UserMu/>}/>
          <Route exact path="/login" element={<Login/>}/>

          <Route exact path="/join" element={<Join/>}/>

          <Route exact path="/R1" element={<R1/>}/>
          <Route exact path="/R2" element={<R2/>}/>
          <Route exact path="/R3" element={<R3/>}/>


        </Routes> 
      </Router>
      
    </div>
  );
}

export default App;
