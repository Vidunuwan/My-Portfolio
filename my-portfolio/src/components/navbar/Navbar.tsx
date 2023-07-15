import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  return (
    <>
      <div className="d-flex flex-row-reverse mt-2">
        <motion.div
          className="p-2"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
        >
          <h4>Contact</h4>
        </motion.div>
        <motion.div
          className="p-2"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
        >
          <h4>About</h4>
        </motion.div>
        <motion.div
          className="p-2"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
        >
          <h4>Work</h4>
        </motion.div>
        <motion.div
          className="p-2"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
        >
          <h4>Start</h4>
        </motion.div>
      </div>
    </>
  );
}
export default Navbar;
