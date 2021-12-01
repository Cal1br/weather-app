import React from "react";
import { View } from "react-native";

const DailyData = ({ info }) => {


    return (<View style={styles.dailyView}>
        <Text style={styles.timeView}>{new Date(info.dt)}</Text>
        <Text>Sunrise at: {new Date(info.sunrise)}</Text>
        <Text>Sunset at: {new Date(info.sunset)}</Text>
        <Text>Moonrise at: {new Date(info.moonrise)}</Text>
        <Text>Moonset at: {new Date(info.moonset)}</Text>
        <View></View>
    </View>)
}

const styles = StyleSheet.create({
    dailyView: {

    },
    timeView: {

    }
});


export default DailyData;