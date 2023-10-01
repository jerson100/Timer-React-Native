/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import Header from 'components/Header';
import Timer from 'components/Timer';
import ButtonStart from 'components/ButtonStart';

const CURRENT_TIMES = [25 * 60, 5 * 60, 15 * 60];

const colors = ['#F7DC6F', '#A2D9CE', '#D7BDE2'];

function App(): JSX.Element {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState(CURRENT_TIMES[0]);
  const [currentTime, setCurrentTime] = useState<number>(0);

  useEffect(() => {
    setIsRunning(false);
  }, [currentTime]);

  useEffect(() => {
    if (time === 0) {
      setIsRunning(false);
    }
  }, [time]);

  useEffect(() => {
    let interval: any = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => prev - 1);
      }, 10);
    } else {
      setTime(prev => {
        if (prev >= 0) return prev;
        return CURRENT_TIMES[currentTime];
      });
    }
    return () => clearInterval(interval);
  }, [isRunning, currentTime]);

  const handlePress = useCallback((index: number) => {
    setTime(CURRENT_TIMES[index]);
    setCurrentTime(index);
  }, []);

  const handlePressStart = useCallback(() => {
    setIsRunning(prev => !prev);
  }, []);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: colors[currentTime],
        },
      ]}>
      <View style={styles.content}>
        <Text style={styles.text}>Pomodoro</Text>
        <Header currentTime={currentTime} handlePress={handlePress} />
        <Timer time={time} />
        <ButtonStart isRunning={isRunning} handlePress={handlePressStart} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 15,
    borderWidth: 3,
    flex: 1,
  },
});

export default App;
