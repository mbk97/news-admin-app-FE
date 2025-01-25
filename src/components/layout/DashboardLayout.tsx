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
      <Sidebar open={open} handleOpen={handleOpen} handleClose={handleClose} />
      <div className="w-[calc(100%-30%)] p-6">
        <div className="absolute block md:hidden right-4" onClick={handleOpen}>
          <IoMdMenu size={30} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
