import React from 'react';
import { motion, MotionStyle } from 'framer-motion';

const style: MotionStyle = {
  backgroundColor: 'blue',
  width: 160,
  height: 80,
  fontSize: 24,
  color: 'white',
  fontWeight: 700,
  border: 'none',
  borderRadius: 8,
};

export default function Button() {
  return <motion.button style={style}>hello</motion.button>;
}