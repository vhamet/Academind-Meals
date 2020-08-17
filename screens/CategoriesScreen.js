import React from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';

import { MEALS_ROUTES } from '../const/navigation';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
  const renderCategory = ({ item }) => (
    <CategoryGridTile
      title={item.title}
      color={item.color}
      onSelect={() => {
        navigation.navigate({
          routeName: MEALS_ROUTES.CATEGORY_MEALS,
          params: {
            categoryId: item.id,
          },
        });
      }}
    />
  );

  return (
    <FlatList data={CATEGORIES} renderItem={renderCategory} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'Meal Categories',
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

export default CategoriesScreen;
