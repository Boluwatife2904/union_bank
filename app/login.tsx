import { View, Text, ScrollView, Pressable } from "react-native";

import { useRouter } from "expo-router";

import AndroidSafeArea from "@/components/layout/AndroidSafeArea";
import AppInput from "@/components/forms/Input";
import Button from "@/components/ui/Button";

import { UnionLogo, MapSearchIcon, HelpCircleIcon, HorseLeft, HorseRight } from "@/constants/icons";

const quickActions = [
    { icon: <MapSearchIcon />, title: "Find us", route: "/find-us" },
    { icon: <HelpCircleIcon />, title: "Need help", route: "/help" },
];
const forgotLinks = [
    { link: "", title: "Forgot Username?" },
    { link: "", title: "Forgot Password?" },
];

const LoginScreen = () => {
    const router = useRouter();

    return (
        <AndroidSafeArea>
            <View>
                <View className="flex items-center justify-center pt-9 pb-12">
                    <UnionLogo />
                </View>
                <View className="absolute top-9 right-0">
                    <HorseRight />
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} className="w-full flex-1 px-4 flex h-full">
                <View className="space-y-2 mb-8">
                    <Text className="font-satoshi_bold text-black text-2xl">Welcome back,</Text>
                    <Text className="text-xl text-black leading-7 font-satoshi_bold">Ayodeji Lawal</Text>
                </View>
                <View className="space-y-4 mb-[67px]">
                    <View className="absolute -top-[17px] left-0">
                        <HorseLeft />
                    </View>
                    <AppInput label="Username" placeholder="Username" />
                    <View className="space-y-2">
                        <AppInput label="Password" placeholder="Password" isPassword={true} />
                        <View className="flex justify-between flex-row items-center">
                            {forgotLinks.map((link) => (
                                <Pressable key={link.title}>
                                    <Text className="text-primary font-satoshi_bold text-xs">{link.title}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </View>
                </View>
                <View className="mb-[62px] flex items-center justify-center space-y-4">
                    <Button text="Log in" onPress={() => router.push("/home")} />
                    <Text className="text-sm font-satoshi_medium text-gray-dark">
                        Don't have an account? <Text className="font-satoshi_bold text-primary">Sign Up</Text>
                    </Text>
                </View>
                <View className="flex w-full items-center justify-center space-y-4">
                    <Text className="text-sm text-primary font-satoshi_bold">Quick Action</Text>
                    <View className="flex justify-center items-center flex-row space-x-[30px]">
                        {quickActions.map((action) => (
                            <Pressable key={action.title} className="flex items-center justify-center space-y-1.5" onPress={() => router.push(action.route)}>
                                <View className="h-12 w-12 bg-primary flex items-center justify-center rounded-full">{action.icon}</View>
                                <Text className="text-xs font-satoshi_medium text-gray-dark">{action.title}</Text>
                            </Pressable>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </AndroidSafeArea>
    );
};

export default LoginScreen;
