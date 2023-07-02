// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyAdOVMPh_2sNw2iDOnOdonE0X7TXhFv-h8",
    authDomain: "project-blog-fe7c6.firebaseapp.com",
    projectId: "project-blog-fe7c6",
    storageBucket: "project-blog-fe7c6.appspot.com",
    messagingSenderId: "928734854960",
    appId: "1:928734854960:web:3724f8fc2fbd80eb3552f5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// export const auth = getAuth(app, {
//     persistence: getReactNativePersistence(AsyncStorage),
// });
export const db = getFirestore(app);
export const storage = getStorage(app);
