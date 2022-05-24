import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Blog from './pages/Blog';
import Home from './pages/Home';
import { NavBar } from './components/Navbar';
import Resgister from './pages/auth/register/resgister';
import Login from './pages/auth/login/login';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/register' element={<Resgister />} />
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
