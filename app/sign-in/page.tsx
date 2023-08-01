"use client";
import React from "react";
import Link from "next/link";
import Button from "@/components/form/Button";
import Input from "@/components/form/Input";
import { Label } from "@/components/form/Label";
import HookForm from "@/components/form/Form";
import SignInImage from "../../public/assets/signUp/signin.png";
import { SignInSchema } from "../../schema/authSchema";
import AuthPage from "@/components/AuthPage";
import { loginSuccess } from "../../redux/slices/auth";
import authService from "../../services/auth";
import { useAppDispatch } from "../../redux/hooks";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";

const SignIn = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const methods = useForm({
    mode: "onChange",

    resolver: yupResolver(SignInSchema),
  });

  React.useEffect(() => {
    if (methods.formState.isSubmitSuccessful) {
      methods.reset();
    }
  }, [methods, methods.formState.isSubmitSuccessful]);

  const onSubmit = async (data: any) => {
    // alert(JSON.stringify(data));

    try {
      const response = await authService.login({
        email: data?.email,
        password: data?.password,
      });
      // console.log(response.user);
      dispatch(loginSuccess(response.user));
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      router.push("/dashboard");
    } catch (error: any) {
      console.error("Registration failed:", error);
      toast.error("Invalid credentials");
    }
  };

  return (
    <AuthPage
      title="Get your transactions covered and secured."
      text="Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit libero, a pharetra augue."
      image={SignInImage}
      imagealt="sign in page image"
    >
      <div className="mt-8">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="mb-6">
              <Input
                label="Email address"
                name="email"
                type="email"
                floatLabel
              />
            </div>
            <Input
              label="Password"
              name="password"
              type="password"
              floatLabel
            />
            <div className="flex items-center  mb-3">
              <Label
                className="mt-[-5px] mb-4 text-sm"
                htmlFor="forgot password"
                name="forgotPassword"
                text={
                  <Link href="forgot-password" passHref>
                    Forgot password?
                  </Link>
                }
              />
            </div>
            <div>
              <Button
                loading={methods.formState.isSubmitting}
                disabled={
                  methods.formState.isSubmitting || !methods.formState.isValid
                }
                className="w-full uppercase"
              >
                Sign in
              </Button>
            </div>
          </form>
        </FormProvider>
        <p className="block pt-2 text-center text-base text-secondary-700 font-normal font-Inter ">
          Don’t have account?{" "}
          <Link href="/sign-up" legacyBehavior>
            <a className=" text-primary-400 hover:text-primary-500">
              <b>Sign Up</b>
            </a>
          </Link>
        </p>
      </div>
      <ToastContainer />
    </AuthPage>
  );
};

export default SignIn;
