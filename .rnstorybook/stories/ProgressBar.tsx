import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export interface ProgressBarProps {
  progress: number; // 0-100
  variant?: "default" | "success" | "warning" | "error" | "info";
  showLabel?: boolean;
  height?: number;
  style?: StyleProp<ViewStyle>;
}

export const ProgressBar = ({
  progress,
  variant = "default",
  showLabel = false,
  height = 8,
  style,
}: ProgressBarProps) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <View style={style}>
      {showLabel && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{Math.round(clampedProgress)}%</Text>
        </View>
      )}
      <View style={[styles.container, { height }]}>
        <View
          style={[
            styles.progress,
            styles[variant],
            { width: `${clampedProgress}%`, height },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    overflow: "hidden",
  },
  progress: {
    borderRadius: 4,
    transition: "width 0.3s ease",
  },
  default: {
    backgroundColor: "#1ea7fd",
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
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: "#666",
    fontWeight: "600",
  },
});
