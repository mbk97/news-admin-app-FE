import { useState } from "react";
import { CustomButton } from "../../common/CustomButton";
import HeaderText from "../../common/HeaderText";
import { Modal } from "../../common/Modal";
import AddNewRole from "./AddNewRole";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import CustomDrawer from "../../common/CustomDrawer";
import RoleDetails from "./RoleDetails";
import { useUserManagement } from "../../../services/roles/role";
import { IRoles } from "../../../types";

const ManageRoles = () => {
  const [open, setOpen] = useState(false);
  const [openViewRoleDetails, setOpenViewRoleDetails] = useState(false);
  const [roleDetails, setRoleDetails] = useState<IRoles>();
  const { getRoles } = useUserManagement({});
  const { data, isPending } = getRoles;

  const handleOpenAddRole = () => {
    setOpen(true);
  };
  const handleCloseAddRole = () => {
    setOpen(false);
  };
  const handleOpenViewRoleDetails = (data: IRoles) => {
    setRoleDetails(data);
    setOpenViewRoleDetails(true);
  };
  const handleCloseViewRoleDetails = () => {
    setOpenViewRoleDetails(false);
  };

  const rolesData = data?.data?.data;
  console.log(rolesData);

  return (
    <div>
      <section className="flex justify-between items-center">
        <HeaderText text="Role Management" />

        <CustomButton
          text="Add New Role"
          handleClick={handleOpenAddRole}
          className="w-[150px]"
        />
      </section>
      <section className="mt-[20px]">
        <h5 className="font-semibold my-4">Available Roles</h5>
        {isPending ? (
          <h1>Loading....</h1>
        ) : (
          rolesData.map((role: IRoles) => {
            return (
              <div
                className="h-[48px] flex items-center justify-between bg-white shadow-md rounded-md p-2 mb-[20px] w-[100%] lg:w-[65%] border"
                key={role._id}
              >
                <div>
                  <p className=" font-medium">{role.roleName}</p>
                </div>
                <div className="flex gap-2">
                  <IoMdEye
                    className="text-primary cursor-pointer"
                    onClick={() => {
                      handleOpenViewRoleDetails(role);
                    }}
                  />
                  <MdDelete className="text-error cursor-pointer" />
                </div>
              </div>
            );
          })
        )}
      </section>

      <Modal isOpen={open} onClose={handleCloseAddRole}>
        <AddNewRole />
      </Modal>

      <CustomDrawer
        open={openViewRoleDetails}
        handleClose={handleCloseViewRoleDetails}
        drawerTitle="View Role Details"
      >
        <RoleDetails roleDetails={roleDetails!} />
      </CustomDrawer>
    </div>
  );
};

export default ManageRoles;
