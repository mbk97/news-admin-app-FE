import { Dialog, DialogTitle, IconButton } from "@mui/material";
import { Breakpoint } from "@mui/system";
import { MdOutlineClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

interface IModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  dialogTitle?: string;
  modalType?: string;
  className?: string;
  width?: Breakpoint | false;
}

const CustomModal = ({
  open,
  handleClose,
  children,
  dialogTitle,
  width = "lg",
  modalType,
  className,
}: IModalProps) => {
  return (
    <>
      {open && (
        <Dialog
          open={open}
          fullWidth
          maxWidth={width}
          onClose={handleClose}
          sx={{
            borderRadius: modalType ? "12px" : "",
          }}
        >
          <div>
            <DialogTitle
              className="flex p-0 items-center border-0"
              style={{
                justifyContent: modalType ? "flex-end" : "space-between",
              }}
            >
              {!modalType && (
                <p className="font-semibold text-authHeader text-primary">
                  {dialogTitle}
                </p>
              )}
              <IconButton onClick={handleClose}>
                <MdOutlineClose className="text-[#9CA3AF]" />
              </IconButton>
            </DialogTitle>
            <div className={`${className} px-6 pb-10`}>{children}</div>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default CustomModal;
