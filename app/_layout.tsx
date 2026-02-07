import { Stack } from "expo-router";
import { View } from "react-native";
import StorybookUI from "../.rnstorybook";

export default function RootLayout() {
  const isStorybookEnabled =
    process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

  if (isStorybookEnabled) {
    return (
      <View style={{ flex: 1 }}>
        <StorybookUI />
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
