import { View, FlatList, Text } from "react-native";
import { Stack } from "expo-router";

import AndroidSafeArea from "@/components/layout/AndroidSafeArea";
import PageHeader from "@/components/navigation/PageHeader";
import SearchInput from "@/components/common/SearchInput";

import { beneficiaries } from "@/constants/data";

import { ThreeDotsIcon } from "@/constants/icons";

const Page = () => {
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <AndroidSafeArea>
                <PageHeader title="Beneficiaries" />
                <View className="flex-1 px-5 space-y-4">
                    <SearchInput placeholder="Search for a Beneficiary" />
                    <FlatList
                        scrollEnabled
                        showsVerticalScrollIndicator={false}
                        className="flex-1 h-full shrink-"
                        data={beneficiaries}
                        renderItem={({ item }) => (
                            <View className="flex items-center justify-between flex-row py-3 px-[10px] border-b border-[#F6F6F6]">
                                <View className="flex flex-row gap-x-3 items-center">
                                    <View className="h-12 w-12 rounded-full bg-[#F0FAFF] flex items-center justify-center">
                                        <Text className="text-xs font-satoshi_bold text-gray-dark">{item.initials}</Text>
                                    </View>
                                    <View>
                                        <Text className="font-satoshi_medium text-[13px] text-gray-dark">{item.name}</Text>
                                        <Text className="font-satoshi_medium text-[#667085] capitalize text-[10px]">
                                            {item.bank} | {item.accountNumber}
                                        </Text>
                                    </View>
                                </View>
                                <ThreeDotsIcon />
                            </View>
                        )}
                    />
                </View>
            </AndroidSafeArea>
        </>
    );
};

export default Page;
