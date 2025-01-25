import { ImSpinner9 } from "react-icons/im";
import { motion } from "framer-motion";

interface IBtnProps {
  text: string;
  type?: "button" | "reset" | "submit"; // Make type prop more restrictive
  className?: string;
  handleClick?: () => void;
  Icon?: any;
  disabled?: boolean;
  iconStyle?: string;
  isLoading?: boolean;
  pageBtn?: string;
  btnStyle?: React.CSSProperties;
}

const CustomButton = ({
  text,
  type = "submit",
  className,
  handleClick,
  Icon,
  disabled,
  iconStyle,
  isLoading,
  pageBtn,
  btnStyle,
}: IBtnProps) => {
  return (
    <motion.button
      type={type}
      className={` text-white ${className} cursor-pointer  rounded-[10px] w-[100%] font-semibold flex justify-center items-center gap-3 h-[45px] ${
        isLoading ? "cursor-not-allowed bg-primary" : "bg-primary"
      } ${disabled ? "opacity-40" : ""}`}
      onClick={handleClick}
      disabled={disabled || isLoading}
      style={{
        cursor: disabled ? "not-allowed" : "pointer",
        ...btnStyle,
      }}
      whileHover={{
        scale: 1.02,
      }}
    >
      {isLoading && pageBtn !== "login" && (
        <ImSpinner9 className="animate-spin" />
      )}
      {isLoading && pageBtn === "login" ? (
        <div className="flex gap-2 items-center">
          <ImSpinner9 className="animate-spin" />
          <span>Logging you in</span>
        </div>
      ) : (
        <>
          {!isLoading && Icon && <Icon size={20} className={`${iconStyle} `} />}
          <span className={`${isLoading ? "hidden" : "block"}`}>{text}</span>
        </>
      )}
    </motion.button>
  );
};

export { CustomButton };
