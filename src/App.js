
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Footer from './components/Footer/Footer';

import Home from './components/Home Page/Home';
import NavBar from './components/Home Page/NavBar/NavBar';
import { Routes, Route} from "react-router-dom";
import Login from './components/Log-in Page/Login/Login';
import Register from './components/Register page/Register';
import Inventory from './components/Inventory/Inventory';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Manageitem from './components/Manageitem/Manageitem';
import Additems from './components/Additems/Additems';
import Error from './components/Error/Error';
import Blogs from './components/Blogs/Blogs';
// import Login from './components/Log-in Page/Login/Login';


function App() {
  return (
    <div >
      <NavBar></NavBar>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/manageitems" element={<Manageitem />} />
        <Route path="/additems" element={<Additems />} />
        <Route path="inventory/:id" element={<RequireAuth><Inventory /></RequireAuth>} />
      </Routes> 
      <Footer></Footer>
    </div>
  );
}

export default App;

