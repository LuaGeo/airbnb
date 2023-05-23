import { useNavigation } from "@react-navigation/core";
import { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, FlatList } from "react-native";
import axios from "axios";
import { ActivityIndicator } from "react-native-paper";
import { RoomCard } from "../components/RoomCard";

export default function HomeScreen({ userToken }) {
  // const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
        );
        setData(response.data);
        console.log(response);
        // console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <ActivityIndicator size="small" />
  ) : (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo-airbnb.png")}
        style={styles.logo}
      />
      <View style={styles.line}></View>
      <View>
        <FlatList
          data={data}
          keyExtractor={(data) => String(data._id)}
          renderItem={({ item }) => {
            return <RoomCard item={item} />;
          }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Text style={styles.line}></Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#E2E2E2",
    marginTop: 10,
    marginBottom: 10,
  },

  logo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginTop: 30,
  },
});
