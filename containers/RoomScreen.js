import { RoomCard } from "../components/RoomCard";
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import { displayStar } from "../utils/displayStars";

export const RoomScreen = () => {
  const { params } = useRoute();
  const styles = useStyle();
  const [room, setRoom] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/${params.id}`
        );
        // setRoom(response);
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>Rooms page</Text>
      {/* <View style={styles.container}>
        <ImageBackground
          source={{ uri: data.photos[0].url }}
          style={styles.img}
        >
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{data.price} €</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.detailsContainer}>
        <View style={{ width: "74%", gap: 20 }}>
          <Text style={{ fontSize: 24 }} numberOfLines={1}>
            {data.title}
          </Text>
          <View style={styles.reviewsContainer}>
            <Text>{displayStar(data.ratingValue)}</Text>
            <Text style={{ fontSize: 18, color: "#c9c9c7" }}>
              {data.reviews} reviews
            </Text>
          </View>
        </View>
        <Image
          source={{ uri: data.user.account.photo.url }}
          style={styles.userImg}
        />
      </View> */}
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
