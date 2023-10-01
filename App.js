import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import Home from "./screens/user/Home";
import CommentsScreen from "./screens/user/CommentsScreen";
import MapScreen from "./screens/user/MapScreen";
import { store } from "./redux/store";
import Main from "./components/main";

// fireBase: react-native-app-dcb17

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

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
      {/* <MapScreen /> */}

      <Provider store={store}>
        <Main />
        {/* <NavigationContainer>
          <AuthStack.Navigator initialRouteName="Login">
            <AuthStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <AuthStack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <AuthStack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </AuthStack.Navigator>
        </NavigationContainer> */}
      </Provider>
    </>
  );
}
