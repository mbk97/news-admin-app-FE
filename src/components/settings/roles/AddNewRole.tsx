import CustomInput from "../../common/CustomInput";
import { CustomButton } from "../../common/CustomButton";
import { useUserManagement } from "../../../services/roles/role";
import { useState } from "react";
import { useToast } from "../../../hooks/useToast";

interface IProps {
  handleClose: () => void;
}

const AddNewRole = ({ handleClose }: IProps) => {
  const { toastError } = useToast();
  const [roleName, setRoleName] = useState("");
  const { createUserRoleMutation } = useUserManagement({ handleClose });
  const { mutate: createUserRole, isPending } = createUserRoleMutation;

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

  const handleSubmit = () => {
    if (!roleName) {
      toastError("Role Name is required");
      return;
    }
    createUserRole({ roleName });
  };
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
          name="roleName"
          value={roleName}
          label="Role Name"
          placeholder="Enter Role Name"
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRoleName(e.target.value);
          }}
        />
      </div>
      <div className="w-[100%] mt-7">
        <CustomButton
          type="submit"
          handleClick={handleSubmit}
          text="Create Role"
          isLoading={isPending}
          disabled={isPending || !roleName}
        />
      </div>
    </div>
  );
};

export default AddNewRole;
