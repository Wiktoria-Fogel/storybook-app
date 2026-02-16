import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { ProgressBar } from "./ProgressBar";

const meta = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 20, gap: 20, maxWidth: 400 }}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 50,
  },
};

export const WithLabel: Story = {
  args: {
    progress: 75,
    showLabel: true,
  },
};

export const Success: Story = {
  args: {
    progress: 90,
    variant: "success",
    showLabel: true,
  },
};

export const Warning: Story = {
  args: {
    progress: 60,
    variant: "warning",
    showLabel: true,
  },
};

export const Error: Story = {
  args: {
    progress: 30,
    variant: "error",
    showLabel: true,
  },
};

export const Info: Story = {
  args: {
    progress: 45,
    variant: "info",
    showLabel: true,
  },
};

export const Full: Story = {
  args: {
    progress: 100,
    showLabel: true,
  },
};

export const Empty: Story = {
  args: {
    progress: 0,
    showLabel: true,
  },
};

export const Tall: Story = {
  args: {
    progress: 65,
    height: 16,
    showLabel: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 20 }}>
      <ProgressBar progress={25} variant="default" showLabel />
      <ProgressBar progress={50} variant="success" showLabel />
      <ProgressBar progress={75} variant="warning" showLabel />
      <ProgressBar progress={40} variant="error" showLabel />
      <ProgressBar progress={60} variant="info" showLabel />
    </View>
  ),
};
