import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/Home/About';
import Home from './pages/Home/Home';
import Header from './pages/shared/Header/Header';
import Appoinment from './pages/Home/Appoinment';
import Reviews from './pages/Home/Reviews';
import ContactUs from './pages/Home/ContactUs';
import Login from './pages/shared/Login/Login';
import AppoinmentBanner from './pages/AppoinmentBanner/AppoinmentBanner';
import AppoinmentPage from './pages/AppoinmentPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/appoinment" element={<AppoinmentPage></AppoinmentPage>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/contact_us" element={<ContactUs></ContactUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
