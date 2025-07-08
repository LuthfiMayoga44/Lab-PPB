import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    if (count >= 10) {
      Alert.alert('Nilai maksimal tercapai.');
    } else {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={handleIncrease} />
        <View style={{ width: 20 }} />
        <Button title="-" onPress={handleDecrease} />
      </View>
    </View>
  );
};

export default CounterApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  counter: {
    fontSize: 48,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
