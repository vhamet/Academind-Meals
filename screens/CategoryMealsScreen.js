import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import MealList from '../components/MealList';
import CustomText from '../components/CustomText';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const meals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return !meals || !meals.length ? (
    <View style={style.empty}>
      <CustomText style={{ fontSize: 20 }}>
        No meal found. Check your filters
      </CustomText>
    </View>
  ) : (
    <MealList meals={meals} navigation={navigation} />
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const categoryTitle = CATEGORIES.find(category => category.id === categoryId)
    .title;

  return {
    headerTitle: categoryTitle,
  };
};

const style = StyleSheet.create({
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryMealsScreen;
