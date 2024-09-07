import { View, Text, TextInput, Pressable } from "react-native";

import EyeIcon from "@/assets/svgs/eye.svg";
import { useState } from "react";
import { CalendarIcon } from "@/constants/icons";

type InputProps = {
    label: string;
    placeholder?: string;
    isPassword?: boolean;
    isCalendar?: boolean;
};

const Input = ({ label, placeholder, isPassword = false, isCalendar = false }: InputProps) => {
    const [secureTextEntry, setSecureEntryText] = useState(isPassword);
    return (
        <View className="space-y-1.5">
            <Text className="font-satoshi_bold text-sm text-gray-dark">{label}</Text>
            <View>
                <TextInput
                    className="px-4 text-[16px] !pt-0 min-h-[48px] align-middle border border-[#D0D5DD] rounded-lg font-satoshi bg-white"
                    placeholderTextColor={"#667085"}
                    placeholder={placeholder}
                    verticalAlign="middle"
                    multiline={false}
                    textAlign="left"
                    secureTextEntry={secureTextEntry}
                />
                {isPassword && (
                    <Pressable className="absolute right-4 bottom-4" onPress={() => setSecureEntryText(!secureTextEntry)}>
                        <EyeIcon />
                    </Pressable>
                )}
                {isCalendar && (
                    <View className="absolute right-4 top-3">
                        <CalendarIcon color={"#667085"} />
                    </View>
                )}
            </View>
        </View>
    );
};

export default Input;
