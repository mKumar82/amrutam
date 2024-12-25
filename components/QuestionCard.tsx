import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import icons from "@/constants/icons";
import images from "@/constants/images";
import AnswerCard from "./AnswerCard";
import DividerSection from "./DividerSection";

const QuestionCard = ({
  question,
}: {
  question: {
    title: string;
    description: string;
    time: string;
  };
  }) => {
  const answers = [
      {
        title: "Dr. Liam Mathews",
        description:
          "Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being.",
        time: "24 hours ago",
      }
  ];
  
  const [viewReply, SetViewReply] = useState(false);
  const handleViewReply = () => {
    SetViewReply(!viewReply);
  }
  return (
    <View className="flex flex-col">
      <View className="flex flex-row">
        <View className="h-20 w-[20%] justify-center px-5">
          <Image
            className="border rounded-full"
            source={images.logoimg}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View className=" h-20 w-[70%] py-4 flex justify-between">
          <Text>{question.title}</Text>
          <Text className="text-[#8D8D8D]">{question.time}</Text>
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
      <View className="flex-row p-5">
        <Text>{`Question: ${question.description}`}</Text>
      </View>
      <View className="flex-row justify-between p-3">
        <View>
          <Text className="text-[#8D8D8D]">
            Replies . {answers.length} reply
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={handleViewReply}>
            <Text className="text-green-700 font-bold">
              {!viewReply
                ? `View All ${answers.length} Replies`
                : "View less Replies"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {viewReply ? (
        <View>
          {answers.map((answer, index) => (
            <AnswerCard key={index} answer={answer} />
          ))}
        </View>
      ) : (
        <View />
      )}
       <DividerSection />
    </View>
  );
};

export default QuestionCard;
