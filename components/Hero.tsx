"use client";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description?: string;
};

const Hero = ({ title, description }: Props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={itemVariants}
        className="py-4 font-bold text-white md:text-4xl text-xl"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          variants={itemVariants}
          className="xl:text-[1.1rem] leading-6 text-white line-clamp-2"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Hero;
