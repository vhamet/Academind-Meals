import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from './MealItem';

import { MEALS_ROUTES } from '../const/navigation';

const MealList = ({ meals, navigation }) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        meal={item}
        onSelect={() => {
          navigation.navigate({
            routeName: MEALS_ROUTES.MEAL_DETAIL,
            params: {
              mealId: item.id,
              mealTitle: item.title,
              isFavorite: favoriteMeals.some(meal => meal.id === item.id),
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default MealList;
