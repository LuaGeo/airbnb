import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { displayStar } from "../utils/displayStars";

export const RoomCard = () => {
  const navigation = useNavigation();
  const styles = useStyle();

  // console.log(item);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Room", { id: item._id });
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: item.photos[0].url }}
          style={styles.img}
        >
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price} €</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.detailsContainer}>
        <View style={{ width: "74%", gap: 20 }}>
          <Text style={{ fontSize: 24 }} numberOfLines={1}>
            {item.title}
          </Text>
          <View style={styles.reviewsContainer}>
            <Text>{displayStar(item.ratingValue)}</Text>
            <Text style={{ fontSize: 18, color: "#c9c9c7" }}>
              {item.reviews} reviews
            </Text>
          </View>
        </View>
        <Image
          source={{ uri: item.user.account.photo.url }}
          style={styles.userImg}
        />
      </View>
    </TouchableOpacity>
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
    detailsContainer: {
      width: width - 20,
      flexDirection: "row",
      alignItems: "center",

      marginVertical: 7,
    },
    reviewsContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    userImg: {
      width: 90,
      height: 90,
      borderRadius: 50,
    },
    priceContainer: {
      backgroundColor: "black",
      width: 100,
      height: 50,
      top: 150,
      justifyContent: "center",
    },
    price: {
      textAlign: "center",
      fontSize: 26,
      color: "white",
    },
  });

  return styles;
};
