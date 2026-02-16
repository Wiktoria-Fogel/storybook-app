import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { fn } from "storybook/test";
import { Toggle } from "./Toggle";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 20, gap: 20 }}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
  args: { onValueChange: fn() },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "Enable notifications",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked toggle",
    defaultChecked: true,
  },
};

export const Small: Story = {
  args: {
    label: "Small toggle",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium toggle",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    label: "Large toggle",
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled toggle",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled checked",
    defaultChecked: true,
    disabled: true,
  },
};

export const Controlled: Story = {
  args: {
    label: "Controlled toggle",
    checked: true,
  },
};
