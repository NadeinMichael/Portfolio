import { useEffect } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';

import './buttonDarkMode.css';
import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';

const ButtonDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className={
        !darkMode ? 'dark-mode-btn' : 'dark-mode-btn dark-mode-btn--active'
      }
      onClick={toggleDarkMode}
    >
      <img src={sun} alt='Light mode' className='dark-mode-btn__icon' />
      <img src={moon} alt='Dark mode' className='dark-mode-btn__icon' />
    </button>
  );
};

export default ButtonDarkMode;
