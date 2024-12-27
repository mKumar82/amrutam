import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import icons from "@/constants/icons";
import images from "@/constants/images";
import DividerSection from "./DividerSection";
import CommentCard from "./CommentCard";

const ThoughtCard = ({
  thought,
}: {
  thought: {
    author: string;
    title: string;
    description: string;
    time: string;
    image: string;
    comments: { title: string; description: string; time: string }[];
  };
}) => {
  const [viewReply, SetViewReply] = useState(false);
  const handleViewReply = () => {
    SetViewReply(!viewReply);
  };
  return (
    <View className="flex flex-col">
      <ScrollView>
        <View className="flex flex-row">
          <View className="h-20 w-[20%] justify-center px-5">
            <Image
              className="border rounded-full"
              source={images.drimg}
              style={{ width: 50, height: 50 }}
            />
          </View>
          <View className=" h-20 w-[70%] py-4 flex justify-between">
            <Text>{thought.author}</Text>
            <Text className="text-[#8D8D8D]">{thought.time}</Text>
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
        <View className="flex p-5">
          <Text className="text-lg">{`Thought: ${thought.title}`}</Text>
          <Text className="mt-3 text-lg">{`${thought.description}`}</Text>
          <Image
            className="rounded-2xl mt-5"
            source={images.img1}
            style={{ width: 350, height: 350, objectFit: "cover" }}
          />
        </View>
        {viewReply ? (
          <View>
            {thought.comments.map((comment, index) => (
              <CommentCard key={index} comment={comment} />
            ))}
          </View>
        ) : (
          <View />
        )}
        <View className="flex-row  p-3">
          <View>
            <TouchableOpacity onPress={handleViewReply}>
              <Text className="text-green-700 font-bold">
                {!viewReply
                  ? `View All ${thought.comments.length} Comments`
                  : "View less Comments"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{flex:1}}
        >
          <View className="flex-row  ml-6 gap-5 items-center py-5">
            <Image
              className="border rounded-full"
              source={images.drimg}
              style={{ width: 50, height: 50 }}
            />
            <TextInput
              placeholder="Add your comment"
              className=" w-[70%] h-10 rounded-2xl border-neutral-300 px-3 "
              style={{ borderWidth: 1 }}
            />
          </View>
        </KeyboardAvoidingView>
        <DividerSection />
      </ScrollView>
    </View>
  );
};

export default ThoughtCard;
