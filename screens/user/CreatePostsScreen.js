import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Image,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

import { Camera } from "expo-camera";
import * as Location from "expo-location";

export default function CreatePostsScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [locationName, setLocationName] = useState("");
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [camera, setCamera] = useState(null);
  const [pic, setPic] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!isKeyboardShown) {
      Keyboard.dismiss();
    }
  }, [isKeyboardShown]);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    setPic(photo.uri);
    setLocation(location.coords);
  };

  const sendPhoto = () => {
    if (pic === null || title === "" || locationName === "") {
      console.log("empty fields");
      return;
    }
    navigation.navigate("Posts", { pic, title, locationName, location });
    setTitle("");
    setLocationName("");
    setPic(null);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsKeyboardShown(false);
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Posts");
            }}
          >
            <Text>
              <AntDesign name="arrowleft" size={24} color="#151515cc" />
            </Text>
          </TouchableOpacity>
          <Text style={styles.title}>Створити публікацію</Text>
        </View>

        <View
          style={{ ...styles.body, paddingBottom: isKeyboardShown ? 16 : 0 }}
        >
          <Camera style={styles.uploadPicBg} ref={setCamera}>
            {pic && (
              <View style={styles.takePhotoContainer}>
                <Image
                  source={{ uri: pic }}
                  style={{ height: 100, width: 100 }}
                />
              </View>
            )}
            <View style={styles.addPhotoIcon}>
              <TouchableOpacity onPress={takePhoto}>
                <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
          </Camera>
          <Text style={styles.uploadText}>Завантажте фото</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{
              marginBottom: isKeyboardShown && Platform.OS == "ios" ? 32 : 0,
            }}
          >
            <TextInput
              onChangeText={setTitle}
              value={title}
              style={styles.uploadName}
              placeholder="Назва..."
              onFocus={() => {
                setIsKeyboardShown(true);
              }}
            />
            <View style={styles.locationWrapper}>
              <TextInput
                onChangeText={setLocationName}
                value={locationName}
                style={styles.uploadLocation}
                placeholder="Місцевість..."
                onFocus={() => {
                  setIsKeyboardShown(true);
                }}
              />
              <Feather
                style={styles.locationIcon}
                name="map-pin"
                size={24}
                color="#BDBDBD"
              />
            </View>
          </KeyboardAvoidingView>

          <TouchableOpacity style={styles.publicateBtn}>
            <Text style={styles.publicateBtnText} onPress={sendPhoto}>
              Опублікувати
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.removePost}>
          <Text style={{ textAlign: "center" }}>
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 34,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: "100%",
    minHeight: 88,
    borderBottomWidth: 0.5,
    borderBottomColor: "#0000004d",
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontFamily: "RobotoMedium",
    lineHeight: 22,
    letterSpacing: -0.408,
    textAlign: "center",
  },
  body: {
    width: "100%",
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  uploadPicBg: {
    position: "relative",
    width: "100%",
    height: 240,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    marginBottom: 8,
  },
  camera: {
    alignSelf: "center",
    top: 90,
  },
  uploadText: {
    color: "#BDBDBD",
    fontFamily: "Roboto",
    fontSize: 16,
    marginBottom: 32,
  },
  uploadName: {
    height: 50,
    marginBottom: 16,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "Roboto",
  },
  uploadLocation: {
    width: "100%",
    height: 50,
    paddingLeft: 28,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "Roboto",
    marginBottom: 32,
  },
  locationWrapper: {
    position: "relative",
  },
  locationIcon: {
    position: "absolute",
    top: 13,
  },
  publicateBtn: {
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    height: 51,
    paddingVertical: 16,
    marginBottom: 120,
    alignSelf: "center",
  },
  publicateBtnText: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#BDBDBD",
  },
  removePost: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    paddingVertical: 8,
  },
  picContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
  },
  addPhotoIcon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "40%",
    left: "40%",
  },

  takePhotoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    borderBlockColor: "#fff",
    borderWidth: 1,
  },
});
