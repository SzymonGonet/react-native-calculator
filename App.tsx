import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Switch, SafeAreaView } from "react-native";
import { ThemeContext } from "./src/context/ThemeContext";
import { Colors } from "./src/styles/Colors";
import MyKeyboard from "./src/components/MyKeyboard";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme == "light"
            ? styles.container
            : [styles.container, { backgroundColor: "black" }]
        }
      >
        <StatusBar />
        <Switch
          trackColor={{ false: null, true: "#555a60" }}
          thumbColor={"#f4ab44"}
          ios_backgroundColor={"#555a60"}
          value={theme == "light"}
          onValueChange={() => setTheme(theme == "light" ? "dark" : "light")}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
