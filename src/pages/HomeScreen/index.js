import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import {LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart} from 'react-native-chart-kit';
import Slider from '@react-native-community/slider';

import styles from './styles';

export default function HomeScreen() {

  const x = [];

  const [a, setA] = useState(1)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)
  
  for(let i=-10; i<11; i++){
    x.push(i);
  }

  const y = x.map(val => a*Math.pow(val, 2) + b*val +c);

  return (
    <View style={styles.main}>
      <Text></Text>
      <LineChart
        data={{
          labels: x,
          datasets: [
            {
              data: y
            }
          ]
        }}
        width={Dimensions.get("window").width*0.95} // from react-native
        height={220}
        yAxisInterval={1} // optional, defaults to 1
        style={styles.chart}
        chartConfig={{
          backgroundGradientFrom: "#ededed",
          backgroundGradientTo: "#d6d6d6",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(15, 105, 250, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
          propsForDots: {
            r: "0",
            strokeWidth: "2",
            stroke: "#0f69fa"
          }
        }}
      />
      <View style={styles.sliderbox}>
        <Text>a: {a}</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={-10}
          maximumValue={10}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#0f69fa"
          step={1}
          value={a}
          onValueChange={value=>setA(value)}
        />
      </View>
      <View style={styles.sliderbox}>
        <Text>b: {b}</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={-10}
          maximumValue={10}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#0f69fa"
          step={1}
          value={b}
          onValueChange={value=>setB(value)}
        />
      </View>
      <View style={styles.sliderbox}>
        <Text>c: {c}</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={-10}
          maximumValue={10}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#0f69fa"
          step={1}
          value={c}
          onValueChange={value=>setC(value)}
        />
      </View>
    </View>
  );
}