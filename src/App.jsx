import './App.css'
import {Info, InfoImage} from './Info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <div className="main--container">
        <div className='inner--container'>
          <InfoImage/>
          <div className="info--wrapper">
            <Info/>
            <About />
            <Interests />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
