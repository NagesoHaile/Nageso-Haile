import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Service from './components/Service';
function App() {
  return (
    <>
      <Navbar /> 
      <Home />
      <About />
      <Skill />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
