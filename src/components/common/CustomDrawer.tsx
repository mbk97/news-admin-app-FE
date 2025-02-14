import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import { MdClose } from "react-icons/md";

interface IProps {
  open: boolean;
  handleClose: () => void;
  children: any;
  drawerTitle: string;
}

const CustomDrawer = ({ open, handleClose, children, drawerTitle }: IProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const drawerWidth = isMobile ? "100vw" : 400;
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      anchor="right"
      style={{ width: drawerWidth }}
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h6 className="text-[18px] font-semibold text-primary">
            {drawerTitle}
          </h6>
          <MdClose
            className="text-error cursor-pointer"
            onClick={handleClose}
            size={25}
          />
        </div>
        <div className="md:w-[400px] w-[100vw]">{children}</div>
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
