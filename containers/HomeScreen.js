import { useNavigation } from "@react-navigation/core";
import { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, FlatList } from "react-native";
import axios from "axios";

export default function HomeScreen({ userToken }) {
  // const navigation = useNavigation();

  const [data, setData] = useState([]);

  const allRooms = () => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
          );
          setData(response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
      allRooms();
      fetchData();
    }, []);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo-airbnb.png")}
        style={styles.logo}
      />
      <View style={styles.line}></View>

      <FlatList
        data={data}
        keyExtractor={(item) => String(item._id)}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
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
