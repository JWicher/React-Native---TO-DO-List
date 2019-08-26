import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteretGoal, setEnteretGoal] = useState("");
  const goalInputHandler = (enteretText) => {
    setEnteretGoal(enteretText);
  };

  const addGoalHandler = () => {
    props.onAddGoalHandler(enteretGoal);
    setEnteretGoal("");
  };

  const cancelHandler = () => {
    props.onCancelAddGoalHandler();
    setEnteretGoal("");
  };

  return (
    <Modal visible={props.isAddMode} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal"
          style={styles.inputText}
          onChangeText={goalInputHandler}
          value={enteretGoal}
        />
        <View style={styles.buttonBox}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={cancelHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  inputText: {
    borderColor: "black",
    width: "80%",
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 5
  },
  buttonBox: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: "49%",
    alignItems: "stretch",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5
  }
});
