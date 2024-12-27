import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
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
    likes: boolean;
    answers: {
      title: string;
      description: string;
      time: string;
    }[];
  };
}) => {
  const [viewReply, SetViewReply] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
  const handleViewReply = () => {
    SetViewReply(!viewReply);
  };
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
        <View className="h-20 w-[10%] flex justify-center">
          <TouchableOpacity onPress={() => setShowButtons(!showButtons)}>
            <Image
              source={icons.dots}
              style={{ width: 5, height: 20, objectFit: "contain" }}
            />
          </TouchableOpacity>

          {showButtons && (
            <View className="-mx-40 absolute top-10 bg-[#FFFFFF] rounded-lg p-2  flex justify-center items-center w-36 z-50">
              <TouchableOpacity className="p-2 w-full flex-row gap-2">
                <Image source={icons.addans} />
                <Text className="text-center">Add Answer</Text>
              </TouchableOpacity>
              <TouchableOpacity className="p-2 w-full flex-row gap-2">
                <Image source={icons.report} />
                <Text className="">Report</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <View className="flex-row p-5">
        <Text>{`Question: ${question.description}`}</Text>
      </View>
      <View className="flex-row justify-between p-3">
        <View>
          <Text className="text-[#8D8D8D]">
            Replies . {question.answers.length} reply
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={handleViewReply}>
            <Text className="text-green-700 font-bold">
              {!viewReply
                ? `View All ${question.answers.length} Replies`
                : "View less Replies"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {viewReply ? (
        <View>
          {question.answers.map((answer, index) => (
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
