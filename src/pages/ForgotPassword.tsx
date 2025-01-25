import { Link } from "react-router-dom";
import { CustomButton } from "../components/common/CustomButton";
import CustomInput from "../components/common/CustomInput";
import AuthLayout from "../components/layout/AuthLayout";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ForgotPassword = () => {
  const userData = {};
  const handleSubmit = () => {};
  return (
    <div>
      <AuthLayout>
        <Formik
          initialValues={userData}
          // validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange }: any) => (
            <Form className="w-[100%] flex  flex-col justify-center items-center">
              <div className="mt-5 lg:w-[50%] w-[80%]">
                <Field name="username">
                  {({ field }: any) => (
                    <div className="relative mb-1">
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
                <div className="flex justify-end">
                  <Link to={"/"}>
                    <p className="text-[12px]  underline text-primary cursor-pointer">
                      Login
                    </p>
                  </Link>
                </div>
              </div>

              <div className="mt-7 w-[80%] lg:w-[50%]">
                <CustomButton text="Reset Password" />
              </div>
            </Form>
          )}
        </Formik>
      </AuthLayout>
    </div>
  );
};

export default ForgotPassword;
