import React from "react";
import { View, Modal, StyleSheet, Button, Text } from "react-native";
import { LocationsContext } from "../contexts/LocationsContext";
import {
  deleteMeALocation,
  findMeALocation,
} from "../../services/DatabaseService";

const DeletionConfirmationDialog = (props) => {
  const { locationList, setLocationList } = React.useContext(LocationsContext);

  const deleteHandler = () => {
    const item = props.getItemForDeletion;
    console.log(props);
    console.log(item);
    if (item.id) {
      deleteMeALocation(item.id);
      setLocationList(locationList.filter((obj) => obj.id !== item.id));
    } else {
      findMeALocation(item.lat, item.lng).then((value) => {
        console.log(value);
        deleteMeALocation(value.id);
        setLocationList(locationList.filter((obj) => obj.id !== value.id));
      });
    }

    props.handleCancel();
  };

  return (
    <Modal visible={props.isVisible} animationType={"slide"}>
      <View style={styles.modalWrapper}>
        <Text style={styles.header}>
          Are you sure you want to delete this location?
        </Text>
        <Text style={styles.item}>{props.getItemForDeletion.title}</Text>
        <View style={styles.buttonHolder}>
          <View style={styles.buttonWrapper}>
            <Button title={"No"} color="red" onPress={props.handleCancel} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title={"Yes"} color="green" onPress={deleteHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeletionConfirmationDialog;

const styles = StyleSheet.create({
  modalWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    height: "100%",
  },
  buttonHolder: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonWrapper: {
    width: 100,
  },
  header: {
    color: "white",
    fontSize: 26,
    padding: 20,
    textAlign: "center",
    textAlignVertical: "center",
  },
  item: {
    color: "white",
    paddingBottom: "65%",
  },
});
