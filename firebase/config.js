// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9OznpyCXa8ljOCe4_Rje7O2l6x6WL-x0",
  authDomain: "react-native-app-dcb17.firebaseapp.com",
  projectId: "react-native-app-dcb17",
  storageBucket: "react-native-app-dcb17.appspot.com",
  messagingSenderId: "644117298872",
  appId: "1:644117298872:web:6f7bb112495cc74e433e4d",
  measurementId: "G-YLYMQKDP1W",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
