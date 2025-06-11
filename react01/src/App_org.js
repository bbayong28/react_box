import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Archiving from './pages/Archiving'
import Skill from './pages/Skill';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer'
import Totop from './components/Totop';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Archiving />
      <Skill/>
      <Projects />
      <Contact /> 
      <Footer />
      <Totop/>
    </div>
  );
}

export default App;