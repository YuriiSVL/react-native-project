import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "../user/CreatePostsScreen";
import ProfileScreen from "../user/ProfileScreen";
import { Ionicons, Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import PostsScreen from "../user/PostsScreen";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          paddingTop: 9,
          paddingBottom: 34,
          paddingHorizontal: 90,
          borderTopColor: "#212121CC",
          height: 83,
        },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="grid-outline" size={24} color="#212121CC" />
          ),
        }}
      />
      <Tab.Screen
        name="Create posts"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: { display: "none" },

          tabBarIcon: () => (
            <View style={styles.addPostBtn}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 24,
                }}
              >
                +
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Feather name="user" size={24} color="#212121CC" />,
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  addPostBtn: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
