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
import Footer from './components/footer/Footer'
import Dday from './components/contents/Dday'

gsap.registerPlugin(ScrollTrigger);

//비주얼 영역이 핸드폰 기종에 따라 높이를 맞추는 함수
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
      <Dday />
      <Gallerys />
      <Location />
      <Impart />
      <Footer />
    </>
  )
}

export default App
