import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    name: string;
    onRemove: () => void;
}

export function Tasks({ name, onRemove }: Props) {
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
        </View>
    );
}