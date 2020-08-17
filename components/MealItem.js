import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import CustomText from './CustomText';

const MealItem = ({ meal, onSelect }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelect}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: meal.imageUrl }}
              style={styles.backgroundImage}
            >
              <Text numberOfLines={1} style={styles.title}>
                {meal.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <CustomText>{meal.duration}m</CustomText>
            <CustomText>{meal.complexity.toUpperCase()}</CustomText>
            <CustomText>{meal.affordability.toUpperCase()}</CustomText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  mealRow: { flexDirection: 'row' },
  mealHeader: { height: '85%' },
  mealDetail: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
});

export default MealItem;
