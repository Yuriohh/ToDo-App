import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        padding: 24,
        backgroundColor: '#0d0d0d',
    },
    logoTitle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 48,
    },
    form: {
        flexDirection: 'row',
        marginTop: 36,
        width: '100%',
    },
    input: {
        fontSize: 16,
        padding: 16,
        borderRadius: 5,
        height: 54,
        marginRight: 4,
        flex: 1,
        backgroundColor: '#262626'
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: '#1e6f9f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    textButton: {

    },
    body: {
        flex: 1,
        backgroundColor: '#333',
        padding: 24
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    created: {
        color: '#4ea8de',
        fontSize: 16,
    },
    done: {
        color: '#8284fa',
        fontSize: 16,
    },
    emptyList: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 48,
    },
    emptyListText: {
        fontSize: 16,
        color: '#808080',
        fontWeight: 'bold'
    },
    emptyListText2: {
        fontSize: 14,
        color: '#808080'
    },
});