import {
  ErrorMessage,
  Field,
  FieldProps,
  Form,
  Formik,
  FormikProps,
} from "formik";
import { CustomButton } from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import HeaderText from "../common/HeaderText";
import { IUpdatePassword } from "../../types/auth";
import { updatePasswordSchema } from "../../utils/schema";
import { useUserAuth } from "../../services/auth/auth";

const ManagePassword = () => {
  const { updatePasswordMutation } = useUserAuth();
  const { isPending, mutate } = updatePasswordMutation;

  const userData = {
    email: "",
    currentPassword: "",
    newPassword: "",
  };

  const handleSubmit = (values: IUpdatePassword) => {
    mutate(values);
  };

  return (
    <div>
      <HeaderText text="Manage Password" />
      <section className="mt-[20px]">
        <Formik
          initialValues={userData}
          validationSchema={updatePasswordSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange }: FormikProps<IUpdatePassword>) => (
            <Form>
              <div className="lg:w-[60%] md:w-[70%] w-[100%]">
                <Field name="email">
                  {({ field }: FieldProps) => (
                    <div className="relative mb-4">
                      <CustomInput
                        labelStyle="text-sm font-medium"
                        type="email"
                        name={field.name}
                        value={field.value}
                        handleChange={handleChange}
                        placeholder="Enter your email"
                        label="Email Address"
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
              <div className="lg:w-[60%] md:w-[70%] w-[100%]  mt-5">
                <Field name="currentPassword">
                  {({ field }: FieldProps) => (
                    <div className="relative mb-4">
                      <CustomInput
                        labelStyle="text-sm font-medium"
                        type="text"
                        name={field.name}
                        value={field.value}
                        handleChange={handleChange}
                        placeholder="Enter Current Password"
                        label="Enter Current Password"
                      />
                    </div>
                  )}
                </Field>
                <ErrorMessage
                  name="currentPassword"
                  component="div"
                  className="text-error text-sm"
                />
              </div>
              <div className="lg:w-[60%] md:w-[70%] w-[100%] mt-5">
                <Field name="newPassword">
                  {({ field }: FieldProps) => (
                    <div className="relative mb-4">
                      <CustomInput
                        labelStyle="text-sm font-medium"
                        type="text"
                        name={field.name}
                        value={field.value}
                        handleChange={handleChange}
                        placeholder="Enter New Password"
                        label="Enter New Password"
                      />
                    </div>
                  )}
                </Field>
                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className="text-error text-sm"
                />
              </div>
              <div className="lg:w-[60%] md:w-[70%] w-[100%] mt-8">
                <CustomButton
                  text="Change Password"
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

export default ManagePassword;
