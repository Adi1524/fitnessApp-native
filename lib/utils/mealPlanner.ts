import { BOOSTERS } from "../data/boosters";
import { MEALS } from "../data/meals";

export function generateMealPlan(tdee: number, type: string): { meals: any[], boosters: any[] } {
  let totalCalories = 0;
  let totalProtein = 0;
  const selectedMeals: any[] = [];

  const allowedMeals = MEALS.filter(m => m.type === type || m.type === 'vegan');

  for (const meal of allowedMeals) {
    if (totalCalories + meal.calories <= tdee - 300) {
      selectedMeals.push(meal);
      totalCalories += meal.calories;
      totalProtein += meal.protein;
    }
  }

  // Assume target protein = 1.6g per kg
  const targetProtein = 1.6 * 70; // Example: 70kg
  const remainingProtein = targetProtein - totalProtein;

  const boosters: any[] = [];
  let proteinGap = remainingProtein;

  for (const booster of BOOSTERS) {
    if ((booster.type === type || booster.type === 'vegan') && proteinGap > 0) {
      boosters.push(booster);
      proteinGap -= booster.protein;
    }
  }

  return { meals: selectedMeals, boosters };
}
