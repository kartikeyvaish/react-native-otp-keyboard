import { Dimensions } from "react-native";
import { KeyObjectProps } from "../types/OTPKeyboard";

const { width, height } = Dimensions.get("window");

export const DEFAULT_KEYBOARD_HEIGHT = Math.floor(height * 0.4);
export const DEFAULT_KEYBOARD_WIDTH = width;
export const DEFAULT_KEYBOARD_COLOR = "white";

export const DEFAULT_KEYS: KeyObjectProps[] = [
    {
        title: "1",
    },
    {
        title: "2",
    },
    {
        title: "3",
    },
    {
        title: "4",
    },
    {
        title: "5",
    },
    {
        title: "6",
    },
    {
        title: "7",
    },
    {
        title: "8",
    },
    {
        title: "9",
    },
    {
        title: "0",
    },
];
