import { ReactNode, useState } from "react";
import Sidebar from "../common/Sidebar";
import { IoMdMenu } from "react-icons/io";

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

  return (
    <div className="flex relative">
      <div className="w-[0%] lg:w-[20%]">
        <Sidebar open={open} handleClose={handleClose} />
      </div>
      <div className="p-4 md:p-10 lg:w-[80%] w-[100%]">
        <div
          className="absolute block lg:hidden right-3 top-1"
          onClick={handleOpen}
        >
          <IoMdMenu size={30} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
