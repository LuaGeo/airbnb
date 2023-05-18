import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";

import { displayStar } from "../utils/displayStars";

export const RoomCard = ({ item }) => {
  const styles = useStyle();

  // console.log(item);
  return (
    <View>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: item.photos[0].url }}
          style={styles.img}
        ></ImageBackground>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text>{item.title}</Text>
          <View style={styles.reviewsContainer}>
            <Text>{displayStar(item.ratingValue)}</Text>
            <Text>{item.reviews} reviews</Text>
          </View>
        </View>
        <Image
          source={{ uri: item.user.account.photo.url }}
          style={styles.userImg}
        />
      </View>
    </View>
  );
};
const useStyle = () => {
  const { height, width } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      paddingVertical: 5,
      width: width,
      height: 220,
    },
    img: { width: "100%", height: "100%" },
    reviewsContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    userImg: {
      width: 100,
      height: 100,
      borderRadius: "50%",
    },
  });

  return styles;
};
