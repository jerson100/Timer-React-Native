import React, {useMemo, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface TimerProps {
  time: number;
}

const Timer = ({time}: TimerProps) => {
  const formattedTime = useMemo(() => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }, [time]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formattedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    borderRadius: 15,
    padding: 15,
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 80,
    fontWeight: 'bold',
  },
});

export default memo(Timer);
