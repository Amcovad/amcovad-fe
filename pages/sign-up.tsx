import React from "react";
import Link from "next/link";
import Button from "@/components/form/Button";
import Input from "@/components/form/Input";
import { CheckboxGroup } from "@/components/form/CheckboxGroup";
import { Label } from "@/components/form/Label";
import HookForm from "@/components/form/Form";
import SignUpImage from "../public/assets/signUp/signup.png";
import { SignUpSchema } from "../schema/authSchema";
import AuthPage from "@/components/AuthPage";

const SignIn = () => {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <AuthPage
      title="Get your transactions covered and secured."
      text="Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit libero, a pharetra augue."
      image={SignUpImage}
      imagealt="sign in page image"
    >
      <div className="mt-8">
        <HookForm onSubmit={onSubmit} schema={SignUpSchema}>
          <div className="mb-6">
            <Input label="Email address" name="email" type="email" floatLabel />
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
                      <Link href="#" passHref>
                        <a className=" text-primary-500 hover:text-primary-400">
                          {" "}
                          Terms of Service{" "}
                        </a>
                      </Link>
                      and
                      <Link href="#" passHref>
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
                      <Link href="#" passHref>
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
            <Button className="w-full uppercase">Create account</Button>
          </div>

          <p className="block pt-2 text-center text-base text-secondary-700 font-normal font-Inter ">
            Have an account,{" "}
            <Link href="/sign-in">
              <a className=" text-primary-500 hover:text-primary-400">
                <b>Sign In</b>
              </a>
            </Link>
          </p>
        </HookForm>
      </div>
    </AuthPage>
  );
};

export default SignIn;
