import './App.css'
import Companies from './Companies'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Button from './components/Button'
import Metrics from './components/Metrics'
import Section from './components/Section'
import Header from './components/Header'
import Footer from './components/Footer'
import SingIn from './components/SingIn'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  //  const handleBtnClick = () => {
  //    console.log(1)
  //  }

  //  const handleBtnClick2 = () => {
  //    console.log(2)
  //  }

  return (
      <Router>
        <Routes>
          <Route path="/" element={<SingIn />} />
          <Route path="/main" element={
            <>
              <Header />
              <Companies />
              <Services />
              <WhyChooseUs />
              <Metrics />
              <Section />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
  )
}
export default App