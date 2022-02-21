import React from "react";

import { UserOutlined, LockOutlined } from "@ant-design/icons";

import FormFieldText from "@next/components/form/field/text";
import Form from "@next/components/form";

import { SignInModel } from "../../types";
import Button from "@next/components/button";
import { signInFormSchema } from "../../utils";

const SignInForm: React.FC = () => {
  const handleSingIn = (values: SignInModel) => {
    console.log(values);
  };

  return (
    <Form<SignInModel> onSubmit={handleSingIn} schema={signInFormSchema}>
      <FormFieldText
        name="email"
        placeholder={"email"}
        prefix={<UserOutlined />}
      />
      <FormFieldText
        name="password"
        placeholder={"password"}
        type="password"
        prefix={<LockOutlined />}
      />
      <Button className="mt-2" type="primary" htmlType="submit" fullWidth>
        {"submit"}
      </Button>
    </Form>
  );
};

export default SignInForm;
