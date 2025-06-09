import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View } from 'react-native';

type UserParams = {
  name?: string;
  age?: string;
  gender?: string;
  height?: string;
  weight?: string;
  goal?: string;
  activity?: string;
};

export default function DietPreference() {
  const router = useRouter();
  const { name, age, gender, height, weight, goal, activity } = useLocalSearchParams<UserParams>();

  // Example preferences
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const handleNext = () => {
    router.push({
      pathname: '/userDetails/workout-preference',
      params: {
        name,
        age,
        gender,
        height,
        weight,
        goal,
        activity,
        isVegetarian: isVegetarian.toString(),
        isVegan: isVegan.toString(),
        isGlutenFree: isGlutenFree.toString(),
        isLactoseFree: isLactoseFree.toString(),
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your diet preferences</Text>

      <View style={styles.switchRow}>
        <Text>Vegetarian</Text>
        <Switch value={isVegetarian} onValueChange={setIsVegetarian} />
      </View>

      <View style={styles.switchRow}>
        <Text>Vegan</Text>
        <Switch value={isVegan} onValueChange={setIsVegan} />
      </View>

      <View style={styles.switchRow}>
        <Text>Gluten Free</Text>
        <Switch value={isGlutenFree} onValueChange={setIsGlutenFree} />
      </View>

      <View style={styles.switchRow}>
        <Text>Lactose Free</Text>
        <Switch value={isLactoseFree} onValueChange={setIsLactoseFree} />
      </View>

      <Button title="Next" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
