import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import icons from "@/constants/icons";
import images from "@/constants/images";


const AnswerCard = ({
  answer,
}: {
  answer: {
    title: string;
    description: string;
    time: string;
  };
}) => {
  return (
    <View className="flex flex-col bg-[#F3FAF1] m-5">
      <View className="flex flex-row">
        <View className="h-20 w-[20%] justify-center px-3 ">
          <Image
            className="border rounded-full"
            source={images.drimg}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View className=" h-20 w-[70%] py-4 flex justify-between">
          <Text>{answer.title}</Text>
          <Text className="text-[#8D8D8D]">{answer.time}</Text>
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
      <View className="flex-row p-3">
        <Text>{`Ans: ${answer.description}`}</Text>
      </View>
      <View className="flex-row gap-8 p-3">
        <View className="flex-row gap-2 ">
          <Image source={icons.darklike} className="size-4" />
          <Text className="text-green-700 font-bold ">2</Text>
        </View>
        <View className="flex-row gap-2 ">
          <Image source={icons.comment} className="size-4" />
          <Text className="text-[#8D8D8D] font-bold ">3</Text>
        </View>
      </View>
     
    </View>
  );
};

export default AnswerCard;
