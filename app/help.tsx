import { Text, ScrollView, Pressable, View } from "react-native";

import AndroidSafeArea from "@/components/layout/AndroidSafeArea";
import PageHeader from "@/components/navigation/PageHeader";

import { CaretRightIcon, LinkedInIcon, InstagramIcon, FacebookIcon, GlobeIcon, TwitterIcon, WhatsAppIcon, CallIcon } from "@/constants/icons";

const helpLines = [
    { icon: <CallIcon />, value: "+2348142069401" },
    { icon: <CallIcon />, value: "+2348142069402" },
    { icon: <CallIcon />, value: "+2348142069403" },
    { icon: <WhatsAppIcon />, value: "+2348199089410" },
    { icon: <TwitterIcon />, value: "unionbankng" },
    { icon: <LinkedInIcon />, value: "unionbankng" },
    { icon: <InstagramIcon />, value: "unionbankng" },
    { icon: <FacebookIcon />, value: "unionbankng" },
    { icon: <GlobeIcon />, value: "www,unionbankng.com" },
];

const HelpPage = () => {
    return (
        <AndroidSafeArea>
            <PageHeader title="Need help" />
            <ScrollView className="flex-1 px-4">
                {helpLines.map((item, index) => (
                    <Pressable key={index} className="bg-white py-[18px] px-2 border-b border-[#F2F2F2] flex items-center flex-row justify-between">
                        <View className="flex flex-row items-center space-x-4">
                            {item.icon}
                            <Text className="font-satoshi_medium text-sm text-gray-dark">{item.value}</Text>
                        </View>
                        <CaretRightIcon />
                    </Pressable>
                ))}
            </ScrollView>
        </AndroidSafeArea>
    );
};

export default HelpPage;
