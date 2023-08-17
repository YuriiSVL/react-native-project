import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isEmailOnFocus, setIsEmailOnFocus] = useState(false);
  const [isPasswordOnFocus, setIsPasswordOnFocus] = useState(false);

  const hideKeyBoard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyBoard}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/back-ground.jpg")}
          style={styles.image}
        >
          <View
            style={{
              ...styles.form,
              paddingBottom: isShowKeyboard ? 16 : 78,
            }}
          >
            <Text style={styles.formTitle}>Увійти</Text>

            <View style={{ marginBottom: 16 }}>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: isEmailOnFocus ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder="Адреса електронної пошти"
                onFocus={() => {
                  setIsShowKeyboard(true);
                  setIsEmailOnFocus(true);
                }}
                onBlur={() => {
                  setIsEmailOnFocus(false);
                }}
              ></TextInput>
            </View>
            <View
              style={{
                position: "relative",
                marginBottom: isShowKeyboard ? 16 : 43,
              }}
            >
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: isPasswordOnFocus ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder="Пароль"
                secureTextEntry={true}
                onFocus={() => {
                  setIsShowKeyboard(true);
                  setIsPasswordOnFocus(true);
                }}
                onBlur={() => {
                  setIsPasswordOnFocus(false);
                }}
              ></TextInput>
              <TouchableOpacity style={styles.showPassBtn}>
                <Text
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 16,
                    color: "#1B4371",
                  }}
                >
                  Показати
                </Text>
              </TouchableOpacity>
            </View>

            {!isShowKeyboard && (
              <>
                <TouchableOpacity style={styles.btn} onPress={hideKeyBoard}>
                  <Text style={styles.btnText}>Увійти</Text>
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 16,
                    color: "#1B4371",
                  }}
                >
                  Немає акаунту? Зареєструватися
                </Text>
              </>
            )}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
    alignItems: "center",
  },

  form: {
    minWidth: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 32,
  },

  formTitle: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "RobotoMedium",
    fontSize: 30,
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  input: {
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    padding: 16,
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#212121",
  },
  btn: {
    width: 343,
    backgroundColor: "#FF6C00",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 100,
    marginBottom: 16,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontFamily: "Roboto",
  },
  showPassBtn: {
    position: "absolute",
    right: 16,
    top: 16,
  },
});
