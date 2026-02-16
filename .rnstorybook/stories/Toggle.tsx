import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export interface ToggleProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onValueChange?: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
}

export const Toggle = ({
  label,
  checked: controlledChecked,
  defaultChecked = false,
  disabled = false,
  size = "medium",
  onValueChange,
  style,
}: ToggleProps) => {
  const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : uncontrolledChecked;

  const handlePress = () => {
    if (disabled) return;
    const newValue = !checked;
    if (!isControlled) {
      setUncontrolledChecked(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.7}
      style={[styles.container, style]}
    >
      <View
        style={[
          styles.track,
          styles[`track${size}`],
          checked && styles.trackChecked,
          disabled && styles.trackDisabled,
        ]}
      >
        <View
          style={[
            styles.thumb,
            styles[`thumb${size}`],
            checked && styles.thumbChecked,
            disabled && styles.thumbDisabled,
          ]}
        />
      </View>
      {label && (
        <Text
          style={[
            styles.label,
            styles[`label${size}`],
            disabled && styles.labelDisabled,
          ]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  track: {
    backgroundColor: "#ccc",
    borderRadius: 9999,
    justifyContent: "center",
  },
  trackChecked: {
    backgroundColor: "#1ea7fd",
  },
  trackDisabled: {
    opacity: 0.5,
  },
  tracksmall: {
    width: 36,
    height: 20,
  },
  trackmedium: {
    width: 44,
    height: 24,
  },
  tracklarge: {
    width: 52,
    height: 28,
  },
  thumb: {
    backgroundColor: "#fff",
    borderRadius: 9999,
    position: "absolute",
    left: 2,
  },
  thumbChecked: {
    left: "auto",
    right: 2,
  },
  thumbDisabled: {
    opacity: 0.7,
  },
  thumbsmall: {
    width: 16,
    height: 16,
  },
  thumbmedium: {
    width: 20,
    height: 20,
  },
  thumblarge: {
    width: 24,
    height: 24,
  },
  label: {
    color: "#333",
  },
  labelsmall: {
    fontSize: 14,
  },
  labelmedium: {
    fontSize: 16,
  },
  labellarge: {
    fontSize: 18,
  },
  labelDisabled: {
    color: "#999",
  },
});
