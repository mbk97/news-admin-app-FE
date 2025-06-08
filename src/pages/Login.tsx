import { Link } from "react-router-dom";
import { CustomButton } from "../components/common/CustomButton";
import CustomInput from "../components/common/CustomInput";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldProps,
  FormikProps,
} from "formik";
import AuthLayout from "../components/layout/AuthLayout";
import { validationSchema } from "../utils/schema";
import { useUserAuth } from "../services/auth/auth";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const { loginUserMutation } = useUserAuth();

  const { mutate, isPending } = loginUserMutation;
  const userData = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: FormValues) => {
    mutate(values);
  };

  return (
    <AuthLayout>
      <Formik
        initialValues={userData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange }: FormikProps<FormValues>) => (
          <Form className="w-[100%] flex  flex-col justify-center items-center">
            <div className="mt-5 lg:w-[50%] w-[80%]">
              <Field name="email">
                {({ field }: FieldProps) => (
                  <div className="relative mb-4">
                    <CustomInput
                      labelStyle="text-sm font-medium"
                      type="email"
                      name={field.name}
                      value={field.value.trim()}
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
            <div className="mt-5 w-[80%] lg:w-[50%]">
              <Field name="password">
                {({ field }: FieldProps) => (
                  <div className="relative mb-1">
                    <CustomInput
                      labelStyle="text-sm font-medium"
                      type="password"
                      name={field.name}
                      value={field.value.trim()}
                      handleChange={handleChange}
                      placeholder="Enter your password"
                      label="Password"
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
                name="password"
                component="div"
                className="text-error text-sm"
              />

              <div className="flex justify-end">
                <Link to={"/forgot-password"}>
                  <p className="text-[12px]  underline text-primary cursor-pointer">
                    Forgot Password?
                  </p>
                </Link>
              </div>
            </div>

            <div className="mt-7 w-[80%] lg:w-[50%]">
              <CustomButton
                text="Login"
                isLoading={isPending}
                disabled={isPending}
              />
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Login;
