import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface HeaderProps {
  currentTime: number;
  handlePress: (index: number) => void;
}

const options = ['Pomodoro', 'Short Break', 'Long Break'];

const Header = ({currentTime, handlePress}: HeaderProps) => {
  return (
    <View style={styles.container}>
      {options.map((item, index) => (
        <TouchableOpacity
          onPress={() => handlePress(index)}
          style={[
            styles.button,
            currentTime !== index && {
              borderColor: 'transparent',
            },
          ]}
          key={index}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: 3,
    padding: 5,
    flexGrow: 1,
    borderColor: 'white',
    marginVertical: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;
