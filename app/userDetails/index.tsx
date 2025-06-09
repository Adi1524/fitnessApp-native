import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function UserDetails() {
    const router = useRouter();
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [gender, setGender] = useState<'male' | 'female' | 'other' | ''>('');
    const [height, setHeight] = useState<string>('');
    const [weight, setWeight] = useState<string>('');

    const handleNext = () => {
        router.push({
            pathname: '/userDetails/goals',
            params: {
                name,
                age,
                gender,
                height,
                weight,
            },
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tell us about you</Text>

            <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
            <TextInput placeholder="Age" value={age} onChangeText={setAge} style={styles.input} keyboardType="numeric" />
            <View style={styles.pickerWrapper}>
            <Picker
                selectedValue={gender}
                onValueChange={(itemValue) => setGender(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
            </Picker>
            </View>
            <TextInput placeholder="Height (cm)" value={height} onChangeText={setHeight} style={styles.input} keyboardType="numeric" />
            <TextInput placeholder="Weight (kg)" value={weight} onChangeText={setWeight} style={styles.input} keyboardType="numeric" />

            <Button title="Next" onPress={handleNext} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, marginTop: 50 },
    title: { fontSize: 22, marginBottom: 20 },
    input: { borderWidth: 1, padding: 10, borderRadius: 6, marginBottom: 12,   backgroundColor: 'white', },
    pickerWrapper: {
  borderWidth: 1,
  borderRadius: 6,
  marginBottom: 12,
  overflow: 'hidden',
},
    picker: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
    }
});
