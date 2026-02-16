import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { fn } from "storybook/test";
import { Rating } from "./Rating";

const meta = {
  title: "Components/Rating",
  component: Rating,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 20, gap: 20 }}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
  args: { onValueChange: fn() },
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithValue: Story = {
  args: {
    defaultValue: 3,
  },
};

export const ShowValue: Story = {
  args: {
    defaultValue: 4,
    showValue: true,
  },
};

export const Small: Story = {
  args: {
    defaultValue: 3,
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    defaultValue: 3,
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    defaultValue: 3,
    size: "large",
  },
};

export const Readonly: Story = {
  args: {
    value: 4,
    readonly: true,
    showValue: true,
  },
};

export const MaxStars: Story = {
  args: {
    defaultValue: 7,
    max: 10,
    showValue: true,
  },
};

export const Controlled: Story = {
  args: {
    value: 5,
    showValue: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <View style={{ gap: 20 }}>
      <Rating defaultValue={3} size="small" showValue />
      <Rating defaultValue={3} size="medium" showValue />
      <Rating defaultValue={3} size="large" showValue />
    </View>
  ),
};
