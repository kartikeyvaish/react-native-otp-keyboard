// Packages Impports
import React from "react";
import { View, StyleSheet } from "react-native";

// Configs and Types Imports
import { RowTypes } from "../types/OTPKeyboard";

// Render Default function
function Row({ children }: RowTypes) {
  return <View style={styles.container}>{children}</View>;
}

// Exports
export default Row;

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row" },
});
