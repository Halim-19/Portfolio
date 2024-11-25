import { AnimatePresence, motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

const SideNav = () => {
  return (
    <nav className="fixed text-white bottom-0 left-1 w-full md:w-fit p-4 flex flex-row md:flex-col justify-center items-center gap-2">
      <AnimatePresence>
        <NavItem
          link="https://x.com/bensalemHalim19"
          color="#1DA1F2"
          delay={0.5}
        >
          <FaTwitter className="text-2xl sm:text-2xl" />
        </NavItem>
        <NavItem
          link="https://www.linkedin.com/in/bensalem-abdelhalim"
          color="#0A66C2"
          delay={0.6}
        >
          <FaLinkedin className="text-2xl sm:text-2xl" />
        </NavItem>
        <NavItem
          link="https://www.facebook.com/abdelhalim.bensalem.50"
          color="#1877F2"
          delay={0.7}
        >
          <FaFacebook className="text-2xl sm:text-2xl" />
        </NavItem>
        <NavItem
          link="https://instagram.com/bensalem_halim"
          color="#E4405F"
          delay={0.8}
        >
          <FaInstagram className="text-2xl sm:text-2xl" />
        </NavItem>
        <NavItem
          link="https://tiktok.com/@bensalem_halim?_t=8rRtj7cYmoi&_r=1"
          color="#010101"
          delay={0.9}
        >
          <FaTiktok className="text-xl sm:text-2xl" />
        </NavItem>
      </AnimatePresence>
    </nav>
  );
};

const NavItem = ({
  children,
  link,
  color,
  delay,
}: {
  children: JSX.Element;
  link: string;
  color: string;
  delay: number;
}) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-1 text-xl rounded-md transition-colors relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ color: "white" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      exit={{ opacity: 0, y: 20 }}
    >
      <span
        className="block relative z-10"
        style={{ transition: "color 0.3s ease" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = color)}
        onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
      >
        {children}
      </span>
      <AnimatePresence>
        <motion.span
          className="absolute inset-0 rounded-md z-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        ></motion.span>
      </AnimatePresence>
    </motion.a>
  );
};

export default SideNav;
