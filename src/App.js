
import './App.css'
import About from './components/About/About';
import Contact2 from './components/Contact2/Contact2';
import Experience from './components/Experience/Experience';
import Herosection from './components/Herosection/Herosection';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Project';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <About/>
      <Experience/>
      <Project/>
      <Contact2/>
    </div>
  );
}

export default App;
