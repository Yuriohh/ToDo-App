import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        marginTop: 10,
        backgroundColor: '#333333',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textTask: {
        width: '80%',
        color: '#f2f2f2',
        marginTop: 8
    },
    checked: {
        textDecorationLine: 'line-through',
        color: '#808080'
    },
    unChecked: {
        textDecorationLine: 'none'
    }
});