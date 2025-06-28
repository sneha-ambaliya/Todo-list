import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WrapOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="relative h-screen overflow-hidden bg-gray-900 text-white">
      <button
        onClick={() => setShowOverlay(!showOverlay)}
        className="z-10 px-6 py-3 bg-pink-500 rounded-md absolute top-10 left-10"
      >
        Toggle Overlay
      </button>

      {showOverlay && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <h1 className="text-3xl font-bold">Wrapped Overlay ✨</h1>
        </motion.div>
      )}
    </div>
  );
};

export default WrapOverlay;
