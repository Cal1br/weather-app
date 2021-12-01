import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { transformToHourAndMinutes } from "../../services/WeatherService";

const DailyData = ({ info }) => {
  return (
    <View style={styles.dailyView}>
      <Text style={styles.whiteText}>
        {new Date(info.dt * 1000).toDateString()}
      </Text>
      <Text style={styles.whiteText}>
        Sunrise at: {transformToHourAndMinutes(info.sunrise)}
      </Text>
      <Text style={styles.whiteText}>
        Sunset at: {transformToHourAndMinutes(info.sunset)}
      </Text>
      <Text style={styles.whiteText}>
        Moonrise at: {transformToHourAndMinutes(info.moonrise)}
      </Text>
      <Text style={styles.whiteText}>
        Moonset at: {transformToHourAndMinutes(info.moonset)}
      </Text>
      <View style={styles.tempView}>
        <Text style={styles.whiteText}>Day temperature {info.temp.day}°C</Text>
        <Text style={styles.whiteText}>
          Night temperature {info.temp.night}°C
        </Text>
        <Text style={styles.whiteText}>
          Minimum temperature {info.temp.min}°C
        </Text>
        <Text style={styles.whiteText}>
          Maximum temperature {info.temp.max}°C
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dailyView: {
    width: 250,
    borderWidth: 1,
    borderColor: "white",
    padding: 15,
  },
  whiteText: {
    color: "white",
    textAlign: "center",
  },
});

export default DailyData;
