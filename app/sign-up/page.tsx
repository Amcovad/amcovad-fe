"use client";
import React from "react";
import Link from "next/link";
import Button from "@/components/form/Button";
import Input from "@/components/form/Input";
import { CheckboxGroup } from "@/components/form/CheckboxGroup";
import HookForm from "@/components/form/Form";
import SignUpImage from "../../public/assets/signUp/signup.png";
import { SignUpSchema } from "../../schema/authSchema";
import AuthPage from "@/components/AuthPage";
import { loginSuccess } from "../../redux/slices/auth";
import authService from "../../services/auth";
import { useAppDispatch } from "../../redux/hooks";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import { sleepNow } from "@/utils/helper-functions";

const SignIn = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(SignUpSchema),
  });

  React.useEffect(() => {
    if (methods.formState.isSubmitSuccessful) {
      methods.reset();
    }
  }, [methods, methods.formState.isSubmitSuccessful]);

  const onSubmit = async (data: any) => {
    // alert(JSON.stringify(data));

    try {
      const user = await authService.register({
        email: data?.email,
        password: data?.password,
        firstName: data?.firstName,
        lastName: data?.lastName,
      });

      dispatch(loginSuccess(user));
      toast.success("Registration successful");
      await sleepNow(4000);
      router.push("/sign-in");
    } catch (error: any) {
      console.error("Registration failed:", error);
      toast.error(error.response.data.errors.email);
    }
  };

  return (
    <AuthPage
      title="Get your transactions covered and secured."
      text="Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit libero, a pharetra augue."
      image={SignUpImage}
      imagealt="sign in page image"
    >
      <div className="mt-8">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {" "}
            <div className="mb-6">
              <Input
                label="Email address"
                name="email"
                type="email"
                floatLabel
              />
            </div>
            <div className="mb-6">
              <Input
                label="First Name"
                name="firstName"
                type="text"
                floatLabel
              />
            </div>
            <div className="mb-6">
              <Input label="Last Name" name="lastName" type="text" floatLabel />
            </div>
            <div className="my-5">
              <Input
                label="Password"
                name="password"
                type="password"
                floatLabel
              />
            </div>
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              floatLabel
            />
            <div className=" mt-8 mb-3">
              <CheckboxGroup
                name="acceptTerms"
                options={[
                  {
                    label: (
                      <>
                        I have read, and I agree to the
                        <Link href="#" passHref legacyBehavior>
                          <a className=" text-primary-500 hover:text-primary-400">
                            {" "}
                            Terms of Service{" "}
                          </a>
                        </Link>
                        and
                        <Link href="#" passHref legacyBehavior>
                          <a className=" text-primary-500 hover:text-primary-400">
                            {" "}
                            Privacy Policy
                          </a>
                        </Link>
                      </>
                    ),
                    value: true,
                  },
                ]}
              />
            </div>
            <div className="flex items-center mt-2 mb-6">
              <CheckboxGroup
                name="agreeContact"
                options={[
                  {
                    label: (
                      <>
                        I agree to be contacted by
                        <Link href="#" passHref legacyBehavior>
                          <a className=" text-primary-500 hover:text-primary-400">
                            {" "}
                            amcovad
                          </a>
                        </Link>
                      </>
                    ),
                    value: true,
                  },
                ]}
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
                Create account
              </Button>
            </div>
            <p className="block pt-2 text-center text-base text-secondary-700 font-normal font-Inter ">
              Have an account,{" "}
              <Link href="/sign-in" legacyBehavior>
                <a className=" text-primary-500 hover:text-primary-400">
                  <b>Sign In</b>
                </a>
              </Link>
            </p>
          </form>
        </FormProvider>
      </div>
      <ToastContainer />
    </AuthPage>
  );
};

export default SignIn;
