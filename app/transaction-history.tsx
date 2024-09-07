import { Stack } from "expo-router";
import { View, Pressable } from "react-native";

import AndroidSafeArea from "@/components/layout/AndroidSafeArea";
import PageHeader from "@/components/navigation/PageHeader";

import TransactionsHistory from "@/components/transactions/History";
import SearchInput from "@/components/common/SearchInput";

import { FilterIcon } from "@/constants/icons";

const Page = () => {
    return (
        <AndroidSafeArea>
            <Stack.Screen options={{ headerShown: false }} />
            <PageHeader title="Transaction History" />
            <View className="flex-1 px-5" style={{ gap: 24 }}>
                <View className="max-h-12 flex flex-row space-x-3">
                    <SearchInput />
                    <Pressable className="shrink-0 h-12 w-12 flex items-center justify-center border border-[#D0D5DD] rounded-lg">
                        <FilterIcon />
                    </Pressable>
                </View>
                <TransactionsHistory />
            </View>
        </AndroidSafeArea>
    );
};

export default Page;
