export function calculateBMR(gender: string, weightKg: number, heightCm: number, age: number): number {
  return gender === 'male'
    ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
    : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
}

export function adjustForGoal(tdee: number, goal: string): number {
  const cleaned = goal.trim().toLowerCase();
  if (cleaned === "lose weight") return tdee - 500;
  if (cleaned === "build muscle") return tdee + 300;
  return tdee;
}
