import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home.jsx';

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <Home />
    </AnimatePresence>
  );
};

export default App;

