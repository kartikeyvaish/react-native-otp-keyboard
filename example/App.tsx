import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import OTPKeyboard from "react-native-otp-keyboard";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [OTP, SetOTP] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.OTP}>{`OTP is ${OTP}`}</Text>
      <OTPKeyboard
        onSubmitPress={(text: string) => console.log(text)}
        onPress={SetOTP}
        backspaceComponent={
          <Ionicons name="backspace" size={24} color="black" />
        }
        submitComponent={
          <AntDesign name="checkcircle" size={24} color="green" />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
  OTP: {
    alignSelf: "center",
    marginBottom: 150,
    fontSize: 40,
  },
});
