import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import Causes from './pages/Causes';
import About from './pages/About';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for the beautiful splash screen/skeleton
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;
