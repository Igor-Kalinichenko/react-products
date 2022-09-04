import { useState } from 'react';
import './App.css';
import AlertMessage from './components/AlertMessage';
import Products from './components/Products';
import Profile from './components/Profile';
import ThemeContext from './context/ThemeContext';
import ProfileContext from './context/ProfileContext';
import Header from './components/Header';
import AboutUs from './components/static/AboutUs';
import Contacts from './components/static/Contacts';
import NotFound from './components/static/NotFound';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [theme, setTheme] = useState('bg-light');
  const [profile, setProfile] = useState({login: '', email: ''});
  const [message, setMessage] = useState({text: '', variant: 'success'});

  return <div className={`${theme}`} id='app'>

    
    <ProfileContext.Provider value={{profile, setMessage}}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/profile" element={<><Profile setProfile={setProfile} />
                      <AlertMessage message={message} /></>} />
            <Route path="/" element={<>
                      <Products/>
                      <AlertMessage message={message} />
                      </>} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>

      
      </ThemeContext.Provider>
      
    </ProfileContext.Provider>
</div>
}

export default App;
