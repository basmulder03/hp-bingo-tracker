import { GestureResponderEvent, Pressable, StyleSheet, View, Text } from "react-native";

type ButtonProps = {
    onPress: ((event: GestureResponderEvent) => void),
    children: string,
    disabled?: boolean
}

function Button({onPress, children, disabled = false}: ButtonProps) {
    return (
        <View style={{...styles.view, ...styles[!disabled ? "viewActive" : "viewDisabled"]}}>
            <Pressable
                onPress={!disabled ? onPress : null}
                style={styles.pressable}
                >
                    <Text
                        style={styles.text}
                    >{children}</Text>
            </Pressable>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    view: {
        backgroundColor: "aquamarine",
        borderRadius: 5,
        margin: 8,
        flex: 1,     
    },
    viewActive: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5
    },
    viewDisabled: {
        opacity: 0.5,
    },
    pressable: {
        margin: 4,
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "black",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
    }
})