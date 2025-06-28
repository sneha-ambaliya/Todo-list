import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
     
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[60]"
        animate={{ x: position.x - 4, y: position.y - 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

     
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 border-2 border-pink-500 rounded-full pointer-events-none z-[50]"
        animate={{ x: position.x - 20, y: position.y - 20 }}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
      />

      
      <motion.div
        className="fixed top-0 left-0 w-7 h-7 border-2 border-blue-400 rounded-full pointer-events-none z-[40]"
        animate={{ x: position.x - 32, y: position.y - 32 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      />
      
      
    </>
  );
};

export default CustomCursor;