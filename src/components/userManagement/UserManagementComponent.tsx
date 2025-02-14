import { IconButton, Tooltip } from "@mui/material";
import { CustomButton } from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import HeaderText from "../common/HeaderText";
import DashboardLayout from "../layout/DashboardLayout";
import { FaBan } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import { Modal } from "../common/Modal";
import CreateUser from "./CreateUser";
import BanUser from "./BanUser";
import CustomTable from "../common/CustomTable";
import { userTableData } from "../../utils/data";

const UserManagementComponent = () => {
  const [openBanModal, setOpenBanModal] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({});

  const handleOpenCreate = () => {
    setOpenCreate(true);
  };
  const handleCloseCreate = () => {
    setOpenCreate(false);
  };

  const handleOpenBanModal = (data: any) => {
    setOpenBanModal(true);
    setUserData(data);
  };
  const handleCloseBanModal = () => {
    setOpenBanModal(false);
  };
  const handleOpenEditModal = (data: any) => {
    setOpenEdit(true);
    setUserData(data);
    setIsEditing(true);
  };
  const handleCloseEditModal = () => {
    setOpenEdit(false);
    setIsEditing(false);
  };

  const column = [
    {
      Header: "Full Name",
      accessor: "fullName",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Role",
      accessor: "role",
    },
    {
      Header: "Last Activity Date",
      accessor: "lastSeen",
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: (value: any) => (
        <div className="flex gap-2 items-center">
          <IconButton
            onClick={() => {
              handleOpenBanModal(value.cell.row.original);
            }}
          >
            <Tooltip title="Edit User" arrow>
              <FaBan className="danger" />
            </Tooltip>
          </IconButton>
          <IconButton
            onClick={() => {
              handleOpenEditModal(value.cell.row.original);
            }}
          >
            <Tooltip title="Edit User" arrow>
              <MdEdit className="primary" />
            </Tooltip>
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <HeaderText text="Manage Users" />
          <CustomButton
            text="Create User"
            className="w-[120px] h-[40px]"
            handleClick={handleOpenCreate}
          />
        </div>
      </div>
      <section className="mt-8  bg-white rounded-md p-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <CustomInput
          type="text"
          placeholder="Search by name"
          label="Full Name"
          value=""
          name=""
          handleChange={() => {}}
        />
        <CustomInput
          type="text"
          placeholder="Search by role"
          label="Role"
          value=""
          name=""
          handleChange={() => {}}
        />
        <CustomButton
          text="Search Users"
          className="w-auto h-[40px] mt-[30px]"
          // handleClick={handleOpen}
        />
      </section>

      <section className="mt-8  bg-white rounded-md p-5">
        <HeaderText text="Users" />
        <CustomTable data={userTableData} columns={column} />
      </section>
      <div>
        <Modal
          isOpen={isEditing ? openEdit : openCreate}
          onClose={isEditing ? handleCloseEditModal : handleCloseCreate}
        >
          <CreateUser
            handleClose={isEditing ? handleCloseEditModal : handleCloseCreate}
            isEditing={isEditing}
          />
        </Modal>
        <Modal isOpen={openBanModal} onClose={handleCloseBanModal}>
          <BanUser
            handleCloseBanModal={handleCloseBanModal}
            userData={userData}
          />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default UserManagementComponent;
