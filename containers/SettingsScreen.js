import { Button, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SettingsScreen({ setToken, userToken }) {
  return (
    <View>
      <Text>Hello Settings</Text>

      <Button
        title="Log Out"
        onPress={async () => {
          await AsyncStorage.removeItem(userToken);
          setToken(null);
        }}
      />
    </View>
  );
}
