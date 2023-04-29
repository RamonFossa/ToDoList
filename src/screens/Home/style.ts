import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    logoContainer: {
        flex: 20,
        backgroundColor: '#0D0D0D',
        justifyContent: 'center',
        alignItems:'center',
    },
    inputAbsoluteContainer: {
        position:'absolute',
        width: '90%',
        left: 20,
        right: 20,
        top: 140,
        paddingHorizontal: 10
    },
    inputContainer: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputButton: {
        backgroundColor: '#4EA8DE',
        borderRadius: 10,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8
    },
    contentContainer: {
        flex: 80,
        backgroundColor: '#1A1A1A',
    }
})