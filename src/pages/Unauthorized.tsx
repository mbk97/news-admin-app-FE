import { Link } from "react-router-dom";
import logo from "../assets/images/admin-logo.png";
import notAllowed from "../assets/images/not-allowed.jpg";
import { CustomButton } from "../components/common/CustomButton";

const Unauthorized = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center   ">
        <img src={logo} alt="Logo" className="h-[120px] mx-auto" />
        <img src={notAllowed} alt="Unauthorized" className="w-1/2 mb-4" />
        <h1 className="text-2xl font-bold text-red-600">Unauthorized Access</h1>
        <p className="text-gray-600 mt-2">
          You do not have permission to view this page.
        </p>
      </div>
      <div className="grid place-items-center p-4 ">
        <Link to="/dashboard" className="mt-4">
          <CustomButton text="Return to the home page" className="w-[250px]" />
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;
