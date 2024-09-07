import { Stack } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, Text, View, FlatList, Pressable } from "react-native";

import AndroidSafeArea from "@/components/layout/AndroidSafeArea";
import PageHeader from "@/components/navigation/PageHeader";
import SearchInput from "@/components/common/SearchInput";

import { months } from "@/constants/data";
import { DownloadIcon, PDFIcon } from "@/constants/icons";
import Input from "@/components/forms/Input";
import Button from "@/components/ui/Button";

const views = ["year", "custom"];

const Page = () => {
    const [selected, setSelected] = useState(views[0]);

    return (
        <AndroidSafeArea>
            <Stack.Screen options={{ headerShown: false }} />
            <PageHeader title="Statement of Account" />
            <View style={{ gap: 24 }} className="flex-1 px-5">
                <View className="flex flex-row">
                    {views.map((view) => (
                        <TouchableOpacity
                            key={view}
                            className={`py-4 flex-auto flex items-center justify-between border-b  ${selected === view ? "border-b-[2px] border-primary" : "border-[#E5E7EF]"}`}
                            onPress={() => setSelected(view)}>
                            <Text className={`capitalize font-satoshi_medium text-sm ${selected === view ? "text-primary" : "text-[#7E8494]"}`}>{view}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                {selected === "year" ? (
                    <View style={{ gap: 62 }} className="flex-1 flex">
                        <SearchInput />
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={months}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item }) => (
                                <Pressable className="px-2 py-[18px] flex flex-row items-center justify-between border-b border-[#F2F2F2]">
                                    <View className="flex items-center flex-row space-x-3">
                                        <PDFIcon />
                                        <Text className="font-satoshi_medium text-xs text-gray-dark">{item}</Text>
                                    </View>
                                    <DownloadIcon />
                                </Pressable>
                            )}
                        />
                    </View>
                ) : (
                    <View className="flex-1 justify-between pb-4">
                        <View style={{ gap: 24 }}>
                            <Input label="Start Date" placeholder="DD/MM/YYYY" isCalendar />
                            <Input label="End Date" placeholder="DD/MM/YYYY" isCalendar />
                        </View>
                        <Button text="Download Statement of Account" onPress={() => console.log("Button clicked")} />
                    </View>
                )}
            </View>
        </AndroidSafeArea>
    );
};

export default Page;
