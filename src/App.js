import { useState, useEffect } from 'react';
import './App.css';
import Notice from './components/Notice';
import Products from './components/Products';
import Profile from './components/Profile';
import ThemeContext from './context/ThemeContext';

function App() {
  const [theme, setTheme] = useState('bg-light');
  const [profile, setProfile] = useState({login: '', email: ''});
  const [message, setMessage] = useState('');

  return <div className={`${theme} p-4`} id='app'>
    <ThemeContext.Provider value={{theme, setTheme, profile, setMessage}}>
      <Profile setProfile={setProfile}></Profile>
      <Products/>
      <Notice message={message} />
    </ThemeContext.Provider>
</div>
}

export default App;
