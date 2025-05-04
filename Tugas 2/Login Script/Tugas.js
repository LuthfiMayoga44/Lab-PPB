import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";

const userList = [
  { name: "Luthfi Mayoga", userID: "luthfi", password: "123" },
  { name: "Luhut", userID: "luhut", password: "456" },
  { name: "Prabowo", userID: "prabowo", password: "678" },
];

const LoginScreen = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const matchedUser = userList.find(
      (user) => user.userID === userID && user.password === password
    );

    if (matchedUser) {
      Alert.alert("Login Successful", `Welcome, ${matchedUser.name}!`);
    } else {
      Alert.alert(
        "Login Failed",
        "Invalid UserID or Password. Please try again."
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#800080" barStyle="light-content" />

      <View style={styles.container}>
        <Text style={styles.welcomeText}>Selamat Datang</Text>

        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          }}
          style={styles.profileImage}
        />

        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>Login</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>UserID:</Text>
            <TextInput
              style={styles.input}
              value={userID}
              onChangeText={setUserID}
              placeholder="Enter your UserID"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password:</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#800080",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#800080",
    width: "100%",
    paddingHorizontal: 90,

  },
  
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 30,
    marginBottom: 30,
    textAlign: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#fff",
  },
  formContainer: {
    width: "95%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: "#4a90e2",
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  signUpButton: {
    marginTop: 10,
  },
  signUpText: {
    color: "#4a90e2",
    textAlign: "center",
  },
});

export default LoginScreen;
