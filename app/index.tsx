import React from "react";
import {Text, View, Image, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {useRouter} from 'expo-router';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {homedir} from "node:os";

export default function Login() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Image
                source={require("@/assets/image/logo.png")}
                style={styles.logo}
            />
            <Text style={styles.signin}>Sign in</Text>
            <View style={styles.inputContaioner}>
                <MaterialCommunityIcons
                    name="account-circle-outline"
                    size={24}
                    style={{marginLeft: 10}}
                    color='#0F0C80'
                />
                <TextInput placeholder="Email or User Name" placeholderTextColor="#0F0C80" style={styles.input}
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
                <MaterialCommunityIcons
                    name="eye-outline"
                    size={24}
                    style={{marginRight: 10}}
                    color='#777777'
                />
            </View>
            <Text style={[{
                fontSize: 14,
                color: "#0F0C80",
                alignSelf: 'flex-end',
                margin: 10,
                fontWeight: 'bold',
                marginTop: 20
            }]}>Forget Password ?</Text>

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
                    Sign in
                </Text>
            </TouchableOpacity>

            <Text style={[{marginTop: 25}]}>Or sign in With</Text>

            <TouchableOpacity style={[{flexDirection: 'row', marginTop: 20}]}>
                <TouchableOpacity style={[{
                    backgroundColor: '#FFFFFF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    margin: 20,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5
                }]}>
                    <Image
                        source={require("@/assets/image/google.png")}
                        style={[{width: 30, height: 30}]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[{
                    backgroundColor: '#FFFFFF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    margin: 20,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5
                }]}>
                    <Image
                        source={require("@/assets/image/facebook.png")}
                        style={[{width: 30, height: 30}]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[{
                    backgroundColor: '#FFFFFF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    margin: 20,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5
                }]}>
                    <Image
                        source={require("@/assets/image/twitter.png")}
                        style={[{width: 30, height: 30}]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[{
                    backgroundColor: '#FFFFFF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    margin: 20,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5
                }]}>
                    <Image
                        source={require("@/assets/image/linkedin-icon.png")}
                        style={[{width: 30, height: 30}]}
                    />
                </TouchableOpacity>
            </TouchableOpacity>
            <Text style={[{marginTop: 20, color: '#0F0C80'}]}>
                Don’t have account ?
                <Text style={[{color: '#0F0C80', fontWeight: 'bold'}]}
                      onPress={() => router.push('/signup')}>
                    Sing Up
                </Text>
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginTop: 20
    },
    signin: {
        fontSize: 35,
        color: "#0F0C80",
        alignSelf: 'flex-start',
        marginLeft: 20,
        fontWeight: 'bold'
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
});
