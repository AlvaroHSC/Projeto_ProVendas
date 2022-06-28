import React from "react";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function Login({navigation, route}) {
    return (
        <View style={styles.container} >
            <View>
                <Text style={styles.LgText}>Log in</Text>

                <TextInput style={styles.Lginput}
                placeholder="user0123@login.com">
                </TextInput>

                <TextInput style={styles.Lginput} placeholder="********"></TextInput>

                <TouchableOpacity onPress={()=>navigation.navigate("Lista")} 
                style={styles.LgButton}>
                    <Text style={styles.TextButton}>Enter</Text>
                </TouchableOpacity>
                </View>
        </View>
    );
}
