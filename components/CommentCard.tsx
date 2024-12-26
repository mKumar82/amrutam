import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import icons from "@/constants/icons";
import images from "@/constants/images";


const CommentCard = ({
  comment,
}: {
  comment: {
    title: string;
    description: string;
    time: string;
  };
}) => {
  return (
    <View className="flex flex-col  mx-5">
      <View className="flex flex-row">
        <View className="h-20 w-[20%] justify-center px-3 ">
          <Image
            className="border rounded-full"
            source={images.drimg}
            style={{ width: 40, height: 40 }}
          />
        </View>
        <View className=" h-auto w-[70%] pt-4 flex mt-2">
          <View className="flex-row">
            <Text>{comment.title}</Text>
            <Text className="text-[#8D8D8D] mx-5">{comment.time}</Text>
          </View>
          <View className="mt-3">
            <Text className="text-xs">{`${comment.description}`}</Text>
          </View>
          <View className="flex-row gap-8 mt-3">
            <View className="flex-row gap-2 ">
              <Image source={icons.darklike} className="size-4" />
              <Text className="text-green-700 font-bold ">2</Text>
            </View>
          </View>
        </View>
        <View className="h-20 w-[10%] flex justify-center ">
          <TouchableOpacity>
            <Image
              source={icons.dots}
              style={{ width: 5, height: 20, objectFit: "contain" }}
            />
          </TouchableOpacity>
        </View>
      </View>
     
    </View>
  );
};

export default CommentCard;
