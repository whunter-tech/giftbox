import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import LayerOne from './components/LayerOne';
import LayerTwo from './components/LayerTwo';
import LayerThree from './components/LayerThree';
import FinalLayer from './components/FinalLayer';
import SakuraPetals from './components/SakuraPetals';

function App() {
  const [currentLayer, setCurrentLayer] = useState(0);

  const nextLayer = () => {
    setCurrentLayer(prev => prev + 1);
  };

  const restart = () => {
    setCurrentLayer(0);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <SakuraPetals />

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <AnimatePresence mode="wait">
          {currentLayer === 0 && (
            <LandingPage key="landing" onNext={nextLayer} />
          )}
          {currentLayer === 1 && (
            <LayerOne key="layer1" onNext={nextLayer} />
          )}
          {currentLayer === 2 && (
            <LayerTwo key="layer2" onNext={nextLayer} />
          )}
          {currentLayer === 3 && (
            <LayerThree key="layer3" onNext={nextLayer} />
          )}
          {currentLayer === 4 && (
            <FinalLayer key="final" onRestart={restart} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
