//styles
import './App.css';

//hooks
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { useState } from 'react';

//components
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

//pages
import Home from './pages/Home/Home';
import Add from './pages/Add/Add';
import Project from './pages/Project/Project';

function App() {
  const [home, showHome] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
