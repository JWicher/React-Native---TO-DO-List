import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const GoalItem = ({ text, index, removeGoal }) => {
  return (
    <TouchableOpacity onPress={removeGoal.bind(this, index)}>
      <View style={styles.userGoal}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  userGoal: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "#BADA55",
    borderColor: "black",
    borderWidth: 1,
    width: "100%"
  }
});
