import React from "react";
import { View, StyleSheet, Text } from "react-native";

const HourlyData = ({ info }) => {
  const dateObj = new Date(info.dt * 1000);
  const time =
    dateObj.getHours() < 10
      ? "0" + dateObj.getHours() + ":00"
      : dateObj.getHours() + ":00";
  return (
    <View style={styles.hourlyView}>
      <Text style={styles.timeView}>{time}</Text>
      <Text style={styles.tempView}>Temp: {info.temp}°C</Text>
      <Text style={styles.tempView}>Feels like: {info.feels_like}°C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hourlyView: {
    margin: 5,
    padding: 5,
    borderColor: "white",
    borderWidth: 1,
    width: 130,
  },
  timeView: { color: "white", textAlign: "center" },
  tempView: { color: "white", textAlign: "center" },
});

export default HourlyData;
