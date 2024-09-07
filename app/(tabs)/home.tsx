import { View, Text, Pressable, ScrollView, FlatList, TouchableOpacity } from "react-native";

import AndroidSafeArea from "@/components/layout/AndroidSafeArea";
import SectionHeader from "@/components/common/SectionHeader";
import TransactionItem from "@/components/transactions/Item";

import NotificationIcon from "@/assets/svgs/notification.svg";
import CopyIcon from "@/assets/svgs/copy.svg";
import ViewIcon from "@/assets/svgs/view.svg";
import BG from "@/assets/svgs/home-balance-background.svg";

import { SentIcon, SmartphoneIcon, CelllarNetworkIcon, InvoiceIcon, StakeIcon } from "@/constants/icons";
import { recentBeneficiaries, transactions } from "@/constants/data";

const quickActions = [
    { icon: <SentIcon />, title: "Transfer", href: "" },
    { icon: <SmartphoneIcon />, title: "Airtime", href: "" },
    { icon: <CelllarNetworkIcon />, title: "Data", href: "" },
    { icon: <InvoiceIcon />, title: "Bill", href: "" },
    { icon: <StakeIcon />, title: "Betting", href: "" },
];

const HomeScreen = () => {
    const viewNotifications = () => {};
    const copyAccountNumber = () => {};
    const toggleBalanceVisibility = () => {};

    return (
        <AndroidSafeArea>
            {/* GREETINGS */}
            <View className="flex w-full justify-between items-center flex-row px-4 pt-4 pb-6">
                <View className="flex flex-row items-center space-x-2">
                    <View className="h-[50px] w-[50px] rounded-full bg-[#E0F4FE] flex items-center justify-center">
                        <Text className="text-primary text-base text-inter_semibold">AL</Text>
                    </View>
                    <View>
                        <Text className="text-xs text-gray-dark font-satoshi">Welcome Back</Text>
                        <Text className="leading-[21px] text-gray-dark font-satoshi_bold text-base">Ayodeji Lawal</Text>
                    </View>
                </View>
                <Pressable className="h-[50px] w-[50px] rounded-full border border-[#AAAAAA] flex items-center justify-center" onPress={viewNotifications}>
                    <NotificationIcon />
                </Pressable>
            </View>
            <ScrollView className="flex-1 px-5 space-y-6" showsVerticalScrollIndicator={false}>
                {/* BALANCE CARD */}
                <View>
                    <View className="bg-primary px-4 pt-8 pb-7 rounded-t-[15px] overflow-hidden space-y-1.5">
                        <View className="absolute top-0 left-0">
                            <BG />
                        </View>
                        <View className="flex flex-row items-center space-x-1.5">
                            <Text className="font-satoshi_medium text-white text-sm">Available Balance</Text>
                            <TouchableOpacity onPress={toggleBalanceVisibility}>
                                <ViewIcon />
                            </TouchableOpacity>
                        </View>
                        <Text className="text-white text-2xl font-satoshi_bold">₦1,590,100.90</Text>
                    </View>
                    <View className="bg-[#F0FAFF] flex items-center justify-between flex-row py-[10px] px-5 rounded-b-[50px]">
                        <View className="flex flex-row items-center space-x-1.5">
                            <Text className="font-satoshi_medium text-gray-dark text-[10px]">Account number: 103456798</Text>
                            <TouchableOpacity onPress={copyAccountNumber}>
                                <CopyIcon />
                            </TouchableOpacity>
                        </View>
                        <Text className="font-satoshi_medium text-gray-dark text-[10px]">Tier 3</Text>
                    </View>
                </View>
                {/* QUICK ACTIONS */}
                <View className="space-y-4">
                    <SectionHeader title="Quick Action" to="payments" />
                    <FlatList
                        data={quickActions}
                        contentContainerStyle={{ gap: 24 }}
                        horizontal
                        renderItem={({ item }) => (
                            <Pressable className="space-y-1.5">
                                <View className="h-[50px] w-[50px] flex items-center justify-center bg-[#F0FAFF] rounded-full">{item.icon}</View>
                                <Text className="text-xs font-satoshi_medium text-gray-dark">{item.title}</Text>
                            </Pressable>
                        )}
                    />
                </View>
                {/* BENEFICIARIES */}
                <View className="space-y-4">
                    <SectionHeader title="Beneficiaries" to="beneficiaries" />
                    <FlatList
                        data={recentBeneficiaries}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 26 }}
                        horizontal
                        renderItem={({ item }) => (
                            <Pressable className="space-y-1.5 max-w-[48px]">
                                <View className="h-12 w-12 flex items-center justify-center bg-[#F0FAFF] rounded-full">
                                    <Text className="text-gray-dark text-xs font-inter_bold">{item.initials}</Text>
                                </View>
                                <Text className="text-xs font-satoshi_medium text-gray-dark" numberOfLines={1}>
                                    {item.name}
                                </Text>
                            </Pressable>
                        )}
                    />
                </View>
                {/* TRANSACTION HISTORY */}
                <View style={{ gap: 16 }}>
                    <SectionHeader title="Transaction History" to="transaction-history" />
                    <View>
                        {transactions.map((section, sectionIndex) => (
                            <View key={sectionIndex} className="mb-4">
                                <Text className="text-xs font-satoshi_medium bg-white py-2">{section.title}</Text>
                                {section.data.map((transaction, index) => (
                                    <TransactionItem key={index} transaction={transaction} />
                                ))}
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </AndroidSafeArea>
    );
};

export default HomeScreen;
