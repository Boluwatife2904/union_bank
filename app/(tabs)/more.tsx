import { Pressable, ScrollView, View, Text, Switch } from "react-native";
import { useState } from "react";

import AndroidSafeArea from "@/components/layout/AndroidSafeArea";
import PageHeader from "@/components/navigation/PageHeader";

import CaretRightIcon from "@/assets/svgs/caret-right.svg";
import UserCirlceIcon from "@/assets/svgs/user-circle.svg";
import GoogleDocIcon from "@/assets/svgs/google-doc.svg";
import CirclePasswordIcon from "@/assets/svgs/circle-password.svg";
import SecurityPasswordIcon from "@/assets/svgs/security-password.svg";
import FingerprintScanIcon from "@/assets/svgs/fingerprint-scan.svg";
import MapSearchIcon from "@/assets/svgs/map-search-blue.svg";
import ContactIcon from "@/assets/svgs/contact.svg";
import LogoutIcon from "@/assets/svgs/logout.svg";
import { useRouter } from "expo-router";

const links = [
    { icon: <UserCirlceIcon />, title: "Your Profile", route: "" },
    { icon: <GoogleDocIcon />, title: "Statement of Account", route: "statement" },
    { icon: <CirclePasswordIcon />, title: "Change Password", route: "" },
    { icon: <SecurityPasswordIcon />, title: "Change Transaction Pin", route: "" },
    { icon: <FingerprintScanIcon />, title: "Biometric Login", route: "biometric" },
    { icon: <MapSearchIcon />, title: "Find Us", route: "find-us" },
    { icon: <ContactIcon />, title: "Contact Us", route: "" },
    { icon: <LogoutIcon />, title: "Log out", route: "logout" },
];

const More = () => {
    const [useBiometrics, setUseBiometrics] = useState(true);
    const router = useRouter();

    const handlePress = (route: string) => {
        if (route === "logout" || route === "biometric") return;
        router.navigate(`/${route}`);
    };

    return (
        <AndroidSafeArea>
            <PageHeader title="More" />
            <ScrollView className="px-4">
                {links.map((item) => (
                    <Pressable
                        key={item.title}
                        className="py-[19px] px-2 border-b border-[#F2F2F2] flex flex-row justify-between pr-2 bg-white"
                        onPress={() => handlePress(item.route)}>
                        <View className="flex flex-row space-x-4">
                            {item.icon}
                            <Text className={`font-satoshi_medium text-sm ${item.title === "Log out" ? "text-[#FF3B2D]" : "text-gray-dark"}`}>
                                {item.title}
                            </Text>
                        </View>
                        {!["Log out", "Biometric Login"].includes(item.title) && <CaretRightIcon />}
                        {item.title === "Biometric Login" && (
                            <Switch
                                className="scale-[0.8]"
                                value={useBiometrics}
                                thumbColor={"#fff"}
                                trackColor={{ false: "#fff", true: "#009FDF" }}
                                onValueChange={(value) => setUseBiometrics(value)}
                            />
                        )}
                    </Pressable>
                ))}
            </ScrollView>
        </AndroidSafeArea>
    );
};

export default More;
