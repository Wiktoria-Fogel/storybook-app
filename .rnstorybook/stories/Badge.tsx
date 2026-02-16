import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export interface BadgeProps {
  label: string;
  variant?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
  size?: "small" | "medium" | "large";
  style?: StyleProp<ViewStyle>;
}

export const Badge = ({
  label,
  variant = "primary",
  size = "medium",
  style,
}: BadgeProps) => {
  return (
    <View style={[styles.badge, styles[variant], styles[size], style]}>
      <Text style={[styles.text, styles[`${size}Text`]]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: 12,
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  primary: {
    backgroundColor: "#1ea7fd",
  },
  secondary: {
    backgroundColor: "#6c757d",
  },
  success: {
    backgroundColor: "#28a745",
  },
  warning: {
    backgroundColor: "#ffc107",
  },
  error: {
    backgroundColor: "#dc3545",
  },
  info: {
    backgroundColor: "#17a2b8",
  },
  small: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  medium: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  large: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  text: {
    color: "#fff",
    fontWeight: "600",
  },
  smallText: {
    fontSize: 10,
  },
  mediumText: {
    fontSize: 12,
  },
  largeText: {
    fontSize: 14,
  },
});
