import React from "react";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function Cadastro({navigation, route}) {
    return (
        <View style={styles.container} >
            <View>
                <Text style={styles.CdText}>Adicionar Promotor</Text>

                
                <TextInput style={styles.Cdinput} placeholder="Nome"></TextInput>

                
                <TextInput style={styles.Cdinput} placeholder="Telefone"></TextInput>

                <TextInput style={styles.Cdinput}
                placeholder="Email">
                </TextInput>

                <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={styles.CdButton}>
                    <Text style={styles.TextButton}>Adicionar</Text>
                </TouchableOpacity>
                </View>
        </View>
    );
}
