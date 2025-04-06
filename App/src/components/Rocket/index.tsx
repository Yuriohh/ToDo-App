import { Image } from "react-native";

type Props = {
    style: object
}

export const Rocket = ({ style }: Props) => {
    return (
        <Image source={require('../../../../assets/icons/rocket.png')} style={style} />
    );
}