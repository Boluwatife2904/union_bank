import { Text, Pressable } from "react-native";

type ButtonProps = {
    text: string;
    onPress: () => void;
};

const Button = ({ text, onPress }: ButtonProps) => {
    return (
        <Pressable className="bg-primary w-full min-h-[52px] flex items-center justify-center rounded-lg" onPress={onPress}>
            <Text className="text-[#fff] text-base font-satoshi_bold">{text}</Text>
        </Pressable>
    );
};

export default Button;
