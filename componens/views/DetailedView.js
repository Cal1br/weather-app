import React from "react";
import { Text, View, StyleSheet } from "react-native";

const DetailedView = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View style={styles.weatherView}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.text}>{item.lat}</Text>
      <Text style={styles.text}>{item.lng}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});

export default DetailedView;
