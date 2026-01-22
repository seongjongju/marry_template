import Calendar from './components/contents/Calendar'
import Gallerys from './components/contents/Gallerys'
import Liaison from './components/contents/Liaison'
import Location from './components/contents/Location'
import Saying from './components/contents/Saying'
import Visual from './components/visual/Visual'
import Impart from './components/contents/Impart'
import Footer from './components/footer/Footer'
import Dday from './components/contents/Dday'

function App() {
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
