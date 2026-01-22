import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Calendar from './components/contents/Calendar'
import Gallerys from './components/contents/Gallerys'
import Liaison from './components/contents/Liaison'
import Location from './components/contents/Location'
import Saying from './components/contents/Saying'
import Visual from './components/visual/Visual'
import Impart from './components/contents/Impart'

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const setFixedVh = () => {
        const vh = window.innerHeight;
        document.documentElement.style.setProperty('--fixed-vh', `${vh}px`);

        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 200);
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
      <Impart />
    </>
  )
}

export default App
