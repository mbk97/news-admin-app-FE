import { CustomButton } from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import HeaderText from "../common/HeaderText";

const ManagePassword = () => {
  return (
    <div>
      <HeaderText text="Manage Password" />
      <section className="mt-[20px]">
        <div className="lg:w-[60%] md:w-[70%] w-[100%]">
          <CustomInput
            type="text"
            placeholder="Email Address"
            handleChange={() => {}}
            value=""
            name=""
            label="Email Address"
            // className="w-[350px]"
          />
        </div>
        <div className="lg:w-[60%] md:w-[70%] w-[100%]  mt-5">
          <CustomInput
            type="text"
            placeholder="Current Password"
            handleChange={() => {}}
            value=""
            name=""
            label="Current Password"
            // className="w-[350px]"
          />
        </div>
        <div className="lg:w-[60%] md:w-[70%] w-[100%] mt-5">
          <CustomInput
            type="text"
            placeholder="New Password"
            handleChange={() => {}}
            value=""
            name=""
            label="New Password"
            // className="w-[350px]"
          />
        </div>
        <div className="lg:w-[60%] md:w-[70%] w-[100%] mt-8">
          <CustomButton
            text="Change Password"
            handleClick={() => {}}
            className=""
          />
        </div>
      </section>
    </div>
  );
};

export default ManagePassword;
