import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Textspan = ({ children }) => {
  const controls = useAnimation();
  const [isplaying, setisplaying] = useState(false);

  const rubberBand = () => {
    controls.start({
      scale: [
        1, 
        1.4, 
        0.75, 
        1.25, 
        0.9, 
        1
      ],
      transition: {
        duration: 0.9,
        times: [0, 0.4, 0.7, 0.6, 0.9, 1]
      }
    });
    setisplaying(true);
  };

  return (
    <motion.span 
      animate={controls}
      onMouseOver={() => {
        if (!isplaying) rubberBand();
      }}
      onAnimationComplete={() => setisplaying(false)}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
};

export default Textspan;
