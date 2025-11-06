import { motion } from 'framer-motion';
import { useState } from 'react';

interface LayerThreeProps {
  onNext: () => void;
}

function LayerThree({ onNext }: LayerThreeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto px-6 text-center"
    >
      <div className="bg-white/40 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-pink-200/50">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-pink-900 mb-8">
            You Mean Everything
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-pink-800 leading-relaxed mb-12"
          >
            You mean so much to me. You're my calm, my chaos, my muse.
          </motion.p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: 'spring' }}
            className="mb-12"
          >
            <motion.div
              animate={{
                scale: isHovered ? 1.3 : 1,
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="inline-block cursor-pointer"
            >
              <svg width="120" height="120" viewBox="0 0 24 24" className="mx-auto">
                <motion.path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  fill="#ec4899"
                  animate={{
                    fill: isHovered ? '#f43f5e' : '#ec4899',
                  }}
                />
              </svg>
            </motion.div>
          </motion.div>

          <motion.button
            onClick={onNext}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-10 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Next
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LayerThree;
