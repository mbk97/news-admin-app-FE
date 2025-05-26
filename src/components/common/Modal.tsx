import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement;
  width?: string;
}

export const Modal = ({ isOpen, onClose, children, width }: IProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "-100vh", opacity: 0 }} // Start off-screen
        animate={{ y: 0, opacity: 1 }} // Slide down
        exit={{ y: "-100vh", opacity: 1 }} // Slide back up
        transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
        className="bg-white rounded-lg shadow-lg p-6 w-[95vw] md:w-[600px] h-[auto] relative"
        style={{ width: width ? `${width}` : undefined }}
        onClick={(e) => e.stopPropagation()}
      >
        <MdClose
          onClick={onClose}
          size={25}
          className="absolute top-2 right-2 text-error cursor-pointer"
        />
        <div className="h-[100%]">{children}</div>
      </motion.div>
    </div>
  );
};
