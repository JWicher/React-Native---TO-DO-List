import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState(["Goal 1", "Goal 2"]);
  const [isAddMode, setAddMode] = useState(false);

  const addGoalHandler = (newGoal) => {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, newGoal]);
    setAddMode(false);
  };
  const cancelAddGoalHandler = () => {
    setAddMode(false);
  };
  const changeModalVisibility = () => {
    setAddMode(true);
  };

  const removeGoalHandler = (itemIndex) => {
    let currentGoalsList = [...courseGoals];
    currentGoalsList.splice(itemIndex, 1);
    setCourseGoals(currentGoalsList);
  };

  return (
    <View style={styles.container}>
      <Button title="Add new button" onPress={changeModalVisibility} />
      <GoalInput
        isAddMode={isAddMode}
        onAddGoalHandler={addGoalHandler}
        onChangeModalVisibility={changeModalVisibility}
        onCancelAddGoalHandler={cancelAddGoalHandler}
      />

      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => "key" + index}
        renderItem={(itemData) => (
          <GoalItem
            text={itemData.item}
            index={itemData.index}
            removeGoal={removeGoalHandler}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  }
});
