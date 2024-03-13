import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import JobsContainer from './containers/JobsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import JobsData from './containers/JobsData';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainContainer />}></Route>
          <Route path="/jobs" element={<JobsContainer />}></Route>
          <Route path="/jobs/id" element={<JobsData />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
