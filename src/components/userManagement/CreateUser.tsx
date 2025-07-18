import {
  ErrorMessage,
  Field,
  FieldProps,
  Form,
  Formik,
  FormikProps,
} from "formik";
import CustomInput from "../common/CustomInput";
import { CustomButton } from "../common/CustomButton";
import HeaderText from "../common/HeaderText";
import { useUserManagement } from "../../services/roles/role";
import { registerUserSchema } from "../../utils/schema";
import { IRoles, IUser } from "../../types";
import CustomSelect from "../common/CustomSelect";

interface ICreateUsers {
  fullname: string;
  email: string;
  roleName: string;
}

interface IProps {
  handleClose: () => void;
  isEditing: boolean;
  userData: IUser;
  rolesData: IRoles[];
}

const CreateUser = ({
  handleClose,
  isEditing,
  userData,
  rolesData,
}: IProps) => {
  const { registerUserMutation, editUserMutation } = useUserManagement({
    handleClose,
  });
  const { isPending, mutate } = registerUserMutation;
  const { isPending: isEditingPending, mutate: editUser } = editUserMutation;

  const handleSubmit = (values: ICreateUsers) => {
    const payload = {
      id: userData?._id,
      fullname: values.fullname,
      roleName: values.roleName,
    };
    if (isEditing) {
      editUser(payload);
    } else {
      mutate(values);
    }
  };

  console.log("Roles Data", rolesData);

  return (
    <div>
      <HeaderText text={isEditing ? "Edit User" : "Create User"} />
      <section className="mt-[20px]">
        <Formik
          initialValues={{
            fullname: isEditing ? userData.fullname : "",
            email: isEditing ? userData.email : "",
            roleName: isEditing ? userData.roleName : "",
          }}
          validationSchema={registerUserSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange }: FormikProps<ICreateUsers>) => (
            <Form>
              <div className=" w-[100%]">
                <Field name="fullname">
                  {({ field }: FieldProps) => (
                    <div className="relative mb-4">
                      <CustomInput
                        labelStyle="text-sm font-medium"
                        type="text"
                        name={field.name}
                        value={field.value}
                        handleChange={handleChange}
                        placeholder="Enter your Full Name"
                        label="Full Name"
                      />
                    </div>
                  )}
                </Field>
                <ErrorMessage
                  name="fullname"
                  component="div"
                  className="text-error text-sm"
                />
              </div>
              <div className=" w-[100%]  mt-5">
                <Field name="email">
                  {({ field }: FieldProps) => (
                    <div className="relative mb-4">
                      <CustomInput
                        labelStyle="text-sm font-medium"
                        type="text"
                        name={field.name}
                        value={field.value}
                        handleChange={handleChange}
                        placeholder="Enter Your Email"
                        label="Email"
                        disabled={isEditing}
                      />
                    </div>
                  )}
                </Field>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-error text-sm"
                />
              </div>
              <div className=" w-[100%] mt-5">
                <Field name="roleName">
                  {({ field }: FieldProps) => (
                    <div className="relative mb-4">
                      <CustomSelect
                        options={rolesData}
                        label={"Role"}
                        value={field.value}
                        name={field.name}
                        handleChange={handleChange}
                      />
                    </div>
                  )}
                </Field>
                <ErrorMessage
                  name="roleName"
                  component="div"
                  className="text-error text-sm"
                />
              </div>
              <div className=" w-[100%] mt-8">
                <CustomButton
                  text={isEditing ? "Edit User" : "Register User"}
                  isLoading={isPending || isEditingPending}
                  disabled={isPending}
                />
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
};

export default CreateUser;
