import React from "react";
import Link from "next/link";
import Button from "@/components/form/Button";
import Input from "@/components/form/Input";
import HookForm from "@/components/form/Form";
import SignInImage from "../public/assets/signUp/signin.png";
import { ForgotPasswordSchema } from "../schema/authSchema";
import AuthPage from "@/components/AuthPage";

const ForgotPassword = () => {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <AuthPage
      title="Forgot your password?"
      text=" Please enter the email address associated with your account and We will email you a link to reset your password."
      image={SignInImage}
      imagealt="sign in page image"
    >
      <div className="mt-8">
        <HookForm onSubmit={onSubmit} schema={ForgotPasswordSchema}>
          <div className="mb-6">
            <Input label="Email address" name="email" type="email" />
          </div>

          <Button className="w-full uppercase">
            Reset Password{" "}
          </Button>
        </HookForm>
        <p className="block pt-2 text-center text-base text-secondary-700 font-normal font-Inter ">
          <Link href="/sign-in">
            <a className=" text-secondary-700 hover:text-primary-500">
              Back to Sign In
            </a>
          </Link>
        </p>
      </div>
    </AuthPage>
  );
};

export default ForgotPassword;
