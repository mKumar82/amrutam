import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Divider } from "@rneui/themed";
import icons from "@/constants/icons";
import { questions } from "@/constants/data";

const DividerSection = () => {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };
  const handleSave = () => {
    setSave(!save);
  };

  return (
    <View>
      <Divider style={{ width: "60%" }} inset />
      <View className="flex-row justify-center gap-5 p-5">
        <View>
          <TouchableOpacity onPress={handleLike}>
            {!like ? (
              <View className="flex-row gap-2">
                <Image source={icons.lightlike} />
                <Text className="text-[#8D8D8D]">like</Text>
              </View>
            ) : (
              <View className="flex-row gap-2 ">
                <Image source={icons.darklike} className="size-4" />
                <Text className="text-green-700 font-bold ">liked</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <View className="flex-row gap-2">
              <Image source={icons.reply} />
              <Text className="text-[#8D8D8D]">Reply</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={handleSave}>
            {!save ? (
              <View className="flex-row gap-2">
                <Image source={icons.save} />
                <Text className="text-[#8D8D8D]">Saves</Text>
              </View>
            ) : (
              <View className="flex-row gap-2 ">
                <Image source={icons.save} />
                <Text className="text-green-700 font-bold ">Saved</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default DividerSection;
