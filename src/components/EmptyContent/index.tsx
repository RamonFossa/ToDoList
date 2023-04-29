import { View, Text, Image } from "react-native"
import { styles } from './styles'

export function EmptyContent() {
    
    return (
        <>
            <View style={styles.line}/>
            <View style={styles.container}>
                <Image source={require('../../../assets/Clipboard.png')} />
                <Text style={styles.firstText}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.secondText}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
        </>
    )
}