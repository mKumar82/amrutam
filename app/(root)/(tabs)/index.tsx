import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg font-nunito-regular">Welcome</Text>
      <Link href="/(root)/(tabs)/appointment">appointment</Link>
      <Link href="/(root)/(tabs)/bulletin">bulletin</Link>
      <Link href="/(root)/(tabs)/patient">patient</Link>
      <Link href="/(root)/(tabs)/payment">payment</Link>
    </View>
  );
}
