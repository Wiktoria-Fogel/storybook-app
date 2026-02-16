import type { StyleProp, TextInputProps, ViewStyle } from "react-native";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export interface InputProps extends Omit<TextInputProps, "style"> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: "default" | "outlined" | "filled";
  style?: StyleProp<ViewStyle>;
}

export const Input = ({
  label,
  error,
  helperText,
  variant = "default",
  style,
  ...textInputProps
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.inputContainer,
          styles[variant],
          isFocused && styles.focused,
          error && styles.error,
        ]}
      >
        <TextInput
          {...textInputProps}
          style={styles.input}
          placeholderTextColor="#999"
          onFocus={(e) => {
            setIsFocused(true);
            textInputProps.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            textInputProps.onBlur?.(e);
          }}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
      {helperText && !error && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  inputContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  default: {
    backgroundColor: "#fff",
  },
  outlined: {
    borderWidth: 2,
    borderColor: "#1ea7fd",
  },
  filled: {
    backgroundColor: "#f5f5f5",
    borderColor: "transparent",
  },
  focused: {
    borderColor: "#1ea7fd",
    borderWidth: 2,
  },
  error: {
    borderColor: "#dc3545",
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
  },
  errorText: {
    fontSize: 12,
    color: "#dc3545",
    marginTop: 4,
  },
  helperText: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
});
