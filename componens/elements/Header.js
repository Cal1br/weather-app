import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { LocationsContext } from "../contexts/LocationsContext";
import AddLocation from "../modals/AddLocation";
import { insertPlace } from "../../services/DatabaseService";

/* TODO maybe make the button SVG */
const Header = (props) => {
  const { locationList, setLocationList } = React.useContext(LocationsContext);
  const [isAddMode, setIsAddMode] = React.useState("");

  const addLocationHandler = (locationObject) => {
    if (locationObject.title && locationObject.lat && locationObject.lng) {
      if (
        locationList.find(
          (obj) =>
            obj.lat == locationObject.lat && obj.lng == locationObject.lng
        )
      ) {
        ToastAndroid.show("This place is already added", ToastAndroid.SHORT);
        return;
      } else {
        insertPlace(locationObject)
          .then(() => {
            console.log(locationList);
            setLocationList([
              ...locationList,
              {
                title: locationObject.title,
                lat: locationObject.lat,
                lng: locationObject.lng,
              },
            ]);
            ToastAndroid.show("Place added!", ToastAndroid.SHORT);
          })
          .catch(() => {
            ToastAndroid.show(
              "An error has occured when adding place.",
              ToastAndroid.SHORT
            );
          });
        setIsAddMode(false);
      }
    } else {
      ToastAndroid.show("You have not selected a place!", ToastAndroid.SHORT);
    }
  };
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.headerTitle}>{props.title}</Text>
      <TouchableOpacity
        style={{ flexGrow: 1 }}
        onPress={() => setIsAddMode(true)}
      >
        <View style={styles.buttonHolder}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableOpacity>
      <AddLocation
        isVisible={isAddMode}
        onCancel={() => setIsAddMode(false)}
        onAdd={addLocationHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    width: "100%",
    height: 45,
    backgroundColor: "#1c1f1d",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  headerTitle: {
    textAlign: "center",
    textAlignVertical: "center",
    borderColor: "black",
    color: "white",
    borderWidth: 2,
    flexGrow: 10,
    height: 90,
  },
  buttonHolder: {
    width: "100%",
    flexGrow: 1,
  },
  buttonText: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: 25,
  },
});
export default Header;
