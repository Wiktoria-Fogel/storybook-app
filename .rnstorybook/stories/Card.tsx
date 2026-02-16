import type { StyleProp, ViewStyle } from "react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface CardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  variant?: "default" | "elevated" | "outlined";
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Card = ({
  title,
  description,
  imageUrl,
  variant = "default",
  onPress,
  style,
}: CardProps) => {
  const Container = onPress ? TouchableOpacity : View;
  const containerProps = onPress ? { activeOpacity: 0.7, onPress } : {};

  return (
    <Container
      {...containerProps}
      style={[
        styles.card,
        styles[variant],
        style,
      ]}
    >
      {imageUrl && (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      )}
      <View style={styles.content}>
        {title && <Text style={styles.title}>{title}</Text>}
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    width: "100%",
    maxWidth: 400,
  },
  default: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  elevated: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  outlined: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowOpacity: 0,
    elevation: 0,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
