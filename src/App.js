import './App.css';
import About from './components/About';
import FilmsDemo from './components/FilmsDemo';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import News from './components/News';
import Contact from './components/Contact';
import FilmsDetail from './components/FilmsDetail';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
            <Route path="/" element={<FilmsDemo />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:id" element={<FilmsDetail />} />
          </Routes>
      <Footer/>
    </div>
  );
}

export default App;