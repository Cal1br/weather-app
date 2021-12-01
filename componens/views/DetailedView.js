import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import {
  getDataForLocation,
  transformToHourAndMinutes,
} from "../../services/WeatherService";
import DailyData from "../elements/DailyData";
import HourlyData from "../elements/HourlyData";
const DetailedView = ({ route, navigation }) => {
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);
  const [locaionData, setLocationData] = React.useState({
    current: {
      sunrise: "",
    },
    hourly: [],
  });
  const { item } = route.params;
  React.useEffect(() => {
    getDataForLocation(item).then((result) => {
      setLocationData(result);
      setIsDataLoaded(true);
    });
  }, []);
  return isDataLoaded ? (
    <View style={styles.weatherView}>
      <View style={styles.titleHolder}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.underTitle}>
          Location latitude: {item.lat} and longitude: {item.lng}
        </Text>
      </View>
      <ScrollView style={styles.details}>
        <View style={styles.currentDataView}>
          <Text style={styles.currentTitle}>Current Temperature</Text>
          <Text style={styles.info}>
            Sunrise at: {transformToHourAndMinutes(locaionData.current.sunrise)}
          </Text>
          <Text style={styles.info}>
            Sunset at: {transformToHourAndMinutes(locaionData.current.sunset)}
          </Text>
          <Text style={styles.info}>
            Temperature: {locaionData.current.temp} °C
          </Text>
          <Text style={styles.info}>
            Feels like: {locaionData.current.feels_like} °C
          </Text>
          <Text style={styles.info}>
            Wind speed: {locaionData.current.wind_speed}
          </Text>
          {/* TODO get units */}
          <Text style={styles.info}>
            Wind direction: {locaionData.current.wind_deg}
          </Text>
        </View>
        <View>
          <Text style={styles.hourlyTemperatures}>Hourly temperatures</Text>
          <ScrollView
            horizontal={true}
            style={styles.hourlyView}
            alwaysBounceHorizontal={true}
          >
            {locaionData.hourly.map((item) => {
              return <HourlyData key={item.dt} info={item} />;
            })}
          </ScrollView>
        </View>
        <View>
          <Text style={styles.dailyTemperatures}>Daily temperatures</Text>
          <ScrollView
            horizontal={true}
            style={styles.hourlyView}
            alwaysBounceHorizontal={true}
          >
            {locaionData.daily.map((item) => {
              return <DailyData key={item.dt} info={item} />;
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  ) : (
    <View style={styles.loading}>
      <Text>Loading</Text>
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
  currentTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
  },
  title: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
  underTitle: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },
  titleHolder: {},
  details: {},
  currentDataView: {
    padding: 35,
  },
  info: { color: "white" },
  hourlyView: {
    paddingTop: 20,
    margin: 5,
  },
  hourlyTemperatures: {
    marginTop: 20,
    textAlign: "center",
    color: "white",
    fontSize: 30,
  },
  dailyTemperatures: {
    marginTop: 20,
    textAlign: "center",
    color: "white",
    fontSize: 30,
  },
  loading: {
    backgroundColor: "#000000",
    height: "100%",
  },
});

export default DetailedView;
