import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const LocationItem = (props) => {
  const item = props.item;

  const selectHandler = () => {
    props.navigation("Detailed View", { item: item });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={selectHandler}
      onLongPress={() => {
        props.onDelete(item);
      }}
    >
      <View style={styles.listWrapper}>
        <View style={styles.listItem}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: 40,
    paddingStart: 30,
    width: "100%",
    backgroundColor: "#1c1f1d",
    borderColor: "#000000",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginTop: 7,
  },
  title: {
    fontSize: 25,
    color: "white",
  },
  listWrapper: {
    paddingRight: "5%",
    paddingLeft: "5%",
  },
});

export default LocationItem;
