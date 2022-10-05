// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import UserList from './pages/UserList';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

import PageInt from './pages/PageInt';
import Product from './pages/Product';
import PageSite from './pages/PageSite';
import Plet from './pages/Plet';
import UserEd from './pages/UserEd'
import UserMu from './pages/UserMu'
import Main from './pages/Main'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<UserList/>}/>
          <Route exact path="/main" element={<Main/>}/>
          <Route exact path="/adduser" element={<AddUser/>}/>
          <Route exact path="/edituser/:id" element={<EditUser/>}/>
          <Route exact path="/viewuser/:id" element={<ViewUser/>}/>

          <Route exact path="/pageint" element={<PageInt/>}/>
          <Route exact path="/product" element={<Product/>}/>
          <Route exact path="/pagesite" element={<PageSite/>}/>
          <Route exact path="/plet" element={<Plet/>}/>
          <Route exact path="/usered" element={<UserEd/>}/>
          <Route exact path="/usermu" element={<UserMu/>}/>








        </Routes> 
      </Router>
      
    </div>
  );
}

export default App;
