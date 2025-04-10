import { FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Rocket } from "../../components/Rocket";
import { To } from "../../components/To";
import { Do } from "../../components/Do";
import { Tasks } from "../../components/Tasks";
import { useState } from "react";
import { Clipboard } from "../../components/Clipboard";

export function Home() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [textTask, setTextTask] = useState('');
    const [done, setDone] = useState(0);

    function addTask() {
        setTasks((prevState) => [...prevState, textTask]);
        setTextTask('');
    }

    function handleRemove(item: string) {
        setTasks(prevState => prevState.filter((task) => task !== item));
    }

    function handleCheck(checked: boolean) {
        if (checked) {
            setDone((prevState) => prevState + 1);
        } else {
            setDone((prevState) => prevState - 1);
        }
    }

    return (
        <>
            <View style={styles.header}>
                <View style={styles.logoTitle}>
                    <Rocket style={{ marginRight: 14 }} />
                    <To />
                    <Do />
                </View>

                <View style={styles.form}>
                    <TextInput style={styles.input}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor={'#808080'}
                        onChangeText={setTextTask}
                        value={textTask}
                    />
                    <TouchableOpacity style={styles.button} onPress={addTask}>
                        <Image source={require('../../../../assets/icons/plus.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.info}>
                    <Text style={styles.created}>
                        Criadas
                        <View style={styles.badge}>
                            <Text style={styles.counter}>{tasks.length}</Text>
                        </View>
                    </Text>

                    <Text style={styles.done}>
                        Concluidas
                        <View style={styles.badge}>
                            <Text style={styles.counter}>{done}</Text>
                        </View>
                    </Text>
                </View>


                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <Tasks
                            key={item}
                            text={item}
                            check={handleCheck}
                            onRemove={() => handleRemove(item)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <>
                            <View style={styles.lineStyle}></View>
                            <View style={styles.emptyList}>
                                <Clipboard />
                                <Text style={styles.emptyListText}>Você ainda não tem tarefas cadastradas</Text>
                                <Text style={styles.emptyListText2}>Crie tarefas e organize seus itens a fazer</Text>
                            </View>
                        </>
                    )}
                />
            </View>
        </>
    )
}