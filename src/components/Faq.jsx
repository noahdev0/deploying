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
            <span>{props.question}</span>{" "}
            <Plus
              className="inline-block ml-2 text-2xl"
              style={{
                transform: `rotate(${isOpen ? "225deg" : "180deg"})`,
                transition: "transform 0.3s ease",
              }}
            />
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
}

export default Faq;
