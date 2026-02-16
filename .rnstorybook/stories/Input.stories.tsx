import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 20, maxWidth: 400 }}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "example@email.com",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    helperText: "Must be at least 8 characters",
    secureTextEntry: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Email Address",
    placeholder: "example@email.com",
    error: "Please enter a valid email address",
    defaultValue: "invalid-email",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined Input",
    placeholder: "Outlined style",
    variant: "outlined",
  },
};

export const Filled: Story = {
  args: {
    label: "Filled Input",
    placeholder: "Filled style",
    variant: "filled",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "Cannot edit",
    editable: false,
    defaultValue: "Disabled value",
  },
};

export const Multiline: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message...",
    multiline: true,
    numberOfLines: 4,
  },
};
