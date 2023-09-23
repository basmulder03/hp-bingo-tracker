import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";

type CounterProps = {
    
}

export default function Counter() {
    const [count, setCount] = useState(0)

    const incrementCounter = () => setCount(count + 1);
    const decrementCounter = () => setCount(count - 1);

    return (
        <View style={styles.view}>
            <View style={styles.textView}>
                <Text style={styles.text}>{count}</Text>
            </View>
            <View style={styles.buttonView}>
                <Button onPress={incrementCounter}>+</Button>
                <Button onPress={decrementCounter} disabled={count <= 0}>-</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    textView: {
        marginEnd: 8
    },
    text: {
        fontSize: 28,
        textAlign: "right"
    },
    buttonView: {
      display: "flex",
      flexDirection: "row",
    }
});