import React from "react";
import { View, Modal, StyleSheet, Button, Text } from "react-native";

const DeletionConfirmationDialog = (props) => {
  console.log("IUN");
  const [selectedPlace, setSelectedPlace] = React.useState({});

  const deleteHandler = () => {};

  return (
    <Modal visible={props.isVisible} animationType={"slide"}>
      <View style={styles.modalWrapper}>
        <Text>Are you sure you want to delete this item?</Text>
        <View>
          <View>
            <Button title={"No"} color="red" onPress={props.handleClose} />
          </View>
          <View>
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
    height: "35%",
  },
});
