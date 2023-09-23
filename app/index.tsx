import {View, Text, StyleSheet} from "react-native";
import Button from "../components/Button";
import { router } from "expo-router";

export default function HomePage() {
    const createNewCounterList = () => {
        router.push("/create")
    }

    const viewPreviousLists = () => {
        router.push("/archive")
    }

    return (
        <View style={styles.view}>
            <Button onPress={createNewCounterList}>Create New Counter List</Button>
            <Button onPress={viewPreviousLists}>View Previous Lists</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center"
    }
})