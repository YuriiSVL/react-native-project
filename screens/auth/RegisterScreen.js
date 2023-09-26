import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
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
  KeyboardAvoidingView,
} from "react-native";

export default function RegisterScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isLoginOnFocus, setIsLoginOnFocus] = useState(false);
  const [isEmailOnFocus, setIsEmailOnFocus] = useState(false);
  const [isPasswordOnFocus, setIsPasswordOnFocus] = useState(false);

  const initialState = {
    login: "",
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);

  const hideKeyBoard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyBoard}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/back-ground.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView>
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 16 : 78,
              }}
            >
              <View style={styles.addAvatarBox}>
                <TouchableOpacity style={styles.addAvatarBtn}>
                  <View style={{ with: 25, height: 25 }}>
                    <Svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <Circle
                        cx="12.5"
                        cy="12.5"
                        r="12"
                        fill="white"
                        stroke="#FF6C00"
                      />
                      <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                        fill="#FF6C00"
                      />
                    </Svg>
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={styles.formTitle}>Реєстрація</Text>
              <View style={{ marginBottom: 16 }}>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isLoginOnFocus ? "#FF6C00" : "#E8E8E8",
                  }}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setIsLoginOnFocus(true);
                  }}
                  onBlur={() => {
                    setIsLoginOnFocus(false);
                  }}
                  placeholder="Логін"
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                ></TextInput>
              </View>
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
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
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
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
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
                  <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                    <Text style={styles.btnText}>Зареєструватись</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "Roboto",
                      fontSize: 16,
                      color: "#1B4371",
                    }}
                  >
                    Вже є акаунт? Увійти
                  </Text>
                </>
              )}
            </View>
          </KeyboardAvoidingView>
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
    position: "relative",
    minWidth: "100%",
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
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
  addAvatarBox: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    top: -60,
    left: 128,
  },
  showPassBtn: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  addAvatarBtn: {
    position: "absolute",
    right: -12,
    bottom: 12,
  },
});
