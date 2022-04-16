import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Skill from './pages/Skill'
import Example from './pages/Example';
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



function App() {
  return (
    <>
    <Router>
    <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/example' element={<Example />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
