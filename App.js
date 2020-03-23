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
  FlatList
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
            { name: 'zs1', age: '10', id: '0'},
            { name: 'zs2', age: '11', id: '1'},
            { name: 'zs3', age: '12', id: '2'},
            { name: 'zs4', age: '13', id: '3'},
            { name: 'zs5', age: '14', id: '4'},
            { name: 'zs6', age: '15', id: '5'},
            { name: 'zs7', age: '16', id: '6'},
            { name: 'zs8', age: '17', id: 'y'},
            { name: 'zs9', age: '18', id: '8'},
            { name: 'zs10', age: '19', id: '112'},
            { name: 'zs11', age: '20', id: '1132'}
        ]
    }
    _keyExtractor = (item, index) => item.id
    renderListItem = ({item})=> {
        return(
            <View id={item.id} style={styles.txt}><Text>{item.name}  {item.age}</Text></View>
        )
    }
    render (){
        return (
            <View>
                <FlatList data={this.state.listData} keyExtractor={this._keyExtractor} renderItem={this.renderListItem} />
            </View>
        )
    }
}
class ViewSample extends React.Component {
    handleTouch = (event) => {
        console.log('啊，我被触摸了')
        console.log(event)
        return true
    }
    handleMove (e) {
        console.log(e)
    }
    handleDBClick = () =>　{
        console.log('啊我被双击了')
    }
    render () {
        return (
            <>
                <View
                    accessible={true}
                    onResponderMove={this.handleMove}
                    onStartShouldSetResponder={this.handleTouch}
                    style={styles.box}
                    onMagicTap={this.handleDBClick}>
                       <Text style={styles.txt}>我是一段文本</Text>
                </View>
                <Text>
                  <Text>First 11111111111111111111111111111111111111111111111111111 part and </Text>
                  <Text>second part</Text>
                </Text>
                <View>
                  <Text>First 11111111111111111111111111111111111111111111111111111 part and </Text>
                  <Text>second 222222 part</Text>
                </View>
            </>
        )
    }
}
class MyAppHeaderText extends React.Component {
   componentDidMount () {
        console.log(this.props)
   }
    render () {
        return (
            <>
                <Text style={styles1.title}>{this.props.txt}</Text>
            </>
        )
    }
}
const App: () => React$Node = () => {
  return (
    <>
        <LongList />
        <ViewSample></ViewSample>
        <View>
            <MyAppHeaderText txt='用作标题的文字，独有样式'></MyAppHeaderText>
            <Text>正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字</Text>
        </View>
    </>
  );
};
const styles1 = StyleSheet.create({
       title:　{
           fontSize: 30,
           color:　'#ff3040',
           textAlign: 'center'
       }
   })
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
    fontWeight: '900',
    textAlign: 'center'
  },
  box: {
    backgroundColor: '#09e'
  }
});

export default App;
