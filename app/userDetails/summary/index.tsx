import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Paragraph, Text, Title } from 'react-native-paper';

type SummaryParams = {
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
  workoutLocation?: string;
  daysPerWeek?: string;
  equipmentAvailable?: string;
};

export default function Summary() {
  const router = useRouter();
  const params = useLocalSearchParams<SummaryParams>();

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
    workoutLocation,
    daysPerWeek,
    equipmentAvailable,
  } = params;

  const handleConfirm = () => {
    // Here you can save the data or navigate to a new page
    console.log('User Data Confirmed:', params);
    router.push({pathname:'/userDashboard',
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
        equipmentAvailable
      }
    })
 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>Summary of Your Details</Title>

      <Card style={styles.card}>
        <Card.Content>
          <Paragraph><Text style={styles.bold}>Name:</Text> {name}</Paragraph>
          <Paragraph><Text style={styles.bold}>Age:</Text> {age}</Paragraph>
          <Paragraph><Text style={styles.bold}>Gender:</Text> {gender}</Paragraph>
          <Paragraph><Text style={styles.bold}>Height:</Text> {height} cm</Paragraph>
          <Paragraph><Text style={styles.bold}>Weight:</Text> {weight} kg</Paragraph>
          <Paragraph><Text style={styles.bold}>Goal:</Text> {goal}</Paragraph>
          <Paragraph><Text style={styles.bold}>Activity Level:</Text> {activity}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Diet Preferences</Title>
          <Paragraph>Vegetarian: {isVegetarian === 'true' ? 'Yes' : 'No'}</Paragraph>
          <Paragraph>Vegan: {isVegan === 'true' ? 'Yes' : 'No'}</Paragraph>
          <Paragraph>Gluten Free: {isGlutenFree === 'true' ? 'Yes' : 'No'}</Paragraph>
          <Paragraph>Lactose Free: {isLactoseFree === 'true' ? 'Yes' : 'No'}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Workout Preferences</Title>
          <Paragraph>Location: {workoutLocation}</Paragraph>
          <Paragraph>Days per Week: {daysPerWeek}</Paragraph>
          <Paragraph>Equipment Available: {equipmentAvailable === 'true' ? 'Yes' : 'No'}</Paragraph>
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={handleConfirm} style={styles.button}>
        Confirm & Continue
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    marginBottom: 20,
  },
  card: {
    marginVertical: 10,
    padding: 10,
  },
  bold: {
    fontWeight: '700',
  },
  button: {
    marginTop: 30,
  },
});
