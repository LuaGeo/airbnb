import { useNavigation } from "@react-navigation/core";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { useState } from "react";
import axios from "axios";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";

export default function SignInScreen({ setToken }) {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    if (email && password) {
      try {
        const response = await axios.post(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
          { email, password }
        );
        if (response.data.token) {
          // console.log(response.data.token);
          setToken(response.data.token);
          alert("Your are logged in !");
        }

        // navigation.navigate("SignUp");
      } catch (error) {
        setErrorMessage("Wrong email or password");
        // console.log(error.response);
      }
    } else {
      setErrorMessage("Please fill all fields");
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={styles.container}
      >
        <Image
          source={require("../assets/logo-airbnb.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Sign in</Text>
        <TextInput
          placeholder="email"
          style={styles.input}
          onChangeText={(text) => {
            setEmail(text);
            setErrorMessage("");
          }}
        />
        {/* <Text>{email}</Text> */}

        <TextInput
          placeholder="password"
          secureTextEntry
          style={styles.input}
          onChangeText={(text) => {
            setPassword(text);
            setErrorMessage("");
          }}
        />
        {/* <Text>{password}</Text> */}

        {errorMessage && <Text>{errorMessage}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonsText}>Sign in</Text>
        </TouchableOpacity>
        <Pressable
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.pressable}>No account? Sign up !</Text>
        </Pressable>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  logo: {
    width: 100,
    height: 90,
    resizeMode: "contain",
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 70,
    fontWeight: "bold",
    color: "#717171",
  },
  input: {
    borderBottomColor: "#FFBAC0",
    borderBottomWidth: 2,
    marginVertical: 10,
    height: 30,
    width: "80%",
  },
  textarea: {
    borderWidth: 2,
    borderColor: "#FFBAC0",
    height: 90,
    paddingLeft: 10,
  },
  button: {
    borderWidth: 2,
    borderColor: "#F9585D",
    width: "50%",
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    marginTop: 90,
  },
  buttonsText: {
    fontSize: 19,
    color: "#979797",
  },
  pressable: { color: "#7E7E7E", marginTop: 20, marginBottom: 50 },
});
