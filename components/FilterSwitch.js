import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';

import CustomText from './CustomText';

import Colors from '../const/Colors';

const FilterSwitch = ({ label, value, onChange }) => (
  <View style={styles.filterContainer}>
    <CustomText>{label}</CustomText>
    <Switch
      value={value}
      onValueChange={onChange}
      trackColor={{ true: Colors.accent }}
      thumbColor={Colors.primary}
    />
  </View>
);

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
});

export default FilterSwitch;
