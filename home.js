import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { ProgressBar } from '@react-native-community/progress-bar-android';
//export default class Home extends React.Component {
//    state = {}
//    render () {
//        return (
//            <>
//               <Text>铁肩担道义，妙手著文章</Text>
//               <ProgressBar></ProgressBar>
//            </>
//        )
//    }
//}
export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.example}>
        <Text>Circle Progress Indicator</Text>
        <ProgressBar />
      </View>
      <View style={styles.example}>
        <Text>Horizontal Progress Indicator</Text>
        <ProgressBar styleAttr="Horizontal" />
      </View>
      <View style={styles.example}>
        <Text>Colored Progress Indicator</Text>
        <ProgressBar styleAttr="Horizontal" color="#2196F3" />
      </View>
      <View style={styles.example}>
        <Text>Fixed Progress Value</Text>
        <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  example: {
    marginVertical: 24,
  },
});
