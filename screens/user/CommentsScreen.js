import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";

export default function CommentsScreen() {
  const [comment, setComment] = useState("");
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  useEffect(() => {
    if (!isKeyboardShown) {
      Keyboard.dismiss();
    }
  }, [isKeyboardShown]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          setIsKeyboardShown(false);
        }}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Text>
                <AntDesign name="arrowleft" size={24} color="#151515cc" />
              </Text>
            </TouchableOpacity>
            <Text style={styles.title}>Коментарі</Text>
          </View>

          <View style={styles.body}>
            <Text>Comments</Text>
          </View>

          <View
            style={{
              ...styles.commentInputWrapper,
              paddingBottom: isKeyboardShown && Platform.OS == "ios" ? 10 : 16,
            }}
          >
            <TextInput
              style={styles.commentInput}
              placeholder="Коментувати..."
              value={comment}
              onChangeText={setComment}
              onFocus={() => {
                setIsKeyboardShown(true);
              }}
            />
            <TouchableOpacity style={styles.sendIcon}>
              <Ionicons
                name="arrow-up-circle-sharp"
                size={34}
                color="#FF6C00"
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    flex: 1,
    width: "100%",
    paddingTop: 32,
    paddingHorizontal: 16,
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
  commentInput: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    padding: 16,
    fontSize: 16,
  },
  commentInputWrapper: {
    width: "100%",
    paddingHorizontal: 16,
  },
  sendIcon: {
    position: "absolute",
    top: 8,
    right: 24,
  },
  postPic: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 32,
  },
  commentWrapper: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 24,
    alignSelf: "flex-end",
    gap: 16,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  comment: {
    backgroundColor: "#F6F6F6",
    width: 299,
    borderRadius: 6,
    borderTopLeftRadius: 0,
    padding: 16,
    fontFamily: "Roboto",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
    marginBottom: 24,
    alignSelf: "flex-end",
  },
});
