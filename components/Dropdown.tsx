import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

const SimpleDropdown = () => {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity onPress={() => setShowButtons(!showButtons)}>
        <Image
          source={{ uri: "https://icon-url.com/dots.png" }} // Replace with your icon URL
          className="w-5 h-5"
        />
      </TouchableOpacity>

      {showButtons && (
        <View className="mt-2 bg-gray-100 rounded-lg p-2 shadow">
          <TouchableOpacity className="py-2 px-4">
            <Text className="text-blue-500">Add Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-2 px-4">
            <Text className="text-red-500">Report</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SimpleDropdown;
