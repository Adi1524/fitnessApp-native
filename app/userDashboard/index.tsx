import { adjustForGoal, calculateBMR } from '@/lib/utils/bmr';
import { generateMealPlan } from '@/lib/utils/mealPlanner';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

const MealPlanner = () => {
  const {
    gender, weight, height, age, goal, isVegan, isVegetarian
  } = useLocalSearchParams();

  const bmr = calculateBMR(
    gender as string,
    parseFloat(weight as string),
    parseFloat(height as string),
    parseInt(age as string)
  );

  const tdee = adjustForGoal(bmr, goal as string);
  

  let dietType = "nonVegetarian";
  if (isVegan === 'true') dietType = 'vegan';
  else if (isVegetarian === 'true') dietType = 'vegetarian';

  const { meals, boosters } = generateMealPlan(tdee, dietType);

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text variant="headlineMedium">Meal Plan (Approx {Math.round(tdee)} kcal)</Text>

      {meals.map((meal, index) => (
        <Card key={index} style={{ marginVertical: 8 }}>
          <Card.Title title={meal.name} />
          <Card.Content>
            <Text>Calories: {meal.calories}</Text>
            <Text>Protein: {meal.protein}g</Text>
          </Card.Content>
        </Card>
      ))}

      <Text variant="headlineSmall">Protein Boosters</Text>

      {boosters.map((booster, index) => (
        <Card key={index} style={{ marginVertical: 6 }}>
          <Card.Title title={booster.name} />
          <Card.Content>
            <Text>Protein: {booster.protein}g</Text>
            <Text>Calories: {booster.calories}</Text>
          </Card.Content>
        </Card>
      ))}

      <Button mode="contained" style={{ marginTop: 20 }}>Save Plan</Button>
    </ScrollView>
  );
};

export default MealPlanner;
