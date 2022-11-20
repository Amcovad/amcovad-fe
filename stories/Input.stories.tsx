import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "../components/form/Input";
import HookForm from "../components/form/Form";

import { User, InfoCircle, TickCircle } from "iconsax-react";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    name: { control: "text" },
    floatLabel: { control: "boolean" },
    hintText: { control: "text" },
    toolTip: { control: "boolean" },
    showTooltipArrow: { control: "boolean" },
    type: {
      options: ["text", "email", "password", "color", "date"],
      control: { type: "select" },
    },
    toolTipPlacement: {
      options: [
        "top",
        "bottom",
        "right",
        "left",
        "bottomStart",
        "bottomEnd",
        "topStart",
        "topEnd",
        "leftStart",
        "rightStart",
        "leftEnd",
        "rightEnd",
        "auto",
        "autoVertical",
        "autoVerticalStart",
        "autoVerticalEnd",
        "autoHorizontal",
        "autoHorizontalStart",
        "autoHorizontalEnd",
      ],
      control: { type: "inline-radio" },
    },
    feedBack: {
      options: [
        "FEEDBACK.ALL",
        "FEEDBACK.SUCCESS",
        "FEEDBACK.ERROR",
        "FEEDBACK.NONE",
      ],
      control: { type: "inline-radio" },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <HookForm>
    <Input {...args} />
  </HookForm>
);

const defaultParameters = {
  floatLabel: true,
  name: "email",
  toolTip: false,
  toolTipPlacement: "bottom",
  toolTipTitle: "Account Verification",
  toolTipContent:
    "Your BVN number will be used to identify you as a valid account holder. In most scenarios, this is to prevent fraud.",
  showTooltipArrow: true,
};

export const Default = Template.bind({});

Default.args = {
  ...defaultParameters,
  label: "Email your address",
};
export const withPlaceholder = Template.bind({});
withPlaceholder.args = {
  ...defaultParameters,
  placeholder: "New placeholder",
  floatLabel: false,
};

export const withIcon = Template.bind({});

withIcon.args = {
  ...defaultParameters,
  label: "Enter your name",
  Icon: <InfoCircle size="18px" color="#A9ABAD" variant="Bold" />,
};
export const withHintText = Template.bind({});
withHintText.args = {
  ...defaultParameters,
  label: "With HintText: ",
  hintText: "This is a hint text to help your email.",
  toolTipPlacement: "bottomEnd",
};
export const withTooltip = Template.bind({});
withTooltip.args = {
  ...defaultParameters,
  label: "Enter your fullname",
  floatLabel: false,
  toolTip: true,
  toolTipTitle: "Please enter your fullname",
  toolTipPlacement: "right",
  toolTipContent: "",
};

export const withLabelAndIcon = Template.bind({});
withLabelAndIcon.args = {
  ...defaultParameters,
  label: "Email address",
  Icon: <TickCircle size="18px" color="#A9ABAD" variant="Bold" />,
  floatLabel: false,
};

export const withTooltipAndFloatLabel = Template.bind({});
withTooltipAndFloatLabel.args = {
  ...defaultParameters,
  label: "Enter your BVN digit",
  floatLabel: true,
  toolTip: true,
  toolTipPlacement: "bottomEnd",
};

export const PasswordField = Template.bind({});
PasswordField.args = {
  ...defaultParameters,
  label: "Password",
  type: "password",
};

export const withLeadingIcon = Template.bind({});
withLeadingIcon.args = {
  ...defaultParameters,
  label: "Enter your fullname",
  leadingIcon: <User size="18px" color="#A9ABAD" variant="Bold" />,
  floatLabel: false,
};

export const withLeadingIconAndFloatLabel = Template.bind({});
withLeadingIconAndFloatLabel.args = {
  ...defaultParameters,
  label: "Enter your fullname",
  leadingIcon: <User size="18px" color="#A9ABAD" variant="Bold" />,
  floatLabel: true,
};

export const withLeadingIconAndTooltip = Template.bind({});
withLeadingIconAndTooltip.args = {
  ...defaultParameters,
  label: "Enter your fullname",
  leadingIcon: <User size="18px" color="#A9ABAD" variant="Bold" />,
  floatLabel: false,
  toolTip: true,
  toolTipContent: "",
  toolTipPlacement: "right",
};
