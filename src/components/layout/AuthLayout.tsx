import { ReactNode } from "react";
import logo from "../../assets/images/admin-logo.png";

interface IProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: IProps) => {
  return (
    <div className="login_container flex">
      <div className="left_login_wrapper hidden lg:flex  lg:w-[50%] h-screen  items-center text-white justify-center">
        <h1 className="text-[36px] font-semibold text-center">
          Naija Daily Blog <br /> Admin Dashboard
        </h1>
      </div>
      <div className="right_login_wrapper w-[100%] lg:w-[50%] flex items-center justify-center h-screen flex-col">
        <div className="lg:w-[50%] w-[80%] flex flex-col items-center justify-center bg-[]">
          <img
            src={logo}
            alt="Logo"
            className="h-[150px] object-cover object-center"
          />
        </div>
        <div className="lg:w-[100%] w-[100%]">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
