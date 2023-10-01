import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ButtonStartProps {
  handlePress: () => void;
  isRunning: boolean;
}

const ButtonStart = ({handlePress, isRunning}: ButtonStartProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{isRunning ? 'Stop' : 'Start'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#333333',
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
  },
});

export default memo(ButtonStart);
