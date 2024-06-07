
import './App.css';
import { About } from './component/About';
import Footer from './component/Footer';
import Home from './component/Home';
import Skils from './component/Skils';
import { Project } from './component/Project';

function App() {
  return (
  <div className='body'>
  <Home/>
  <About/>
  <Skils/>
  <Project/>
  <Footer/>
  </div>
  );
}

export default App;
