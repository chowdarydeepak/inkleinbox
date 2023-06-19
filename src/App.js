import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MailList from './pages/MailList';
import Mail from './pages/Mail';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div className='h-screen'>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route element={<Header />}>
              <Route path="tags/:tag" element={<MailList />}/>
              <Route path="mail/:id" element={<Mail />} />
              <Route path="search" element={<MailList />}/>
            </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
