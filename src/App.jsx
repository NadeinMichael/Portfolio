import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/main.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactsPage from './pages/ContactsPage';
import ProjectPage from './pages/ProjectPage';
import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/project/:id' element={<ProjectPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
