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

interface ICreateUsers {
  fullname: string;
  email: string;
  roleName: string;
}

interface IProps {
  handleClose: () => void;
  isEditing: boolean;
}

const CreateUser = ({ handleClose, isEditing }: IProps) => {
  const { registerUserMutation } = useUserManagement({ handleClose });
  const { isPending, mutate } = registerUserMutation;

  const userData = {
    fullname: "",
    email: "",
    roleName: "",
  };

  const handleSubmit = (values: ICreateUsers) => {
    mutate(values);
  };

  console.log(handleClose);
  return (
    <div>
      <HeaderText text={isEditing ? "Edit User" : "Create User"} />
      <section className="mt-[20px]">
        <Formik
          initialValues={userData}
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
                      <CustomInput
                        labelStyle="text-sm font-medium"
                        type="text"
                        name={field.name}
                        value={field.value}
                        handleChange={handleChange}
                        placeholder="Select Role"
                        label="Enter Role"
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
                  text="Register User"
                  isLoading={isPending}
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
