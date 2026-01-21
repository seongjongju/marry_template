import { useEffect } from 'react'
import Calendar from './components/contents/Calendar'
import Gallerys from './components/contents/Gallerys'
import Liaison from './components/contents/Liaison'
import Location from './components/contents/Location'
import Saying from './components/contents/Saying'
import Visual from './components/visual/Visual'

function App() {
  useEffect(() => {
    const setFixedVh = () => {
        const vh = window.innerHeight;
    
        document.documentElement.style.setProperty('--fixed-vh', `${vh}px`);
    };

    setFixedVh();
  }, []);

  return (
    <>
      <Visual />
      <Saying />
      <Liaison />
      <Calendar />
      <Gallerys />
      <Location />
    </>
  )
}

export default App
