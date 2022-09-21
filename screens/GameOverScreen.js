import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

export default function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phones needed <Text style={styles.highlightText}>X</Text> rounds to
        guess the number <Text style={styles.highlightText}>Y</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    marginVertical: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 18,
    color: 'black',
  },
});
