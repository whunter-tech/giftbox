import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LayerTwoProps {
  onNext: () => void;
}

interface Heart {
  id: number;
  x: number;
  delay: number;
}

function LayerTwo({ onNext }: LayerTwoProps) {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: 20 + Math.random() * 60,
      delay: Math.random() * 2,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto px-6 text-center relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-3xl"
            style={{ left: `${heart.x}%`, bottom: '-5%' }}
            animate={{
              y: [0, -600],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 5,
              delay: heart.delay,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <div className="bg-white/40 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-pink-200/50 relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-pink-900 mb-8">
            I Missed You So Much
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-pink-800 leading-relaxed mb-8"
          >
            These two days without you felt endless. I missed your voice, your warmth, your presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="bg-pink-100/50 rounded-2xl p-6 mb-8"
          >
            <p className="text-3xl font-serif text-pink-900 mb-2">
              君がいないと、世界が少し寂しい。
            </p>
            <p className="text-lg text-pink-700 italic">
              The world feels a bit lonelier without you.
            </p>
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

export default LayerTwo;
