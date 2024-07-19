import {Text, View, Image, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import React from "react";

export default function signup() {
    return(
        <View>
            <Image
                source={require("@/assets/image/logo.png")}
                style={styles.container}
            />
        </View>
    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})