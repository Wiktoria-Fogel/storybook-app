import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 20, flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    label: "Success",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    label: "Error",
    variant: "error",
  },
};

export const Info: Story = {
  args: {
    label: "Info",
    variant: "info",
  },
};

export const Small: Story = {
  args: {
    label: "Small",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    label: "Large",
    size: "large",
  },
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 10 }}>
      <Badge label="Primary" variant="primary" />
      <Badge label="Secondary" variant="secondary" />
      <Badge label="Success" variant="success" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Error" variant="error" />
      <Badge label="Info" variant="info" />
    </View>
  ),
};
