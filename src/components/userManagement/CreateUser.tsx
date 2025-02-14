interface IProps {
  handleClose: () => void;
  isEditing: boolean;
}

const CreateUser = ({ handleClose, isEditing }: IProps) => {
  return <div>{isEditing ? "Edit User" : "Create User"}</div>;
};

export default CreateUser;
