import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import catImage from '../assets/ChatGPT Image 6 nov. 2025, 02_22_28.png';

interface FinalLayerProps {
  onRestart: () => void;
}

function FinalLayer({ onRestart }: FinalLayerProps) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto px-6 text-center"
    >
      <div className="bg-white/40 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-pink-200/50">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl font-serif text-pink-900 mb-8"
          >
            My Soulmate
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl md:text-3xl text-pink-800 leading-relaxed mb-12"
          >
            No matter what happens, I'll always choose you — you're my soulmate.
          </motion.p>

          <AnimatePresence>
            {showPopup && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="mb-8"
              >
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-8 shadow-xl">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: 3,
                      ease: 'easeInOut',
                    }}
                    className="mb-6 flex justify-center"
                  >
                    <motion.img
                      src={catImage}
                      alt="Us together"
                      className="max-w-xs md:max-w-sm h-auto rounded-xl shadow-lg"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    />
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-3xl font-serif text-pink-900"
                  >
                    Forever yours ❤️
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={onRestart}
            initial={{ opacity: 0 }}
            animate={{ opacity: showPopup ? 1 : 0 }}
            transition={{ delay: 7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-10 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Replay the Gift
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FinalLayer;
