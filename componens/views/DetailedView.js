import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { getDataForLocation } from "../../services/WeatherService";
import HourlyData from '../elements/HourlyData';
const DetailedView = ({ route, navigation }) => {
  const [locaionData, setLocationData] = React.useState();
  const { item } = route.params;
  React.useEffect(() => {
    console.log(getDataForLocation(item))
  }, []);
  return (
    <View style={styles.weatherView}>
      <View style={styles.titleHolder}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.underTitle}>Location latitude: {item.lat} and longitude: {item.lng}</Text>
      </View>
      <ScrollView style={styles.details}>
        <View style={styles.currentData}>
          <Text>Sunrise at: {new Date(locaionData.current.sunrise)}</Text>
          <Text>Sunset at: {new Date(locaionData.current.sunset)}</Text>
          <Text>Temperature: {new Date(locaionData.current.temp)}°C</Text>
          <Text>Feels like: {new Date(locaionData.current.feels_like)}°C</Text>
          <Text>Wind speed: {new Date(locaionData.current.wind_speed)}</Text> {/* TODO get units */}
          <Text>Wind direction: {new Date(locaionData.current.wind_def)}</Text> {/* //TODO CASE */}
        </View>
        {locaionData.hourly.map((item) => {
          <HourlyData info={item} />
        })}

      </ScrollView>

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
  title: {
    color: 'white',
    fontSize: 30,
  },
  underTitle: {
    color: 'white',
    fontSize: 12,
  },
  titleHolder: {

  },
  details: {

  },
  currentData: {

  },
});

export default DetailedView;
