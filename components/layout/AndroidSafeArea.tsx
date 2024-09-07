import { Platform, StatusBar, SafeAreaView } from "react-native";

const AndroidSafeArea = (props: any) => {
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }} className="flex-1 bg-white" {...props}>
            {props.children}
        </SafeAreaView>
    );
};

export default AndroidSafeArea;
