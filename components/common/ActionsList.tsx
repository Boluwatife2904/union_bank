import { View, Text, Pressable, FlatList, ScrollView } from "react-native";
import React, { ReactNode } from "react";

type List = {
    icon: ReactNode;
    title: string;
    href: string;
};

type ListProps = {
    list: List[];
};

const ActionsList = ({ list }: ListProps) => {
    return (
        <ScrollView
            className="flex-1 px-4"
            contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", columnGap: 30, rowGap: 34 }}
            showsVerticalScrollIndicator={false}>
            {list.map((item, index) => (
                <Pressable key={index} className="items-center basis-[18] justify-center space-y-1.5">
                    <View className="h-[60px] w-[60px] rounded-full flex items-center justify-center bg-[#F0FAFF]">{item.icon}</View>
                    <Text className="text-xs text-gray-dark font-satoshi_medium text-center">{item.title}</Text>
                </Pressable>
            ))}
        </ScrollView>
    );
};

export default ActionsList;
