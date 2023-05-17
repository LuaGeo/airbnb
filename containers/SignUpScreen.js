import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";
import { useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function SignUpScreen({ setToken }) {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    if (email && username && description && password && confirmPassword) {
      if (password === confirmPassword) {
        setErrorMessage("");
        try {
          const { data } = await axios.post(
            "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
            { email, username, description, password }
          );
          alert("Your account has been created");
          setToken(data.token);
        } catch (error) {
          setErrorMessage(error.response.data.error);
          // console.log(error.response.data);
        }
      } else {
        setErrorMessage("Passwords do not match");
      }
    } else {
      setErrorMessage("Missing informations");
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
        <Text style={styles.title}>Sign up</Text>
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
          placeholder="username"
          style={styles.input}
          onChangeText={(text) => {
            setUsername(text);
            setErrorMessage("");
          }}
        />
        {/* <Text>{username}</Text> */}

        <TextInput
          placeholder="Describe yourself in a few words..."
          multiline
          style={[styles.input, styles.textarea]}
          onChangeText={(text) => {
            setDescription(text);
            setErrorMessage("");
          }}
        />
        {/* <Text>{description}</Text> */}

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

        <TextInput
          placeholder="confirm password"
          secureTextEntry
          style={styles.input}
          onChangeText={(text) => {
            setConfirmPassword(text);
            setErrorMessage("");
          }}
        />
        {/* <Text>{confirmPassword}</Text> */}
        {errorMessage && <Text>{errorMessage}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonsText}>Sign up</Text>
        </TouchableOpacity>
        <Pressable
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Text style={styles.pressable}>Already have an account? Sign in</Text>
        </Pressable>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  logo: { width: 100, height: 100, resizeMode: "contain", marginTop: 30 },
  title: { fontSize: 24, marginTop: 20, fontWeight: "bold", color: "#717171" },
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
    marginTop: 50,
  },
  buttonsText: {
    fontSize: 19,
    color: "#979797",
  },
  pressable: { color: "#7E7E7E", marginTop: 20, marginBottom: 50 },
});
