import { View, TextInput } from "react-native";

import { SearchIcon } from "@/constants/icons";

type SearchInputProps = {
    placeholder?: string;
};

const SearchInput = ({ placeholder = "Search" }: SearchInputProps) => {
    return (
        <View className="flex-1 max-h-12">
            <View className="absolute left-4 top-3 z-10">
                <SearchIcon />
            </View>
            <TextInput
                className="flex-auto shrink-0 pl-12 pr-4 text-[16px] !pt-0 h-[48px] align-middle border border-[#D0D5DD] rounded-lg font-satoshi bg-white"
                placeholderTextColor={"#667085"}
                placeholder={placeholder}
                textAlign="left"
            />
        </View>
    );
};

export default SearchInput;
