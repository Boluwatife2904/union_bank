import { Pressable, ScrollView, Text, View } from "react-native";

import AndroidSafeArea from "@/components/layout/AndroidSafeArea";
import PageHeader from "@/components/navigation/PageHeader";

import { BankIcon, ATMIcon, CaretRightIcon } from "@/constants/icons";

const findUs = [
    { icon: <BankIcon />, title: "Branches" },
    { icon: <ATMIcon />, title: "Atm Machine" },
    { icon: <ATMIcon />, title: "Smart Banking/ Envelope deposit centre" },
];

const FindUsPage = () => {
    return (
        <AndroidSafeArea>
            <PageHeader title="Find Us" />
            <ScrollView className="flex-1 px-4">
                {findUs.map((item, index) => (
                    <Pressable key={index} className="py-3 pr-2 border-b border-[#F2F2F2] flex justify-between items-center flex-row">
                        <View className="flex space-x-3 flex-row items-center">
                            <View className="h-12 w-12 bg-[#F0FAFF] rounded-full flex items-center justify-center">{item.icon}</View>
                            <Text className="text-sm font-satoshi_medium text-gray-dark max-w-[166px]">{item.title}</Text>
                        </View>
                        <CaretRightIcon />
                    </Pressable>
                ))}
            </ScrollView>
        </AndroidSafeArea>
    );
};

export default FindUsPage;
