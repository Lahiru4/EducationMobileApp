import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";


class Dashboard extends Component {
    render() {
        return (
            <View>
                <View style={styles.heder}>
                    <Image
                        source={require("@/assets/image/logo_02.png")}
                        style={styles.logo}
                    />
                    <View style={[{flexDirection: 'row', marginTop: '-10%', marginLeft: '80%'}]}>
                        <MaterialCommunityIcons
                            name="bell-outline"
                            size={30}
                            color='#FFFFFF'
                        />
                        <MaterialCommunityIcons
                            name="account-circle-outline"
                            size={30}
                            color='#FFFFFF'
                        />
                    </View>
                    <View style={styles.inputContaioner}>
                        <TextInput placeholder="Search Courses " placeholderTextColor="#0F0C80"
                                   style={styles.inputSearch}
                        />
                        <MaterialCommunityIcons
                            name="comment-search-outline"
                            size={24}
                            style={{marginRight: 10}}
                            color='#777777'
                        />
                    </View>
                </View>
                <Text style={[{textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#333333'}]}>Course</Text>

                <View style={[{flexDirection: 'row',marginRight:70}]}>
                    <View style={[{width: '5%', flex: 1 }]}>
                        <Image
                            source={require("@/assets/tempImage/java.png")}
                            style={styles.logo}
                        />
                        <Text style={[{color: '#FFFFFF', marginTop: -30, marginLeft: 30, fontWeight: 'bold'}]}>
                            Java prf</Text>
                    </View>
                    <View style={[{width: '5%', flex: 1}]}>
                        <Image
                            source={require("@/assets/tempImage/java.png")}
                            style={styles.logo}
                        />
                        <Text style={[{color: '#FFFFFF', marginTop: -30, marginLeft: 30, fontWeight: 'bold'}]}>
                            oop</Text>
                    </View>
                </View>

                <View style={[{flexDirection: 'row',marginRight:70}]}>
                    <View style={[{width: '5%', flex: 1}]}>
                        <Image
                            source={require("@/assets/tempImage/java.png")}
                            style={styles.logo}
                        />
                        <Text style={[{color: '#FFFFFF', marginTop: -30, marginLeft: 30, fontWeight: 'bold'}]}>
                            Java Methode</Text>
                    </View>
                    <View style={[{width: '5%', flex: 1}]}>
                        <Image
                            source={require("@/assets/tempImage/java.png")}
                            style={styles.logo}
                        />
                        <Text style={[{color: '#FFFFFF', marginTop: -30, marginLeft: 30, fontWeight: 'bold'}]}>
                            Java Arrys</Text>
                    </View>
                </View>

            </View>
        );
    }
}

export default Dashboard;

const styles = StyleSheet.create({
    heder: {
        backgroundColor: '#0F0C80',
        width: '100%',
        height: 200,
        borderStyle: 'solid',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    logo: {
        marginTop: 30,
        marginLeft: 18
    },
    inputContaioner: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#0F0C80',
        borderRadius: 15,
        width: '90%',
        marginTop: 30,
        backgroundColor: '#ffffff',
        alignSelf: 'center'

    },
    inputSearch: {
        width: '100%',
        height: 50,
        flex: 1,
        marginLeft: 10,
        fontSize: 15,
        borderStyle: 'solid',
        borderColor: '#0F0C80'
    }

})