import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { View, StyleSheet } from 'react-native';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import CustomText from '../components/CustomText';

const FavoritesScreen = ({ navigation }) => {
  const meals = useSelector(state => state.meals.favoriteMeals);

  return !meals || !meals.length ? (
    <View style={style.empty}>
      <CustomText style={{ fontSize: 20 }}>
        No favorite yet ! Start adding some !
      </CustomText>
    </View>
  ) : (
    <MealList meals={meals} navigation={navigation} />
  );
};

FavoritesScreen.navigationOptions = navigationData => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Filters"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const style = StyleSheet.create({
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoritesScreen;
