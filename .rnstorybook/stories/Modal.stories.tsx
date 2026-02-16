import type { Meta, StoryObj } from "@storybook/react-native";
import { useState } from "react";
import { Text, View } from "react-native";
import { fn } from "storybook/test";
import { Button } from "./Button";
import { Modal } from "./Modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 20 }}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
  args: { onClose: fn() },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const ModalWrapper = ({ children, ...props }: any) => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <Button label="Open Modal" onPress={() => setVisible(true)} />
      <Modal {...props} visible={visible} onClose={() => setVisible(false)}>
        {children}
      </Modal>
    </View>
  );
};

export const Default: Story = {
  render: () => (
    <ModalWrapper>
      <Text>This is a default modal with some content.</Text>
    </ModalWrapper>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <ModalWrapper title="Modal Title">
      <Text>This modal has a title in the header.</Text>
    </ModalWrapper>
  ),
};

export const Small: Story = {
  render: () => (
    <ModalWrapper size="small" title="Small Modal">
      <Text>This is a small modal.</Text>
    </ModalWrapper>
  ),
};

export const Medium: Story = {
  render: () => (
    <ModalWrapper size="medium" title="Medium Modal">
      <Text>This is a medium-sized modal.</Text>
    </ModalWrapper>
  ),
};

export const Large: Story = {
  render: () => (
    <ModalWrapper size="large" title="Large Modal">
      <Text>This is a large modal with more space for content.</Text>
    </ModalWrapper>
  ),
};

export const WithoutCloseButton: Story = {
  render: () => (
    <ModalWrapper title="No Close Button" showCloseButton={false}>
      <Text>This modal doesn't have a close button in the header.</Text>
      <View style={{ marginTop: 16 }}>
        <Button label="Close" onPress={() => {}} />
      </View>
    </ModalWrapper>
  ),
};

export const WithContent: Story = {
  render: () => (
    <ModalWrapper title="Modal with Content">
      <Text style={{ marginBottom: 12 }}>
        This modal contains various content elements.
      </Text>
      <View style={{ gap: 8 }}>
        <Button label="Action 1" primary onPress={() => {}} />
        <Button label="Action 2" onPress={() => {}} />
      </View>
    </ModalWrapper>
  ),
};
