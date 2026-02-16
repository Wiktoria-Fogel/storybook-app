import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { Avatar } from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 20, alignItems: "center", gap: 20 }}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    source: { uri: "https://i.pravatar.cc/150?img=1" },
  },
};

export const WithName: Story = {
  args: {
    name: "John Doe",
  },
};

export const Small: Story = {
  args: {
    name: "Jane Smith",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    name: "Bob Johnson",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    name: "Alice Brown",
    size: "large",
  },
};

export const XLarge: Story = {
  args: {
    name: "Charlie Wilson",
    size: "xlarge",
  },
};

export const Circle: Story = {
  args: {
    name: "Circle Avatar",
    variant: "circle",
  },
};

export const Square: Story = {
  args: {
    name: "Square Avatar",
    variant: "square",
  },
};

export const Rounded: Story = {
  args: {
    name: "Rounded Avatar",
    variant: "rounded",
  },
};

export const AllSizes: Story = {
  render: () => (
    <View style={{ gap: 20, alignItems: "center" }}>
      <Avatar name="Small" size="small" />
      <Avatar name="Medium" size="medium" />
      <Avatar name="Large" size="large" />
      <Avatar name="XLarge" size="xlarge" />
    </View>
  ),
};
