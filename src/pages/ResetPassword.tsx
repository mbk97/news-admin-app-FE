import AuthLayout from "../components/layout/AuthLayout";
import {
  ErrorMessage,
  Field,
  FieldProps,
  Form,
  Formik,
  FormikProps,
} from "formik";
import { Link, useParams } from "react-router-dom";
import CustomInput from "../components/common/CustomInput";
import { CustomButton } from "../components/common/CustomButton";
import { generatePasswordSchema } from "../utils/schema";
import { useUserAuth } from "../services/auth/auth";

interface FormValues {
  password: string;
  confirmPassword: string;
}

const ResetPassword = () => {
  const userData = {
    password: "",
    confirmPassword: "",
  };
  const { resetPasswordMutation } = useUserAuth();
  const { isPending, mutate } = resetPasswordMutation;
  const { resetToken } = useParams();

  const handleSubmit = (values: FormValues) => {
    const payload = {
      password: values.password,
      token: resetToken || "",
    };
    mutate(payload);
  };

  return (
    <div>
      <AuthLayout>
        <p className="text-center text-[18px]  font-semibold">
          Set New Password
        </p>
        <Formik
          initialValues={userData}
          validationSchema={generatePasswordSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange }: FormikProps<FormValues>) => (
            <Form className="w-[100%] flex  flex-col justify-center items-center">
              <div className="mt-5 lg:w-[50%] w-[80%]">
                <Field name="password">
                  {({ field }: FieldProps) => (
                    <div className="relative mb-1">
                      <CustomInput
                        labelStyle="text-sm font-medium"
                        type="password"
                        name={field.name}
                        value={field.value.trim()}
                        handleChange={handleChange}
                        placeholder="Enter new password"
                        label="New Password"
                      />
                    </div>
                  )}
                </Field>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-error text-sm"
                />
              </div>
              <div className="mt-5 lg:w-[50%] w-[80%]">
                <Field name="confirmPassword">
                  {({ field }: FieldProps) => (
                    <div className="relative mb-1">
                      <CustomInput
                        labelStyle="text-sm font-medium"
                        type="password"
                        name={field.name}
                        value={field.value.trim()}
                        handleChange={handleChange}
                        placeholder="Confirm new password"
                        label="Confirm Password"
                      />
                    </div>
                  )}
                </Field>
                <ErrorMessage
                  name="confirmPassword"
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
                  text="Set Password"
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

export default ResetPassword;
