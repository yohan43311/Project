// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//components
import Navbar from './components/Navbar/Navbar';

//pages
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import SignupPage from './pages/SignupPage';

export default function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/mypage" element={<MyPage/>}/>
          <Route exact path="/signuppage" element={<SignupPage/>}/>
        </Routes> 
      </Router>
    </div>
  );
};


