import { StyleSheet } from "react-native";

export const inputStyle = (isFocused: boolean) => {
    const border = isFocused ? 1: 0;
    return {
        flex: 1,
        backgroundColor: '#262626',
        color: '#FFF',
        borderRadius: 6,
        padding: 12,
        fontSize: 16,
        borderWidth: border,
        borderColor: '#5E60CE',
    }
}

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
        top: 125,
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
        padding: 30
    },
    progressionContainer: {
        height: 52,
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    createdContainer: {
        flexDirection: "row",
        width: 87,
        height: 19,
        justifyContent: 'space-between'
    },

    createdText: {
        color: '#4EA8DE',
        fontWeight: 'bold',
    },

    concludedContainer: {
        flexDirection: "row",
        width: 111,
        height: 19,
        justifyContent: 'space-between'
    },
    concludedText: {
        color: '#5E60CE',
        fontWeight: 'bold',
    },
    createdCounterContainer: {
        width: 22,
        height: 20,
        backgroundColor: '#262626',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    createdCounterText: {
        color: '#FFF'
    },

    line: {
        marginTop: 5,
        width: '100%',
        height: 2,
        backgroundColor: '#333333'
    },
})