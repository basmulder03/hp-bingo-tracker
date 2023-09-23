import {Slot, router} from "expo-router";
import { View, StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import FloatingActionButton from "../components/FloatingActionButton";

export default function Layout() {
    const goBack = () => {
        if (router.canGoBack()) router.back();
    }

    return (
        <>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <FloatingActionButton disabled={() => router.canGoBack()} onPress={goBack} style={{backgroundColor: "transparent", shadowColor: "transparent"}}>🔙</FloatingActionButton>
                </View>
                <Slot />
            </SafeAreaView>
            <StatusBar />
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        margin: 0,
        height: 64,
        borderColor: "lightgray",
        borderWidth: 2
    },
    safeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})