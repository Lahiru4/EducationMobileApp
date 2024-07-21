import {Text, View, Image, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useRouter} from 'expo-router';

export default function signup() {
    const router = useRouter();
    return (
        <View style={[{
            flex: 1,
            alignItems: 'center'
        }]}>
            <Image
                source={require("@/assets/image/logo.png")}
                style={styles.container}
            />
            <Text style={styles.signup}>Sign up</Text>


            <View style={styles.inputContaioner}>
                <MaterialCommunityIcons
                    name="account-lock"
                    size={24}
                    style={{marginLeft: 10}}
                    color='#0F0C80'
                />
                <TextInput placeholder="Full Name" placeholderTextColor="#0F0C80" style={styles.input}
                />
            </View>

            <View style={styles.inputContaioner}>
                <MaterialCommunityIcons
                    name="account-lock"
                    size={24}
                    style={{marginLeft: 10}}
                    color='#0F0C80'
                />
                <TextInput placeholder="Email" placeholderTextColor="#0F0C80" style={styles.input}
                />
            </View>
            <View style={styles.inputContaioner}>
                <MaterialCommunityIcons
                    name="account-lock"
                    size={24}
                    style={{marginLeft: 10}}
                    color='#0F0C80'
                />
                <TextInput placeholder="Password" placeholderTextColor="#0F0C80" style={styles.input}
                />
            </View>

            <View style={styles.inputContaioner}>
                <MaterialCommunityIcons
                    name="account-lock"
                    size={24}
                    style={{marginLeft: 10}}
                    color='#0F0C80'
                />
                <TextInput placeholder="Confirm Password" placeholderTextColor="#0F0C80" style={styles.input}
                />
            </View>
            <TouchableOpacity style={[{
                backgroundColor: "#2ECC71",
                width: '90%',
                height: 50,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20
            }]}>
                <Text style={[{color: "#FFFFFF", textAlign: 'center', fontSize: 15}]}>
                    Sign up
                </Text>
            </TouchableOpacity>

            <Text style={[{marginTop: 50, color: '#0F0C80', justifyContent: 'center', alignItems: 'center'}]}>
                Already have an account ?
                <Text style={[{color: '#0F0C80', fontWeight: 'bold'}]}
                      onPress={() => router.push('/home')}>
                    Sing In
                </Text>
            </Text>

        </View>
    );
}
const styles = StyleSheet.create({
    signup: {
        fontSize: 35,
        color: "#0F0C80",
        alignSelf: 'flex-start',
        marginLeft: 20,
        fontWeight: 'bold',
        marginTop:30
    },
    container: {
        alignSelf: 'center',
        marginTop: 100,
    },
    input: {
        width: '80%',
        height: 50,
        flex: 1,
        marginLeft: 10,
    },
    inputContaioner: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#0F0C80',
        borderRadius: 15,
        width: '90%',
        marginTop: 20
    }
})