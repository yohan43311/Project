import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Tv from './pages/Tv';

 function App() {
  return (
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/tv" element={<Tv/>} />
      </Routes>
  );
}

export default App;
