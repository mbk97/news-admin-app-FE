import { MdCancel } from "react-icons/md";
import { CustomButton } from "../../common/CustomButton";
import { IRoles, IUser } from "../../../types";
import { useUserManagement } from "../../../services/roles/role";
import { ImSpinner10 } from "react-icons/im";

interface IProps {
  roleDetails: IRoles;
}

const RoleDetails = ({ roleDetails }: IProps) => {
  const { getAllUserUnderRole } = useUserManagement({
    roleName: roleDetails?.roleName,
  });

  const { data, isPending } = getAllUserUnderRole;
  const assignedUsers = data?.data.data;
  console.log(assignedUsers, "ASSIGNED USERS");

  return (
    <div>
      <section className="mt-[30px]">
        <div className="flex gap-2 items-center">
          <h3 className="font-semibold">Role Name:</h3>
          <p>{roleDetails?.roleName}</p>
        </div>

        <section className="flex justify-between flex-col  h-[85vh]">
          <div className="mt-[30px]">
            <div className="flex items-center gap-3">
              <h3 className="font-semibold mb-3">Assigned Users:</h3>
              {isPending ? (
                <ImSpinner10 className="animate-spin text-primary" size={20} />
              ) : null}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {assignedUsers?.length !== 0 ? (
                assignedUsers?.map((user: IUser) => {
                  return (
                    <div className="bg-white p-2 h-[38px] w-auto shadow-md border flex justify-between gap-1 ">
                      <p className="text-primary text-[12px] font-semibold">
                        {user.email}
                      </p>
                      <MdCancel className="text-error cursor-pointer" />
                    </div>
                  );
                })
              ) : (
                <p className="text-error">No users assigned</p>
              )}
            </div>
          </div>

          <div className="mt-[30px]">
            <p className="text-error text-[14px] font-semibold mb-4">
              Warning &#9888;: Deleting a role will permanently remove all users
              assigned to it.
            </p>
            <CustomButton text="Delete Role" className="delete_btn" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default RoleDetails;
