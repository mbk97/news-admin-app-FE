import { Dialog, DialogTitle, IconButton } from "@mui/material";
import { Breakpoint } from "@mui/system";
import { MdOutlineClose } from "react-icons/md";

interface IModalProps {
  open: boolean;
  handleClose: () => void;
  children: any;
  dialogTitle?: string;
  modalType?: string;
  className?: string;
  type?: string;
  width?: Breakpoint | false; // Use MUI's Breakpoint type
}

const CustomModal = ({
  open,
  handleClose,
  children,
  dialogTitle,
  type,
  width = "lg",
  modalType,
  className, // Set a default width (you can change this to fit your needs)
}: IModalProps) => {
  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth={width}
      onClose={handleClose}
      sx={{
        border: "",
        borderRadius: modalType ? "12px" : "",
      }}
    >
      <DialogTitle
        className="flex p-0  items-center border-0 "
        style={{
          justifyContent: modalType ? "flex-end" : "space-between",
        }}
      >
        {modalType ? null : (
          <p className="font-semibold text-authHeader text-primary">
            {dialogTitle}
          </p>
        )}
        <IconButton onClick={handleClose}>
          <MdOutlineClose className="text-[#9CA3AF]" />
        </IconButton>
      </DialogTitle>
      <div
        className={`${className}`}
        style={{
          marginTop: modalType ? "-50px" : "",
        }}
      >
        {children}
      </div>
    </Dialog>
  );
};

export default CustomModal;
