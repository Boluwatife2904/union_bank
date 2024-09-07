import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState(false);
    const [loaded] = useFonts({
        SatoshiLight: require("../assets/fonts/Satoshi-Light.ttf"),
        Satoshi: require("../assets/fonts/Satoshi-Regular.ttf"),
        SatoshiMedium: require("../assets/fonts/Satoshi-Medium.ttf"),
        SatoshiBold: require("../assets/fonts/Satoshi-Bold.ttf"),
        Inter: require("../assets/fonts/Inter-Regular.ttf"),
        InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
        InterSemibold: require("../assets/fonts/Inter-Semibold.ttf"),
        InterBold: require("../assets/fonts/Inter-Bold.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
            if (loggedIn) router.push("/home");
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <>
            <Stack initialRouteName="login">
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="login" options={{ headerShown: false }} />
                <Stack.Screen name="help" options={{ headerShown: false }} />
                <Stack.Screen name="find-us" options={{ headerShown: false }} />
            </Stack>
            <StatusBar style="dark" />
        </>
    );
}
