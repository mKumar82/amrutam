import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import icons from '@/constants/icons';

const DividerSection = () => {
  return (
    <View>
      <Divider orientation="horizontal" inset={true} insetType="middle" />;
      <View className="flex-row justify-center gap-5 p-5">
        <View>
          <TouchableOpacity>
            <View className="flex-row gap-2">
              <Image source={icons.lightlike} />
              <Text className="text-[#8D8D8D]">likes</Text>
            </View>
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
          <TouchableOpacity>
            <View className="flex-row gap-2">
              <Image source={icons.save} />
              <Text className="text-[#8D8D8D]">Saves</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Divider orientation="horizontal" />;
    </View>
  );
}

export default DividerSection