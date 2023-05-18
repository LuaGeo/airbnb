import { View, Text, ImageBackground } from "react-native";

export const RoomCard = ({ item }) => {
  console.log(item);
  return (
    <View>
      <ImageBackground
        source={{ uri: item.photos[0].url }}
        style={{ width: 200, height: 100 }}
      ></ImageBackground>
    </View>
  );
};
