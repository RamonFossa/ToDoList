import { styles } from './style';
import { View, Image, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { useState, useEffect }  from "react";

export function Home() {
    const [inputIsFocused, setInputIsFocused] = useState(false);
    const [inputText , setInputText] = useState('');

    useEffect(() => {
        setInputIsFocused(inputText.length > 0)
    }, [inputText])

    return (
        <>
        <KeyboardAvoidingView style={{ flex: 1 }}
            enabled={false}
        >
                <View style={styles.logoContainer}>
                    <Image source={require('../../../assets/Logo.png')} />
                </View>
                <View style={styles.contentContainer}>

                </View>
                <View style={styles.inputAbsoluteContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput 
                        style={inputStyle(inputIsFocused)} 
                        selectionColor='#5E60CE'
                        placeholderTextColor='#808080' 
                        placeholder='Adicione uma nova tarefa'
                        underlineColorAndroid="transparent"
                        onChangeText={setInputText}
                         />
                        <TouchableOpacity style={styles.inputButton} activeOpacity={0.6} onPress={() => console.log("FOI")}>
                            <Image source={require('../../../assets/plus.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

const inputStyle = (isFocused: boolean) => {
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