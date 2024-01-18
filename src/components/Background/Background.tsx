import "./BackgroundStyle.scss";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="background"
    ></motion.div>
  );
};

export default Background;
