import Gallerys from './components/main/Gallerys'
import Liaison from './components/main/Liaison'
import Location from './components/main/Location'
import Saying from './components/main/Saying'
import Dday from './components/main/Dday'
import Impart from './components/main/Impart'
import Calendars from './components/main/Calendars'
import Visual from './components/visual/Visual'
import Footer from './components/footer/Footer'

//우클릭 차단
document.addEventListener('contextmenu', e => e.preventDefault());

//개발자도구 차단
document.addEventListener('keydown', e => {
  if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key)) ||
      (e.ctrlKey && e.key === 'U')
  ) {
    e.preventDefault();
    alert('보안정책 상 해당 단축키는 사용이 금지되었습니다.');
  }
});

function App() {
  return (
    <>
      <Visual />
      <Saying />
      <Liaison />
      <Calendars />
      <Dday />
      <Gallerys />
      <Location />
      <Impart />
      <Footer />
    </>
  )
}

export default App
