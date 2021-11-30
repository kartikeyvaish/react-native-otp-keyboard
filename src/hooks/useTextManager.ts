/*
    This is a custom hook which takes care of handling the input.

    It takes three things as props:
        - maxLength: the max length of the input provided by user
        - onPress: the callback function provided by user to be called when the key is pressed
        - onSubmitPress: the callback provided by user function to be called when the submit button is pressed

    It returns three values: 
        - `onKeyPress`: callback function to be called when the key is pressed.
        - `onBackSpacePress`: callback function to be called when the backspace key is pressed.
        - `onSubmit`: callback function to be called when the submit button is pressed.

*/

// Packages imports
import { useRef } from "react";

// Configs and types imports
import { OTPKeyboardHookProps } from "../types/OTPKeyboard";

// Hooks imports
export default function useTextManager({ maxLength, onPress, onSubmitPress }: OTPKeyboardHookProps) {
    // Local Variable for the input value
    const OTP = useRef<string>("");

    // Callback fired on press of a key
    const onKeyPress = (text: string | undefined) => {
        try {
            if (maxLength && OTP.current.length >= maxLength) return;

            if (text) {
                OTP.current = OTP.current + text;
                if (typeof onPress === "function") onPress(OTP.current);
            }
        } catch (error) { }
    };

    // Callback fired on backspace press
    const onBackSpacePress = () => {
        try {
            OTP.current = OTP.current.slice(0, -1);
            if (typeof onPress === "function") onPress(OTP.current);
        } catch (error) { }
    };

    // Callback fired on submit press
    const onSubmit = () => {
        try {
            if (typeof onSubmitPress === "function") onSubmitPress(OTP.current);
        } catch (error) { }
    };

    // Exporting the callbacks here
    return {
        onKeyPress,
        onBackSpacePress,
        onSubmit
    };

}