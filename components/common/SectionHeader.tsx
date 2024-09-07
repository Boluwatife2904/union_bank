import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

interface Props {
    title: string;
    to: string;
}

const SectionHeader = ({ title, to }: Props) => {
    const router = useRouter();
    return (
        <View className="flex flex-row items-end justify-between">
            <Text className="font-satoshi_bold text-base text-gray-dark">{title}</Text>
            <TouchableOpacity onPress={() => router.push(`/${to}`)}>
                <Text className="text-primary font-satoshi_medium text-xs">View More</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SectionHeader;
