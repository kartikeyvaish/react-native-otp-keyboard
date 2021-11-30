// Packages Imports
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

// Components Imports
import DigitCard from "./components/DigitCard";
import Row from "./components/Row";
import useTextManager from "./hooks/useTextManager";

// Configurations and Types Imports
import { OTPKeyboardProps, KeyObjectProps } from "./types/OTPKeyboard";
import {
  DEFAULT_KEYBOARD_COLOR,
  DEFAULT_KEYBOARD_HEIGHT,
  DEFAULT_KEYBOARD_WIDTH,
  DEFAULT_KEYS,
} from "./utils/DefaultValues";

// Default Render Function
function OTPKeyboard(props: OTPKeyboardProps) {
  const {
    keys = DEFAULT_KEYS,
    backspaceComponent = null,
    submitComponent = null,
    keyboardStyle,
    keyboardBackgroundColor = DEFAULT_KEYBOARD_COLOR,
    digitBoxBackgroundColor,
    digitColor,
    height = DEFAULT_KEYBOARD_HEIGHT,
    width = DEFAULT_KEYBOARD_WIDTH,
    onPress,
    onSubmitPress,
    maxLength,
    digitBoxStyle,
  } = props;

  // Custom Hook to handle the text changes and callbacks
  const { onBackSpacePress, onKeyPress, onSubmit } = useTextManager({
    maxLength,
    onPress,
    onSubmitPress,
  });

  // Check if keys array is valid
  if (keys.length !== 10) return null;

  // Styles for the container
  const containerStyle: StyleProp<ViewStyle> = [
    { backgroundColor: keyboardBackgroundColor, height: height, width: width },
    keyboardStyle,
  ];

  // Render the keyboard
  return (
    <View style={containerStyle}>
      {/* First Row with three keys */}
      <Row>
        {keys.slice(0, 3).map((label: KeyObjectProps, itemIndex: number) => (
          <DigitCard
            key={itemIndex}
            backgroundColor={digitBoxBackgroundColor}
            color={digitColor}
            onPress={() => onKeyPress(label.title)}
            style={digitBoxStyle}
            {...label}
          />
        ))}
      </Row>

      {/* Second Row with three keys */}
      <Row>
        {keys.slice(3, 6).map((label: KeyObjectProps, itemIndex: number) => (
          <DigitCard
            key={itemIndex}
            {...label}
            backgroundColor={digitBoxBackgroundColor}
            color={digitColor}
            onPress={() => onKeyPress(label.title)}
            style={digitBoxStyle}
          />
        ))}
      </Row>

      {/* Third Row with three keys */}
      <Row>
        {keys.slice(6, 9).map((label: KeyObjectProps, itemIndex: number) => (
          <DigitCard
            key={itemIndex}
            {...label}
            backgroundColor={digitBoxBackgroundColor}
            color={digitColor}
            onPress={() => onKeyPress(label.title)}
            style={digitBoxStyle}
          />
        ))}
      </Row>

      {/* Fourth Row with three keys */}
      <Row>
        <DigitCard
          customComponent={backspaceComponent}
          backgroundColor={digitBoxBackgroundColor}
          color={digitColor}
          onPress={onBackSpacePress}
          style={digitBoxStyle}
        />
        <DigitCard
          {...keys[9]}
          backgroundColor={digitBoxBackgroundColor}
          color={digitColor}
          onPress={() => onKeyPress(keys[9].title)}
          style={digitBoxStyle}
        />
        <DigitCard
          customComponent={submitComponent}
          backgroundColor={digitBoxBackgroundColor}
          color={digitColor}
          onPress={onSubmit}
          style={digitBoxStyle}
        />
      </Row>
    </View>
  );
}

// Exports
export const DefaultWidth = DEFAULT_KEYBOARD_WIDTH;
export const Keys = DEFAULT_KEYS;
export default OTPKeyboard;
