import { ReactNode, useState } from "react";
import Sidebar from "../common/Sidebar";
import { IoMdMenu, IoMdNotifications } from "react-icons/io";
import { getUserDetails } from "../../utils/saveData";

interface IProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const user = getUserDetails("user_data");

  return (
    <div className="flex relative">
      <div className="w-[0%] lg:w-[20%]">
        <Sidebar open={open} handleClose={handleClose} />
      </div>
      <div className="lg:w-[80%] w-[100%]">
        <div
          className="absolute block lg:hidden right-3 top-1"
          onClick={handleOpen}
        >
          <IoMdMenu size={30} />
        </div>
        <div className="bg-[#ffffff] shadow-md w-auto h-[70px] p-4 md:p-10 flex items-center gap-10 md:gap-0 md:justify-between">
          <h1 className="font-bold">Welcome, {user?.fullname}</h1>
          <div className="flex items-center gap-4">
            <div className="border-[1.4px] p-[0.90px] rounded-sm border-[#61d261] text-[#61d261]">
              <p className="text-[14px] font-semibold">{user?.role}</p>
            </div>
            <div className="relative">
              <IoMdNotifications size={30} />
              <div className="h-[7px] absolute top-1 right-2 w-[7px] bg-[red] rounded-[50%]"></div>
            </div>
          </div>
        </div>
        <div className="p-4 md:p-10 ">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
