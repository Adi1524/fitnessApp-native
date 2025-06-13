import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

type UserParams = {
  name?: string;
  age?: string;
  gender?: string;
  height?: string;
  weight?: string;
  goal?: string;
  activity?: string;
  isVegetarian?: string;
  isVegan?: string;
  isGlutenFree?: string;
  isLactoseFree?: string;
};

export default function WorkoutPreference() {
  const router = useRouter();
  const {
    name,
    age,
    gender,
    height,
    weight,
    goal,
    activity,
    isVegetarian,
    isVegan,
    isGlutenFree,
    isLactoseFree,
  } = useLocalSearchParams<UserParams>();

  const [workoutLocation, setWorkoutLocation] = useState<'home' | 'gym'>('home');
  const [daysPerWeek, setDaysPerWeek] = useState<string>('3');
  const [equipmentAvailable, setEquipmentAvailable] = useState(false);

  const handleNext = () => {
    router.push({
      pathname: '/userDetails/summary',
      params: {
        name,
        age,
        gender,
        height,
        weight,
        goal,
        activity,
        isVegetarian,
        isVegan,
        isGlutenFree,
        isLactoseFree,
        workoutLocation,
        daysPerWeek,
        equipmentAvailable: equipmentAvailable.toString(),
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Preferences</Text>

      <Text>Where do you prefer to workout?</Text>
      <View style={styles.radioRow}>
        <Button
          title="Home"
          onPress={() => setWorkoutLocation('home')}
          color={workoutLocation === 'home' ? 'blue' : 'gray'}
        />
        <Button
          title="Gym"
          onPress={() => setWorkoutLocation('gym')}
          color={workoutLocation === 'gym' ? 'blue' : 'gray'}
        />
      </View>

      <Text>How many days per week?</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={daysPerWeek}
        onChangeText={setDaysPerWeek}
      />

      <View style={styles.switchRow}>
        <Text>Do you have equipment available?</Text>
        <Switch value={equipmentAvailable} onValueChange={setEquipmentAvailable} />
      </View>

      <Button title="Finish" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  radioRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 10,
    borderRadius: 6,
  },
});
