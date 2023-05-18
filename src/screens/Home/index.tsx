import { styles, inputStyle } from './style';
import { View, Image, TextInput, Text, KeyboardAvoidingView, TouchableOpacity, FlatList, Alert, Platform } from 'react-native';
import { useState, useEffect }  from "react";
import { EmptyContent } from '../../components/EmptyContent';
import { Task } from '../../components/Task';
import { localStorage } from '../../services/localStorage';

type Task = {
    done: boolean;
    description: string;
    id: string;
}

export function Home() {
    const [inputIsFocused, setInputIsFocused] = useState(false);
    const [inputText , setInputText] = useState('');
    const [createdTasks , setCreatedTasks] = useState(0);
    const [concludedTasks , setConcludedTasks] = useState(0);
    const [id , setId] = useState(0);
    const [tasks , setTasks] = useState<Task[]>([]);
    
    const addNewTask = (tasksList: Task[]) => {
        setTasks(tasksList);
        localStorage.storeData(tasksList, '@tasks');
    }

    const addId = (id: number) => {
        setId(id);
        localStorage.storeData(id, '@id');
    }

    const fetchData = async () => {
        const tasks: Task[] | null = await localStorage.getData('@tasks');
        const id: number | null  = await localStorage.getData('@id');
        if(tasks == (null)) return
        setTasks(tasks)
        
        if(id == (null)) return
        setId(id);

        console.log(tasks);
        console.log(id);
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        setInputIsFocused(inputText.length > 0);
    }, [inputText])

    useEffect(() => {
        setCreatedTasks(tasks.length);
        let concluded = 0;
        tasks.forEach(task => {
            if(task.done) concluded++;
        });
        setConcludedTasks(concluded);
    }, [tasks]);

    const newTask = (done: boolean, description: string, id: string) => {
        return {
            done: done,
            description: description,
            id: id,
        }
    }

    const handleAddTask = () => {
        if (inputText.length <= 1) return Alert.alert('Digite uma task válida');
        addNewTask([...tasks, newTask(false, inputText.trim(), `${id}`)]);
        setInputText('');
        addId(id + 1);
    }

    const handleDelTask = (clickedIndex: number) => {
        const newTasks = tasks.filter((item, index) => index != clickedIndex);
        addNewTask(newTasks);
    }

    const handleToogleTask = (clickedIndex: number) => {
        const newTasks = tasks.map((item, index) => index != clickedIndex ? item : newTask(!item.done, item.description, item.id));
        addNewTask(newTasks);
    }

    return (
        <>
            <KeyboardAvoidingView enabled={false} style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={-50}>
                <View style={styles.logoContainer}>
                    <Image source={require('../../../assets/Logo.png')} />
                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.progressionContainer}>
                        <View style={styles.createdContainer}>
                            <Text style={styles.createdText}>
                                Criadas
                            </Text>

                            <View style={styles.createdCounterContainer}>
                                <Text style={styles.createdCounterText}>{createdTasks}</Text>
                            </View>
                        </View>
                        
                        <View style={styles.concludedContainer}>
                            <Text style={styles.concludedText}>
                                Concluídas
                            </Text>

                            <View style={styles.createdCounterContainer}>
                                <Text style={styles.createdCounterText}>{concludedTasks}</Text>
                            </View>
                        </View>
                    </View>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        style={{marginTop: 5}}
                        data={tasks}
                        keyExtractor={task => task.id}
                        renderItem={({item, index}) => (
                            <Task
                                key={item.id} 
                                description={item.description}
                                done={item.done}
                                onDelete={() => handleDelTask(index)}
                                onToogle={() => handleToogleTask(index)}
                            />
                        )}
                        ListEmptyComponent={() => (
                            <EmptyContent />
                        )}
                    />
                </View>
            </KeyboardAvoidingView>

            <View style={styles.inputAbsoluteContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput 
                        style={inputStyle(inputIsFocused)} 
                        selectionColor='#5E60CE'
                        placeholderTextColor='#808080' 
                        placeholder='Adicione uma nova tarefa'
                        underlineColorAndroid="transparent"
                        onChangeText={setInputText}
                        value={inputText}
                         />
                        <TouchableOpacity style={styles.inputButton} activeOpacity={0.6} onPress={handleAddTask}>
                            <Image source={require('../../../assets/plus.png')}/>
                        </TouchableOpacity>
                    </View>
            </View>
        </>
    )
}