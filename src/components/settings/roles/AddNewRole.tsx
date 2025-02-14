import CustomInput from "../../common/CustomInput";
import { CustomButton } from "../../common/CustomButton";

const AddNewRole = () => {
  const roles_ = [
    {
      id: 1,
      text: "Admin",
    },
    {
      id: 2,
      text: "Author",
    },
    {
      id: 3,
      text: "Editor",
    },
  ];
  return (
    <div>
      <p className="font-medium my-2">Already Existing Roles</p>
      <div className="flex gap-3 mb-5">
        {roles_.map((role) => {
          return (
            <div
              key={role.id}
              className="text-primary flex items-center justify-center font-semibold h-[30px] w-auto shadow-md border p-2 bg-white"
            >
              <p>{role.text}</p>
            </div>
          );
        })}
      </div>
      <div className="w-[100%]">
        <CustomInput
          type="text"
          name=""
          value=""
          label="Role Name"
          placeholder="Enter Role Name"
          handleChange={() => {}}
        />
      </div>
      <div className="w-[100%] mt-7">
        <CustomButton type="submit" handleClick={() => {}} text="Create Role" />
      </div>
    </div>
  );
};

export default AddNewRole;
