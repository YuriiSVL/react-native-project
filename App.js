// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import React from "react";
import { useFonts } from "expo-font";

import RegisterScreen from "./screens/auth/RegisterScreen";
import LoginScreen from "./screens/auth/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/RobotoBold.ttf"),
    RobotoMedium: require("./assets/fonts/RobotoMedium.ttf"),
    RobotoBold: require("./assets/fonts/RobotoBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <RegisterScreen />
      {/* <LoginScreen /> */}
    </>
  );
}
