import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center">

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
        }}
        className="
          h-16
          w-16
          border-4
          border-indigo-500
          border-t-transparent
          rounded-full
        "
      />
    </div>
  );
};

export default Loader;