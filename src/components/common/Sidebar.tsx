import { useState } from "react";
import { Drawer } from "@mui/material";

interface IProps {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const Sidebar = ({ open, handleOpen, handleClose }: IProps) => {
  return (
    <div>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: "20%",
            boxSizing: "border-box",
            backgroundColor: "#465FF1",
            color: "white",
          },
        }}
      >
        <h1>Hello</h1>
      </Drawer>

      {/* Sidebar for Mobile */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleClose}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: "60%", backgroundColor: "#465FF1" },
        }}
      >
        {/* {drawer}Mo */}
        Mobile
      </Drawer>
    </div>
  );
};

export default Sidebar;
