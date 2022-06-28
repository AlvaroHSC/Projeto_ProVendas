import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingTop: 60,
    },    
    CdText: {
        fontSize: 28,
        fontFamily: "sans-serif-light",

        marginLeft: 12,
    },
    Cdinput: {
        width: "90%",
        borderBottomColor: "#000000",
        borderWidth: 1,
        backgroundColor: "#ffffff",
        height: 40,
        margin: 12,
        paddingLeft:10,
    },
    CdButton: {
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#000000",
        paddingTop: 12,
        paddingBottom: 12,
        marginLeft: 12,
        marginTop: 10, 
    },
    TextButton:{
        color: "#ffffff",
        fontSize: 18
    }
});

export default styles