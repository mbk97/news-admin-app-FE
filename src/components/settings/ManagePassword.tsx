import { ErrorMessage, Field, Form, Formik } from "formik";
import { CustomButton } from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import HeaderText from "../common/HeaderText";
import { IUpdatePassword } from "../../types/auth";
import { updatePasswordSchema } from "../../utils/schema";

const ManagePassword = () => {
  const userData = {
    email: "",
    currentPassword: "",
    newPassword: "",
  };

  const handleSubmit = (values: IUpdatePassword) => {};

  return (
    <div>
      <HeaderText text="Manage Password" />
      <section className="mt-[20px]">
        <Formik
          initialValues={userData}
          validationSchema={updatePasswordSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange }: any) => (
            <Form>
              <div className="lg:w-[60%] md:w-[70%] w-[100%]">
                <Field name="email">
                  {({ field }: any) => (
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
                  {({ field }: any) => (
                    <div className="relative mb-4">
                      <CustomInput
                        labelStyle="text-sm font-medium"
                        type="text"
                        name={field.currentPassword}
                        value={field.currentPassword}
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
                  {({ field }: any) => (
                    <div className="relative mb-4">
                      <CustomInput
                        labelStyle="text-sm font-medium"
                        type="text"
                        name={field.newPassword}
                        value={field.newPassword}
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
                <CustomButton text="Change Password" />
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
};

export default ManagePassword;
