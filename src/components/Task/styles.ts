import { StyleSheet } from "react-native";

export const textStyle = (done: boolean) => {
    return done ? {
        color: '#808080',
        textDecorationLine: 'line-through'
    } :
    {
        color: '#F2F2F2'
    }
}

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#262626',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
        marginBottom: 10,
        borderRadius: 10
    },
    toogleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30
    },
    textContainer: {
        width: '75%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#F2F2F2'
    },
    trashButton: {
        width: 40,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});