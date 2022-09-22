import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function GuessLogItem({ guess, round }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>Round: {round}</Text>
      <Text style={styles.itemText}>Opponent's guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    padding: 15,
    borderRadius: 40,
    marginVertical: 10,
    backgroundColor: Colors.accent500,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
  },
  itemText: {
    fontFamily: "open-sans",
    fontWeight: "bold",
  }
});
