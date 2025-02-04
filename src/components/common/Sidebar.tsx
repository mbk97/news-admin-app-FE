import { Drawer } from "@mui/material";
import { sidebarData } from "../../utils/data";
import { ISidebarTypes } from "../../types";
import { NavLink } from "react-router-dom";
import { CiLogout } from "react-icons/ci";

interface IProps {
  open: boolean;
  handleClose: () => void;
}

const Sidebar = ({ open, handleClose }: IProps) => {
  return (
    <div>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: "20%",
            boxSizing: "border-box",
            backgroundColor: "#465FF1",
            color: "white",
          },
        }}
      >
        <nav className="p-8">
          <h1>LOGO</h1>

          <div className="my-[40px] border-b pb-5">
            {sidebarData.map(({ id, title, Icon, link }: ISidebarTypes) => {
              return (
                <NavLink
                  to={link}
                  key={id}
                  end={link === "/"}
                  className={({ isActive }) =>
                    isActive
                      ? "flex h-[50px] items-center gap-3 px-1 mb-2 bg-[#F8F9FE] rounded font-semibold text-primary"
                      : "flex h-[50px] items-center gap-3 px-1 mb-2 text-white"
                  }
                >
                  <div
                    className={`flex  h-[50px] items-center gap-3 px-1 mb-2 `}
                  >
                    <Icon size={20} />
                    <p>{title}</p>
                  </div>
                </NavLink>
              );
            })}
          </div>

          <div className="mt-[50px]">
            <div
              className={`flex  h-[50px] items-center gap-3 px-1 mb-2 text-white cursor-pointer`}
            >
              <CiLogout size={20} />
              <p>Sign Out</p>
            </div>
          </div>
        </nav>
      </Drawer>

      {/* Sidebar for Mobile */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleClose}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: "60%", backgroundColor: "#465FF1" },
        }}
      >
        <nav className="p-2">
          <h1>LOGO</h1>

          <div className="my-[40px] border-b pb-5">
            {sidebarData.map(({ id, title, Icon, link }: ISidebarTypes) => {
              return (
                <NavLink
                  to={link}
                  key={id}
                  end={link === "/"}
                  className={({ isActive }) =>
                    isActive
                      ? "flex h-[50px] items-center gap-3 px-1 mb-2 bg-[#F8F9FE] rounded font-semibold text-primary"
                      : "flex h-[50px] items-center gap-3 px-1 mb-2 text-white"
                  }
                >
                  <div
                    className={`flex  h-[50px] items-center gap-3 px-1 mb-2 `}
                  >
                    <Icon size={18} />
                    <p className="text-[14px]">{title}</p>
                  </div>
                </NavLink>
              );
            })}
          </div>

          <div className="mt-[50px]">
            <div
              className={`flex  h-[50px] items-center gap-3 px-1 mb-2 text-white cursor-pointer`}
            >
              <CiLogout size={20} />
              <p>Sign Out</p>
            </div>
          </div>
        </nav>
      </Drawer>
    </div>
  );
};

export default Sidebar;
