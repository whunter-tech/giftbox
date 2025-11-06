import { motion } from 'framer-motion';

interface LayerOneProps {
  onNext: () => void;
}

function LayerOne({ onNext }: LayerOneProps) {
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
            I'm Sorry...
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-pink-800 leading-relaxed mb-8"
          >
            I know I've disappointed you sometimes... I acted dumb, and for that, I'm truly sorry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="space-y-4"
          >
            <motion.button
              onClick={onNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-10 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Next
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LayerOne;
