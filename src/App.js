import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MailList from './pages/MailList';
import Mail from './pages/Mail';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div className='h-screen'>
        <div className='sticky top-0 h-1/4 mb-0'><Header/></div>
        <div className='h-3/4 overflow-scroll px-4 bg-gray-200 mt-0'>
          <Routes>
            <Route path="/" element={<Navigate to='/tags/inbox'/>}/>
            <Route path="/tags/:tag" element={<MailList />}/>
            <Route path="/mail/:id" element={<Mail />} />
            <Route path="/search" element={<MailList />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
