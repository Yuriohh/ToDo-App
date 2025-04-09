import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Trash } from "../Trash";

type Props = {
    text: string;
    onRemove: () => void;
    check: any
}

export function Tasks({ text, onRemove, check }: Props) {
    const [checked, setChecked] = useState(false);
    function handleCheck(checked: boolean) {
        setChecked(checked);
        check(checked);
    }

    return (
        <View style={styles.container}>
            <BouncyCheckbox
                isChecked={checked}
                useBuiltInState={false}
                fillColor="#5e60ce"
                innerIconStyle={{ borderWidth: 1, borderColor: !checked ? '#4ea8de' : '#5e60ce' }}
                onPress={(checked) => handleCheck(!checked)}
            />
            <Text style={[styles.textTask, styles[checked ? 'checked' : 'unChecked']]}>{text}</Text>
            <Pressable onPress={onRemove}>
                <Trash />
            </Pressable>
        </View>
    );
}