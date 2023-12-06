import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "react-bootstrap-icons";

function Faq(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const containerVariants = {
    open: { height: "auto" },
    closed: { height: 0 },
  };

  const contentVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <div className="w-full p-3 outline-slate-800 overflow-hidden">
      <div className="container mx-auto">
        <motion.div className="cursor-pointer" onClick={toggleOpen}>
          <motion.h2 className="text-xl font-bold flex justify-between items-center max-w-6xl mx-auto ">
            <span>{props.question}</span> <Plus className="inline-block ml-2" />
          </motion.h2>
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={containerVariants}
            className={`mt-2 max-w-5xl mx-auto ${isOpen ? "block" : "hidden"}`}
            style={{ transition: "height 0.3s ease" }}>
            <motion.p variants={contentVariants} className="text-gray-800">
              {props.answer}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );

  return (
    <div className="p-4">
      <motion.div layout className="cursor-pointer">
        <motion.h2 layout className="text-xl font-bold">
          {props.question}
        </motion.h2>
        <motion.div
          layout
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: isOpen ? 10 : 0, opacity: isOpen ? 1 : 0 }}
          className={`mt-2 ${isOpen ? "block" : "hidden"}`}
          style={{ transition: "all 0.3s ease" }}>
          <p className="text-gray-700">{props.answer}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Faq;
