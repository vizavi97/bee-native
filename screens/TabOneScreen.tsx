import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import {Card} from "../components/card/Card";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Card/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "#f5f4f9",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
