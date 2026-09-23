import { motion } from "framer-motion";

const Button = ({
  href,
  children,
  variant = "primary",
}) => {
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={href}
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-6
        py-3
        text-sm
        font-semibold
        transition-all
        duration-300

        ${
          isPrimary
            ? "bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/20 hover:from-violet-400 hover:to-blue-400 hover:shadow-violet-500/40"
            : "border border-white/10 bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.08]"
        }
      `}
    >
      {children}
    </motion.a>
  );
};

export default Button;