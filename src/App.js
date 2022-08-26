import { useState } from 'react';
import './App.css';
import Products from './components/Products';
import Profile from './components/Profile';
import ThemeContext from './context/ThemeContext';

function App() {
  const [theme, setTheme] = useState('bg-light');
  const [profile, setProfile] = useState({login: '', email: ''});

  return <div className={`${theme} p-4`} id='app'>
    <Profile setProfile={setProfile}></Profile>
    <ThemeContext.Provider value={{theme, setTheme, profile}}>
      <Products/>
    </ThemeContext.Provider>
</div>
}

export default App;
