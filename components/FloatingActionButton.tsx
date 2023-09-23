import { GestureResponderEvent, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

type FloatingActionButtonProps = {
    onPress: (event: GestureResponderEvent) => void,
    children: string,
    style?: StyleProp<ViewStyle>,
    disabled?: boolean | (() => boolean)
}

function FloatingActionButton({onPress, children, style, disabled = false}: FloatingActionButtonProps) {
    console.log(typeof disabled)
    return (
        <View style={[styles.view, style]}>
            <Pressable
                onPress={!(typeof disabled === "boolean" ? disabled : typeof disabled === "function" ? disabled() : true) ? onPress : null}
                style={styles.press}
                >
                    <Text style={styles.text}>{children}</Text>
                </Pressable>
        </View>
    )
}

export default FloatingActionButton;

const styles = StyleSheet.create({
    view: {
        backgroundColor: "aquamarine",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
        width: 64,
        height: 64,
        borderRadius: 15
    },
    viewDisabled: {
        backgroundColor: "aquamarine",
        opacity: 0.5,
        width: 64,
        height: 64,
        borderRadius: 15
    },
    press: {
        height: "100%",
        justifyContent: "center",
    },
    text: {
        fontSize: 36,
        textAlign: "center",
    }
})