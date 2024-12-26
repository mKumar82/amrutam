import QuestionCard from "@/components/QuestionCard";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ThoughtCard from "@/components/ThoughtCard";
import { Link } from "expo-router";

export default function Index() {
  const [activeTab, setActiveTab] = useState("Question");

  const router = useRouter();
  // Sample list of questions
  const questions = [
    {
      title: "What is React Native?",
      description: "A framework for building mobile apps using React.",
      time: "5 days ago",
    },
    {
      title: "What is NativeWind?",
      description: "A utility-first CSS styling library for React Native.",
      time: "5 days ago",
    },
    {
      title: "How does useState work?",
      description: "A React hook for state management.",
      time: "5 days ago",
    },
  ];

  const thoughts = [
    {
      author: "Dr. Marium Roy",
      title: "Can Ayurveda help with stress and mental health issues?",
      description: `Ayurveda, one of the world's oldest holistic healing systems, originated in India over 3,000 years ago and is still widely practiced today. It is based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit. Unlike conventional medicine, Ayurveda emphasizes prevention and the personalized treatment of diseases through a combination of diet, herbal remedies, exercise, and lifestyle adjustments. One fascinating aspect is its concept of "doshas" – Vata, Pitta, and Kapha – which are believed to be the primary life forces or energies that govern our physiological and psychological activities. Ayurvedic practitioners tailor treatments to balance these doshas in each individual, promoting harmony and health.`,
      time: "5 days ago",
      image: "",
    },
  ];

  return (
    <SafeAreaView className="bg-slate-50 mb-16">
      <View className=" w-full h-full">
        <View
          className="w-full h-1/4 "
          style={{
            backgroundColor: "#EAF2EA",
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
          }}
        >
          <Text className="text-5xl mx-5 mt-16">Forum</Text>
        </View>
        <View className=" w-full h-3/4">
          <View className="flex-1 p-5  max-h-20">
            <View className="flex-row w-[80%] justify-center mb-5 mx-auto">
              <TouchableOpacity
                className={`px-5 flex-col h-12 w-[60%] py-2 rounded-2xl w- justify-center ${
                  activeTab === "Question" ? "bg-black" : "bg-[#FFFFFF]"
                }`}
                onPress={() => setActiveTab("Question")}
              >
                <Text
                  className={`text-lg text-center ${
                    activeTab === "Question" ? "text-white" : "text-black"
                  }`}
                >
                  Question
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={`px-5 py-2 h-12 w-[60%] justify-center flex-col rounded-2xl ${
                  activeTab === "Thoughts" ? "bg-black" : "bg-[#FFFFFF]"
                }`}
                onPress={() => setActiveTab("Thoughts")}
              >
                <Text
                  className={`text-lg text-center ${
                    activeTab === "Thoughts" ? "text-white" : "text-black"
                  }`}
                >
                  Thoughts
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className=" flex-1 bg-blue-700">
            <View className="bg-slate-100">
              {activeTab === "Question" ? (
                <ScrollView>
                  {questions.map((question, index) => (
                    <QuestionCard key={index} question={question} />
                  ))}
                </ScrollView>
              ) : (
                <View>
                  <TouchableOpacity
                    onPress={() => router.push("/(root)/AddThoughts")}
                    className="bg-[#3A643B] rounded-full w-16 h-16 flex-1  justify-center items-center z-50 absolute bottom-6 right-5"
                  >
                    <Image source={icons.plus} />
                  </TouchableOpacity>

                  <ScrollView>
                    {thoughts.map((thought, index) => (
                      <ThoughtCard key={index} thought={thought} />
                    ))}
                  </ScrollView>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
