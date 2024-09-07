import { View, Text, Pressable, TouchableOpacity } from "react-native";

import ArrowLeftIcon from "@/assets/svgs/arrow-left.svg";
import { useRouter } from "expo-router";

type PageHeaderProps = {
    title: string;
};

const PageHeader = ({ title }: PageHeaderProps) => {
    const router = useRouter();
    return (
        <View className="px-4 py-6">
            <View className="w-full flex items-center justify-center">
                <TouchableOpacity className="absolute top-0 left-0 w-fit" onPress={() => router.back()}>
                    <ArrowLeftIcon />
                </TouchableOpacity>
                <Text className="text-base font-satoshi_bold text-center text-gray-dark">{title}</Text>
            </View>
        </View>
    );
};

export default PageHeader;
