import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { LocationsContext } from "../contexts/LocationsContext";
import DeletionConfirmationDialog from "../modals/DeletionConfirmationDialog";
import { fetchPlaces } from "../services/DatabaseService";
import LocationItem from "./LocationItem";
/* weather should be touchable sending user to detailed view */
const LocationList = () => {
  const { locationList, setLocationList } = React.useContext(LocationsContext);
  const [isItemDeletionMode, setIsItemDeletionMode] = React.useState(false);
  React.useEffect(() => {
    fetchPlaces().then((dbResult) => {
      setLocationList(dbResult.rows._array);
    });
  }, []);

  const deletionHandler = (item) => {
    setIsItemDeletionMode(true);
  };

  return (
    <View style={styles.view}>
      <DeletionConfirmationDialog
        isVisible={isItemDeletionMode}
        handleCancel={setIsItemDeletionMode(false)}
      />
      <FlatList
        keyExtractor={(item) =>
          item.id ? item.id : `lat:${item.lat}lng:${item.lng}`
        }
        data={locationList}
        renderItem={(itemData) => {
          console.log(itemData);
          return (
            <LocationItem item={itemData.item} onLongPress={deletionHandler} />
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#000000",
    height: "100%",
  },
});

export default LocationList;
