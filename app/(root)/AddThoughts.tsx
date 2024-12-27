import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";

const AddThoughts = () => {
  return (
    <SafeAreaView>
      <View className="flex-row items-center gap-2">
        <Image className="mx-5" source={icons.backarrow} />
        <Text>Add your thoughts</Text>
      </View>
      <View className="flex-row items-center gap-5 mx-5 mt-5">
        <Image
          className="border rounded-full"
          source={images.drimg}
          style={{ width: 40, height: 40 }}
        />
        <Text>Dr. Mathew Adams</Text>
      </View>
      <View className="flex gap-8 mt-8 mx-5">
        <View>
          <Text className="text-xs mx-5">Add title</Text>
          <TextInput
            placeholder="max 50 words"
            className=" w-[100%] h-14 rounded-2xl border-neutral-300 px-3 "
            style={{ borderWidth: 1 }}
          />
        </View>
        <View>
          <Text className="text-xs mx-5 ">Add Description</Text>
          <TextInput
            placeholder="max 70 words"
            editable
            multiline
            numberOfLines={10}
            className=" w-[100%] h-32 rounded-2xl border-neutral-300 px-3 "
            style={{ borderWidth: 1 }}
          />
        </View>
      </View>
      <View>
        <Text className="mx-5 mt-5">Upload attachments</Text>
        <View className="flex-row justify-between px-5 mt-5">
          <TouchableOpacity>
            <View className="bg-[#F3FAF1] h-[100px] w-[100px] flex justify-center items-center gap-2">
              <Image source={icons.video} />
              <Text className="text-xs">Upload .mkv</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="bg-[#F3FAF1] h-[100px] w-[100px] flex justify-center items-center gap-2">
              <Image source={icons.image} />
              <Text className="text-xs">Upload .jpg or jpeg</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="bg-[#F3FAF1] h-[100px] w-[100px] flex justify-center items-center gap-2">
              <Image source={icons.file} />
              <Text className="text-xs">Upload .pdf</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex items-center mt-60">
        
          <TouchableOpacity className="bg-[#3A643B] h-[50px] w-[340px] rounded-2xl justify-center items-center">
            <Text className="text-[#FFFFFF]">Save and proceed</Text>
          </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export default AddThoughts;
