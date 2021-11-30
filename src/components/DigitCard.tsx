// Packages Imports
import React from "react";
import {
  StyleSheet,
  Text,
  StyleProp,
  TextStyle,
  Pressable,
} from "react-native";

// Configs and types Imports
import { KeyObjectProps } from "../types/OTPKeyboard";

// Render default function
function DigitCard({
  title,
  customComponent,
  backgroundColor,
  color,
  textProps,
  onPress,
  style = {},
}: KeyObjectProps) {
  // Styles for the Text component
  const textStyle: StyleProp<TextStyle> = [styles.text, { color }];

  // Render the component
  return (
    <Pressable
      style={[styles.container, { backgroundColor }, style]}
      onPress={() => onPress(title)}
    >
      {customComponent ? (
        customComponent
      ) : title ? (
        <Text style={textStyle} {...textProps}>
          {title}
        </Text>
      ) : null}
    </Pressable>
  );
}

// Exports
export default DigitCard;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
