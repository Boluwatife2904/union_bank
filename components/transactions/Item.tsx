import { View, Text } from "react-native";

import { ArrowDownIcon, ArrowUpIcon } from "@/constants/icons";

type TransactionItem = {
    type: string;
    description: string;
    amount: string;
    time: string;
};

type Props = {
    transaction: TransactionItem;
};

const Item = ({ transaction }: Props) => {
    return (
        <View className="py-[15px] px-[10px] flex flex-row justify-between border-b border-[#F6F6F6]">
            <View className="flex flex-row items-center space-x-3">
                <View
                    className={`h-10 w-10 rounde-full flex items-center justify-center rounded-full ${transaction.type === "inflow" ? "bg-[#D3FDE9]" : "bg-[#FFE6E4]"}`}>
                    {transaction.type === "inflow" ? <ArrowDownIcon /> : <ArrowUpIcon />}
                </View>
                <Text className="text-[13px]  text-gray-dark font-satoshi_medium max-w-[130px]">{transaction.description}</Text>
            </View>
            <View>
                <Text className={`font-satoshi_medium text-sm ${transaction.type === "inflow" ? "text-[#29BD13]" : "text-[#FF3B2D]"}`}>
                    {transaction.amount}
                </Text>
                <Text className="text-xs font-satoshi text-[#667185] text-right">{transaction.time}</Text>
            </View>
        </View>
    );
};

export default Item;
