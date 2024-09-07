import { View, Text, SectionList, SafeAreaView } from "react-native";

import { transactions } from "@/constants/data";

import  TransactionItem  from "./Item";

const History = () => {
    return (
        <SectionList
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled
            sections={transactions}
            keyExtractor={(item, index) => item.amount + index}
            renderSectionHeader={({ section }) => (
                <View className="py-2 border-b border-[#F6F6F6] bg-white">
                    <Text className="text-xs font-satoshi_medium text-[#3D3D3D]">{section.title}</Text>
                </View>
            )}
            renderItem={({ item }) => <TransactionItem transaction={item} />}
            renderSectionFooter={() => <View className="h-2"></View>}
        />
    );
};

export default History;
