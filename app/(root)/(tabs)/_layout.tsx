import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
    <Image
      source={icon}
      tintColor="tab_icon_color"
      resizeMode="contain"
      className="size-6"
    />
    <Text
      className={`${
        focused
          ? "text-tab_icon_color font-nunito-medium"
          : "text-tab_icon_color font-nunito-regular"
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "black",
          position: "absolute",
          borderTopColor: "#0C140C",
          borderTopWidth: 1,
          minHeight: 70,
        },
        
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="appointment"
        options={{
          title: "Appointment",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.appointment} title="Appointment" />
          ),
        }}
      />
      <Tabs.Screen
        name="patient"
        options={{
          title: "Patient",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.patient} title="Patient" />
          ),
        }}
      />

      <Tabs.Screen
        name="bulletin"
        options={{
          title: "Bulletin",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.bulletin} title="Bulletin" />
          ),
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: "Payment",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.payment} title="Payment" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
