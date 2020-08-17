import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import { MEALS_ROUTES, TABS_ROUTES } from '../const/navigation';
import Colors from '../const/Colors';

const defaultStackNavigatorOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: 'white',
};

const MealsNavigator = createStackNavigator(
  {
    [MEALS_ROUTES.CATEGORIES]: CategoriesScreen,
    [MEALS_ROUTES.CATEGORY_MEALS]: CategoryMealsScreen,
    [MEALS_ROUTES.MEAL_DETAIL]: MealDetailScreen,
  },
  { defaultNavigationOptions: defaultStackNavigatorOptions }
);

const FavoritesNavigator = createStackNavigator(
  {
    [TABS_ROUTES.FAVORITES]: FavoritesScreen,
    [MEALS_ROUTES.MEAL_DETAIL]: MealDetailScreen,
  },
  { defaultNavigationOptions: defaultStackNavigatorOptions }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  { defaultNavigationOptions: defaultStackNavigatorOptions }
);

const tabConfig = {
  [TABS_ROUTES.MEALS]: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: infos => (
        <Ionicons name="ios-restaurant" size={25} color={infos.tintColor} />
      ),
      tabBarColor: Colors.primary,
    }, 
  },
  [TABS_ROUTES.FAVORITES]: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: infos => (
        <Ionicons name="ios-star" size={25} color={infos.tintColor} />
      ),
      tabBarColor: Colors.accent,
    },
  },
};

const MealsTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabConfig, {
        activeColor: 'white',
        shifting: true,
      })
    : createBottomTabNavigator(tabConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accent,
        },
      });

const MainNavigator = createDrawerNavigator(
  {
    Meals: MealsTabNavigator,
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
    },
  }
);

export default createAppContainer(MainNavigator);
