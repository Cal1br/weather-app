import React from "react";
import { View } from "react-native";

const DailyData = ({ info }) => {


    return (<View style={styles.hourlyView}>
        <Text style={styles.timeView}>{new Date(info.dt)}</Text>
        <Text style={styles.tempView}>{info.temp}</Text>
        <Text style={styles.tempView}>{info.feels_like}</Text>
    </View>)
}

const styles = StyleSheet.create({
    dailyView: {

    },
    timeView: {

    }
});


export default DailyData;