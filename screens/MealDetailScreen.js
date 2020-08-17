import React, { useEffect, useCallback } from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import CustomText from '../components/CustomText';
import { toggleFavorite } from '../store/actions/meals';

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const isCurrentMealFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId)
  );
  const availableMeals = useSelector(state => state.meals.meals);
  const meal = availableMeals.find(meal => meal.id === mealId);

  useEffect(() => {
    navigation.setParams({ isFavorite: isCurrentMealFavorite });
  }, [isCurrentMealFavorite]);

  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({ toggleFavorite: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.infos}>
        <CustomText>{meal.duration}m</CustomText>
        <CustomText>{meal.complexity.toUpperCase()}</CustomText>
        <CustomText>{meal.affordability.toUpperCase()}</CustomText>
      </View>
      <CustomText style={styles.title}>Ingredients</CustomText>
      {meal.ingredients.map(ingredient => (
        <View key={ingredient} style={styles.ingredient}>
          <CustomText>• {ingredient}</CustomText>
        </View>
      ))}
      <CustomText style={styles.title}>Steps</CustomText>
      {meal.steps.map((step, i) => (
        <View key={step} style={styles.step}>
          <CustomText>{`${i + 1}. ${step}`}</CustomText>
        </View>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavorite = navigationData.navigation.getParam('toggleFavorite');
  const isFavorite = navigationData.navigation.getParam('isFavorite');

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  infos: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: { fontFamily: 'open-sans-bold', fontSize: 20, textAlign: 'center' },
  ingredient: { marginVertical: 5, marginHorizontal: 20 },
  step: { marginVertical: 5, marginHorizontal: 20 },
});

export default MealDetailScreen;
