import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ children, ...props }) => (
  <Text style={styles.text} {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: { fontFamily: 'open-sans' },
});

export default CustomText;
