import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, TouchableOpacity } from 'react-native';

export default function App() {

  const [enteretGoal, setEnteretGoal] = useState("");

  const goalInputHandler = (enteretText) => {
    setEnteretGoal(enteretText);
  }

const addGoalHandler = () => {
    console.log(enteretGoal, 'ag')
}

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course goal"
                   style={styles.inputText}
                   onChangeText={ goalInputHandler }
                   />
        <Button title="Add"
                onPress={addGoalHandler}
                />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputText: {
    borderColor: 'black',
    width: '80%',
    borderWidth: 1,
    paddingLeft: 10,
  }
});
