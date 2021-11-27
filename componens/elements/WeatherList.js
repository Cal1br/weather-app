import { render } from 'react-dom';
import { StyleSheet, View, FlatList } from 'react-native';

/* weather should be touchable sending user to detailed view */
const WeatherList = () => {
  const [weatherList, setWeatherList] = React.useState([]);
  React.useEffect(() => {
    //get weather data from api
  }, []);
  /*get date as key*/
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item}
        data={weatherList}
        renderItem={(itemData) => {
          return <WeatherItem data={itemData.item} />;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherList;
