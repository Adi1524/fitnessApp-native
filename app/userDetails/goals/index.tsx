import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

type UserParams = {
    name?: string;
    age?: string;
    gender?: string;
    height?: string;
    weight?: string;
};

export default function GoalScreen() {
    const router = useRouter();
    const { name, age, gender, height, weight } = useLocalSearchParams<UserParams>();
    console.log("didwegtittt", name, age, gender)

    const [goal, setGoal] = useState<string>('Lose Weight');
    const [activity, setActivity] = useState<string>('Moderate');

    const handleNext = () => {
        router.push({
            pathname: '/userDetails/diet-preference',
            params: {
                name,
                age,
                gender,
                height,
                weight,
                goal,
                activity,
            },
        });
    };

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Whats your goal?</Text>
            <Text>Goal:

                {goal}</Text>

            <RadioButton.Group onValueChange={value => setGoal(value as any)} value={goal}>
                <View style={styles.radioItem}>
                    <RadioButton value="Lose Weight" />
                    <Text>Lose weight</Text>
                </View>
                <View style={styles.radioItem}>
                    <RadioButton value="Look Fit" />
                    <Text>Look Fit</Text>
                </View>

            </RadioButton.Group>
            <Text>Activity Level: </Text>

       <RadioButton.Group onValueChange={(value) => setActivity(value)} value={activity}>
  <View style={styles.radioItem}>
    <RadioButton value="sedentary" />
    <Text>Sedentary (little or no exercise)</Text>
  </View>
  <View style={styles.radioItem}>
    <RadioButton value="lightly_active" />
    <Text>Lightly Active (1–3 days/week)</Text>
  </View>
  <View style={styles.radioItem}>
    <RadioButton value="moderately_active" />
    <Text>Moderately Active (3–5 days/week)</Text>
  </View>
  <View style={styles.radioItem}>
    <RadioButton value="very_active" />
    <Text>Very Active (6–7 days/week)</Text>
  </View>
  <View style={styles.radioItem}>
    <RadioButton value="extra_active" />
    <Text>Extra Active (athlete or training twice a day)</Text>
  </View>
</RadioButton.Group>



            <Button title="Next" onPress={handleNext} />
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 22, marginBottom: 20 },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    }
});
