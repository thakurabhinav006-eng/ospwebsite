import Header from './components/Header'
import Services from './components/Services'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css' // Ensure global styles are applied

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Services />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
