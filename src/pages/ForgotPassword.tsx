import { Link } from "react-router-dom";
import { CustomButton } from "../components/common/CustomButton";
import CustomInput from "../components/common/CustomInput";
import AuthLayout from "../components/layout/AuthLayout";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikProps,
  FieldProps,
} from "formik";
import { useUserAuth } from "../services/auth/auth";
import { resetPasswordSchema } from "../utils/schema";

interface FormValues {
  email: string;
}

const ForgotPassword = () => {
  const { forgotPasswordMutation } = useUserAuth();
  const { isPending, mutate } = forgotPasswordMutation;
  const userData = {
    email: "",
  };
  const handleSubmit = (values: FormValues) => {
    mutate(values.email);
  };

  return (
    <div>
      <AuthLayout>
        <p className="text-center text-[18px]  font-semibold">
          Forgot Password
        </p>
        <Formik
          initialValues={userData}
          validationSchema={resetPasswordSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange }: FormikProps<FormValues>) => (
            <Form className="w-[100%] flex  flex-col justify-center items-center">
              <div className="mt-5 lg:w-[50%] w-[80%]">
                <Field name="email">
                  {({ field }: FieldProps) => (
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
                <CustomButton
                  text="Reset Password"
                  isLoading={isPending}
                  disabled={isPending}
                />
              </div>
            </Form>
          )}
        </Formik>
      </AuthLayout>
    </div>
  );
};

export default ForgotPassword;
