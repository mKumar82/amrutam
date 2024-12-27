import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import icons from "@/constants/icons";

const VerticalDots = () => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <View className="h-20 w-[10%] flex justify-center">
      <TouchableOpacity onPress={() => setShowButtons(!showButtons)}>
        <Image
          source={icons.dots}
          style={{ width: 5, height: 20, objectFit: "contain" }}
        />
      </TouchableOpacity>

      {showButtons && (
        <View className="-mx-40 absolute top-10 bg-[#FFFFFF] rounded-lg p-2  flex justify-center items-center w-36 z-50">
          <TouchableOpacity className="p-2 w-full flex-row gap-2 ">
            <Image source={icons.addans} />
            <Text className="text-center">Add Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-2 w-full flex-row gap-2 ">
            <Image source={icons.report} />
            <Text className="">Report</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default VerticalDots;
