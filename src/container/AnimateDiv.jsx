import React from "react";
import { motion } from "framer-motion";

const AnimateDiv = (props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: props.dir == "left" ? -100 : props.dir == "right" ? 100 : 0,
        y: props.dir == "up" ? 100 : props.dir == "down" ? -40 : 0,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimateDiv;
