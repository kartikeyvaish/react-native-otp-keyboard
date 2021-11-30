// Create Types here and export them

import { ColorValue, FlexStyle, StyleProp, TextProps, ViewStyle } from "react-native";

export interface RowTypes {
    children?: React.ReactNode;
}

export interface KeyObjectProps {
    /**
        * The title digit to display.
        * For Example `1` or `2` etc.
        * Can be a string or number.
        * Generally, it is a number denoting the key number.
    */
    title?: string,
    /**
     * Custom Component to display in place of a digit
    */
    customComponent?: React.ReactNode;
    /**
     * Background Color of the digit box
    */
    backgroundColor?: ColorValue | string;
    /**
     * Text color of the title label
    */
    color?: ColorValue | string;
    /**
     * Use this property to customize the `Text` component.
    */
    textProps?: TextProps;

    /**
     * Callback function to be called when the key is pressed.
    */
    onPress?: any

    /**
     * Provide desired style to the digit Box
     * 
    **/
    style?: StyleProp<ViewStyle>;
}

export interface OTPKeyboardProps {
    /**
     * If you want to manipulate the keyboard digits, you can use this prop. Usage:
     * 
     * this prop takes an array of objects.
     * an Item looks like this
     * ```javascript
     *  title: "1",
        backgroundColor: 'red',
        color: 'white',
        textProps: {
            style: {
                fontFamily: "Mulish"
            }
        }
       ```

       Keys should be placed in order. First element of the array is the firs element of 1st row and so on.

       Whole Default array looks like this

       ```javascript
       [
            {
                title: "1",
                backgroundColor: 'red',
                color: 'white',
                textProps: {
                    style: {
                        fontFamily: "Mulish"
                    }
                }
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
        ]
    ```
    */
    keys?: KeyObjectProps[];

    /**
     * Backspace component to place. Default is `null`
     * 
    **/
    backspaceComponent?: React.ReactNode;

    /**
     * Submit component to place. Default is `null`
     * 
    **/
    submitComponent?: React.ReactNode;

    /**
     * Provide desired style to the keyboard container.
     * 
    **/
    keyboardStyle?: StyleProp<ViewStyle>;

    /**
     * Provide desired style to the digit Box
     * 
    **/
    digitBoxStyle?: StyleProp<ViewStyle>;

    /**
     * Supply a background Color to the keyboard. Defaults to `#D4F1F4`
     * 
    **/
    keyboardBackgroundColor?: ColorValue | string;

    /**
     * Supply a background Color to all the digit boxes. Defaults to `white`
     * 
    **/
    digitBoxBackgroundColor?: ColorValue | string;

    /**
     * Supply a color to the text of the digit boxes. Defaults to `black`
     * 
    **/
    digitColor?: ColorValue | string;

    /**
     * Width of the keyboard container. Defaults to the total width of the screen.
     * 
    **/
    width?: FlexStyle["width"];

    /**
     * Height of the keyboard container. Defaults to 40% of the total height of the screen.
     * 
    **/
    height?: FlexStyle["height"];

    /**
     * Callback function to be called when the key is pressed.
    */
    onPress?: any

    /**
     * Callback function to be called when the submit button is pressed.
    */
    onSubmitPress?: any

    /**
     * Max length of the input. Default is `null`
    */
    maxLength?: number;
}

export interface OTPKeyboardHookProps {
    /**
     * Max length of the input. Default is `null`
    */
    maxLength?: number;

    /**
     * Callback function to be called when the key is pressed.
    */
    onPress?: any

    /**
     * Callback function to be called when the submit button is pressed.
    */
    onSubmitPress?: any
}