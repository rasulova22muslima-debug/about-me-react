import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Cards from './components/Cards'
import Footer from './components/Footer'


const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App


