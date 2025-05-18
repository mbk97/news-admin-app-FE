import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "../components/common/CustomButton";
import CustomInput from "../components/common/CustomInput";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthLayout from "../components/layout/AuthLayout";
import { useUserAuth } from "../services/auth/auth";
import { validationSchema } from "../utils/schema";
import { useToast } from "../hooks/useToast";
import { ILoginPayload } from "../types/auth";

const Login = () => {
  const navigate = useNavigate();
  const { toastSuccess } = useToast();
  const { loginUserMutation } = useUserAuth();
  const { mutate, isPending } = loginUserMutation;

  const userData = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: ILoginPayload) => {
    mutate(values, {
      onSuccess(data: any) {
        if (data?.data?.success === true) {
          toastSuccess("Login Successful");
          navigate("/dashboard");
        }
      },
      onError(error) {
        console.log(error);
      },
    });
  };

  return (
    <AuthLayout>
      <Formik
        initialValues={userData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange }: any) => (
          <Form className="w-[100%] flex  flex-col justify-center items-center">
            <div className="mt-5 lg:w-[50%] w-[80%]">
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
            <div className="mt-5 w-[80%] lg:w-[50%]">
              <Field name="password">
                {({ field }: any) => (
                  <div className="relative mb-1">
                    <CustomInput
                      labelStyle="text-sm font-medium"
                      type="password"
                      name={field.name}
                      value={field.value}
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

              <div className="flex justify-end mt-0">
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
                pageBtn="login"
              />
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Login;
