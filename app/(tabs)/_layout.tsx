import { Tabs } from "expo-router";
import { Platform } from "react-native";

import Home from "@/assets/svgs/home.svg";
import HomeFocused from "@/assets/svgs/home-focused.svg";
import Payments from "@/assets/svgs/payments.svg";
import PaymentsFocused from "@/assets/svgs/payments-focused.svg";
import Lifestyle from "@/assets/svgs/lifestyle.svg";
import LifestyleFocused from "@/assets/svgs/lifestyle-focused.svg";
import More from "@/assets/svgs/more.svg";
import MoreFocused from "@/assets/svgs/more-focused.svg";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#009FDF",
                tabBarStyle: {
                    height: Platform.OS === "android" ? 70 : 101,
                    ...Platform.select({
                        android: {
                            paddingBottom: 8,
                        },
                    }),
                },
            }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (focused ? <HomeFocused /> : <Home />),
                    tabBarLabelStyle: { fontFamily: "Satoshi", fontSize: 12, fontWeight: 500 },
                }}
            />
            <Tabs.Screen
                name="payments"
                options={{
                    title: "Payments",
                    tabBarIcon: ({ focused }) => (focused ? <PaymentsFocused /> : <Payments />),
                    tabBarLabelStyle: { fontFamily: "Satoshi", fontSize: 12, fontWeight: 500 },
                }}
            />
            <Tabs.Screen
                name="lifestyle"
                options={{
                    title: "Lifestyle",
                    tabBarIcon: ({ focused }) => (focused ? <LifestyleFocused /> : <Lifestyle />),
                    tabBarLabelStyle: { fontFamily: "Satoshi", fontSize: 12, fontWeight: 500 },
                }}
            />
            <Tabs.Screen
                name="more"
                options={{
                    title: "More",
                    tabBarIcon: ({ focused }) => (focused ? <MoreFocused /> : <More />),
                    tabBarLabelStyle: { fontFamily: "Satoshi", fontSize: 12, fontWeight: 500 },
                }}
            />
        </Tabs>
    );
}
