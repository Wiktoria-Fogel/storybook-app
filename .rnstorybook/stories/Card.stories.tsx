import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { fn } from "storybook/test";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 20, alignItems: "center" }}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
  args: { onPress: fn() },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    description: "This is a default card with a title and description.",
  },
};

export const WithImage: Story = {
  args: {
    title: "Beautiful Landscape",
    description: "A stunning view of mountains and lakes.",
    imageUrl: "https://picsum.photos/400/200",
  },
};

export const Elevated: Story = {
  args: {
    title: "Elevated Card",
    description: "This card has a more prominent shadow effect.",
    variant: "elevated",
  },
};

export const Outlined: Story = {
  args: {
    title: "Outlined Card",
    description: "This card uses a border instead of shadow.",
    variant: "outlined",
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Card with Title Only",
  },
};

export const DescriptionOnly: Story = {
  args: {
    description: "This card only has a description without a title.",
  },
};

export const Clickable: Story = {
  args: {
    title: "Clickable Card",
    description: "Tap this card to trigger an action.",
    onPress: fn(),
  },
};
