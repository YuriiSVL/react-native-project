import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import BgImage from "../../assets/images/back-ground.jpg";
import ProfilePic from "../../assets/images/profilePicBig.jpg";

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={BgImage} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.profileWrapper}>
          <View style={styles.proflePic}>
            <Image source={ProfilePic} style={{ borderRadius: 16 }} />
            <TouchableOpacity style={styles.RemovePicBtn}>
              <Text>
                <Feather name="x-circle" size={25} color="#E8E8E8" />
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>Natali Romanova</Text>
          <TouchableOpacity
            style={styles.logOutBtn}
            // onPress={navigation.navigate("login")}
          >
            <Text>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "50%",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
    alignItems: "center",
    minWidth: "100%",
    minHeight: "100%",
  },
  profileWrapper: {
    minWidth: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 22,
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: 700,
  },
  proflePic: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    top: -60,
    alignSelf: "center",
  },
  RemovePicBtn: {
    position: "absolute",
    right: -12,
    bottom: 12,
  },
  profileName: {
    color: "#212121",
    fontFamily: "RobotoMedium",
    fontSize: 30,
    letterSpacing: 0.3,
    marginTop: 70,
    marginBottom: 33,
  },
  logOutBtn: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  postPic: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  postWrapper: {
    marginBottom: 34,
  },
  postTitle: {
    marginBottom: 8,
    fontFamily: "RobotoMedium",
    fontSize: 16,
  },
});
