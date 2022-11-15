import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/form/Button";
import { EyeSlash, ArrowRight, InfoCircle } from "iconsax-react";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "onClick" },
    color: {
      options: [
        "primary",
        "secondary",
        "light",
        "danger",
        "warning",
        "success",
      ],
      control: { type: "radio" },
    },
    outline: { control: "boolean" },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const defaultParameters = {
  outline: false,
};

export const Primary = Template.bind({});

Primary.args = {
  ...defaultParameters,
  color: "primary",
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultParameters,
  children: "Secondary Button",
  color: "secondary",
};

export const Light = Template.bind({});
Light.args = {
  ...defaultParameters,
  children: "Light Button",
  color: "light",
};

export const Danger = Template.bind({});
Danger.args = {
  ...defaultParameters,
  children: "Danger Button",
  color: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
  ...defaultParameters,
  children: "Warning Button",
  color: "warning",
};

export const Success = Template.bind({});
Success.args = {
  ...defaultParameters,
  children: "Success Button",
  color: "success",
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  ...defaultParameters,
  children: "With Right Icon",
  rightIcon: <ArrowRight size="18px" variant="Bold" />,
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  ...defaultParameters,
  children: "With Left Icon",
  leftIcon: <EyeSlash size="18px" variant="Bold" />,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  color: "success",
  children: <InfoCircle size="18px" variant="Bold" />,
};
