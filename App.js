/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  Alert,
  Image,
  FlatList,
  SectionList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
class ButtonBox extends React.Component {
    handlePress()  {
        Alert.alert('嗨')
    }
    render () {
        return (
            <View>
                <Button onPress={this.handlePress} title="点我"></Button>
            </View>
        )
    }
}
class ImageList extends React.Component {
    render (){
        let pic = {
              uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <>
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
              <Image source={pic} style={{width: 193, height: 110}} />
            </>
        )
    }
}
class InputBox extends React.Component {
    state = {
        words: ''
    }
    handleInput = (val) => {
        this.setState({
            words: val
        })
    }
    render () {
        return (
            <>
               <View>
                   <Text>获取到了输入的文字{this.state.words}</Text>
                   <TextInput placeholder='请输入文字' value={this.state.words} onChangeText={(val) => this.handleInput(val)}></TextInput>
               </View>
               <View>
                   <ButtonBox />
               </View>
               <ScrollView>
                <ImageList />
               </ScrollView>
            </>
        )
    }
}
class LongList extends React.Component {
    state = {
        listData: [
            { name: 'zs1', age: '10'},
            { name: 'zs2', age: '11'},
            { name: 'zs3', age: '12'},
            { name: 'zs4', age: '13'},
            { name: 'zs5', age: '14'},
            { name: 'zs6', age: '15'},
            { name: 'zs7', age: '16'},
            { name: 'zs8', age: '17'},
            { name: 'zs9', age: '18'},
            { name: 'zs10', age: '19'},
            { name: 'zs11', age: '20'}
        ]
    }
     _keyExtractor(item, index) {
        item.key = item.name + ''
        return item.key
        }
     renderItem = ({item}) => {
        return (
            <View id={item.key} style={styles.txt}><Text>{item.name}'&'{item.age}</Text></View>
        )
     }
     handlePress = () => {
        let newDataList = [...this.state.listData]
        newDataList.push({name: ('' + Math.random()), age: ('' + Math.random() *2)})
        newDataList.push({name: ('' + Math.random()), age: ('' + Math.random() *2)})
        newDataList.push({name: ('' + Math.random()), age: ('' + Math.random() *2)})
        this.setState({
            listData: [...newDataList]
        })
     }
    render (){
        return (
        <>
            <View>
                <Button onPress={this.handlePress} title='点击增加数组长度'></Button>
            </View>
            <View>
                <FlatList
                keyExtractor={this._keyExtractor}
                data={this.state.listData}
                renderItem={this.renderItem} />
            </View>
        </>
        )
    }
}
class LongSectionList extends React.Component {
    state = {
        sectionListData: [
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
        ],
        Alpha: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
    handlePress = () => {
        let index = Math.floor(Math.random()*(26 - 1) + 1)
        let newSectionData = [...this.state.sectionListData]
        newSectionData.push({title: this.state.Alpha[index], data: [this.state.Alpha[index] + index, this.state.Alpha[index] + index + 1]})
        this.setState({
            sectionListData: [...newSectionData]
        })
    }
    _keyExtractor (item, index) {
        return '' + index + Math.random()
    }
    render () {
        return (
            <>
               <Button onPress={this.handlePress} title='点击一下'/>
               <SectionList
                sections={this.state.sectionListData}
                renderItem={({item}) => <Text>{item}</Text>}
                renderSectionHeader={({section}) => <Text>{section.title}</Text>}
                keyExtractor={this._keyExtractor}
                />
            </>
        )
    }
}
//    <LongList style={styles.list} />
// <LongSectionList />
class FlexBox extends React.Component {
    render () {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{ height: 100, width: 100, backgroundColor: '#985'}}></View>
                <View style={{ height: 100, width: 100, backgroundColor: '#ff3040', flex: 1 }}></View>
                <View style={{ height: 100, width: 100, backgroundColor: '#369', alignSelf: 'stretch'}}></View>
            </View>
        )
    }
}
const App: () => React$Node = () => {
  return (
    <>
    <FlexBox />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  txt: {
    color: 'blue',
    fontSize: 40,
    fontWeight: '900'
  },
  list: {
    height: 2000,
    color: 'red'
  }
});

export default App;
