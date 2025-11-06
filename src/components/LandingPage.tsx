import { motion } from 'framer-motion';

interface LandingPageProps {
  onNext: () => void;
}

function LandingPage({ onNext }: LandingPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="text-center px-6"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-5xl md:text-7xl font-serif text-pink-800 mb-8"
        style={{ fontFamily: 'serif' }}
      >
        A Gift from My Heart 💌
      </motion.h1>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
        className="mb-12"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotateZ: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg width="120" height="120" viewBox="0 0 100 100" className="mx-auto">
            <defs>
              <linearGradient id="giftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#db2777', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect x="20" y="35" width="60" height="50" rx="4" fill="url(#giftGradient)" />
            <rect x="45" y="15" width="10" height="70" fill="url(#ribbonGradient)" />
            <rect x="15" y="43" width="70" height="8" fill="url(#ribbonGradient)" />
            <circle cx="50" cy="30" r="8" fill="#ec4899" />
            <circle cx="50" cy="30" r="5" fill="#fca5a5" />
          </svg>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={onNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-12 py-4 rounded-full text-xl font-medium shadow-lg hover:shadow-xl transition-all"
      >
        Open the Box 🎁
      </motion.button>
    </motion.div>
  );
}

export default LandingPage;
