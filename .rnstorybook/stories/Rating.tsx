import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export interface RatingProps {
  value?: number;
  defaultValue?: number;
  max?: number;
  size?: "small" | "medium" | "large";
  readonly?: boolean;
  showValue?: boolean;
  onValueChange?: (value: number) => void;
  style?: StyleProp<ViewStyle>;
}

export const Rating = ({
  value: controlledValue,
  defaultValue = 0,
  max = 5,
  size = "medium",
  readonly = false,
  showValue = false,
  onValueChange,
  style,
}: RatingProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : uncontrolledValue;

  const handlePress = (newValue: number) => {
    if (readonly) return;
    if (!isControlled) {
      setUncontrolledValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.stars}>
        {Array.from({ length: max }, (_, index) => {
          const starValue = index + 1;
          const isFilled = starValue <= currentValue;
          return (
            <TouchableOpacity
              key={starValue}
              onPress={() => handlePress(starValue)}
              disabled={readonly}
              activeOpacity={0.7}
              style={styles.star}
            >
              <Text
                style={[
                  styles.starText,
                  styles[`star${size.charAt(0).toUpperCase() + size.slice(1)}`],
                  isFilled && styles.starFilled,
                ]}
              >
                ★
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {showValue && (
        <Text style={styles.valueText}>
          {currentValue.toFixed(1)} / {max}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stars: {
    flexDirection: "row",
    gap: 4,
  },
  star: {
    padding: 2,
  },
  starText: {
    color: "#ddd",
  },
  starFilled: {
    color: "#ffc107",
  },
  starSmall: {
    fontSize: 16,
  },
  starMedium: {
    fontSize: 24,
  },
  starLarge: {
    fontSize: 32,
  },
  valueText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
  },
});
