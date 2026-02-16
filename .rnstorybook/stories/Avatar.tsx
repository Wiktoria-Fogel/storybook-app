import type { StyleProp, ViewStyle } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

export interface AvatarProps {
  source?: { uri: string } | number;
  name?: string;
  size?: "small" | "medium" | "large" | "xlarge";
  variant?: "circle" | "square" | "rounded";
  style?: StyleProp<ViewStyle>;
}

const getInitials = (name: string): string => {
  const parts = name.trim().split(" ");
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const getColorFromName = (name: string): string => {
  const colors = [
    "#1ea7fd",
    "#28a745",
    "#ffc107",
    "#dc3545",
    "#17a2b8",
    "#6f42c1",
    "#e83e8c",
    "#fd7e14",
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

export const Avatar = ({
  source,
  name,
  size = "medium",
  variant = "circle",
  style,
}: AvatarProps) => {
  const sizeStyle = styles[size];
  const variantStyle = styles[variant];

  if (source) {
    return (
      <Image
        source={source}
        style={[styles.avatar, sizeStyle, variantStyle, style]}
      />
    );
  }

  if (name) {
    const initials = getInitials(name);
    const backgroundColor = getColorFromName(name);

    return (
      <View
        style={[
          styles.avatar,
          styles.placeholder,
          sizeStyle,
          variantStyle,
          { backgroundColor },
          style,
        ]}
      >
        <Text style={[styles.initials, styles[`${size}Text`]]}>{initials}</Text>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.avatar,
        styles.placeholder,
        sizeStyle,
        variantStyle,
        { backgroundColor: "#ccc" },
        style,
      ]}
    >
      <Text style={[styles.initials, styles[`${size}Text`]]}>?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    overflow: "hidden",
  },
  placeholder: {
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    borderRadius: 9999,
  },
  square: {
    borderRadius: 0,
  },
  rounded: {
    borderRadius: 8,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 48,
    height: 48,
  },
  large: {
    width: 64,
    height: 64,
  },
  xlarge: {
    width: 96,
    height: 96,
  },
  initials: {
    color: "#fff",
    fontWeight: "600",
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 20,
  },
  xlargeText: {
    fontSize: 32,
  },
});
