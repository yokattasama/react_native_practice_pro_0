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
  SectionList,
  PixelRatio
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
                <FlatList data={this.state.listData} keyExtractor={this._keyExtractor} renderItem={this.renderListItem} />
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
//<LongList />
//    <FlexBox />
//<ViewSample></ViewSample>
//<View>
//    <MyAppHeaderText txt='用作标题的文字，独有样式'></MyAppHeaderText>
//    <Text>正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字正文文字</Text>
//</View>
class Adv extends React.Component {
    render () {
        return (
            <>
                <View style={styles.father}>
                    <View style={[styles.son]}>
                        <Text style={[styles.center, { lineHeight: 80 }]}>酒店</Text>
                    </View>
                    <View style={[styles.son, styles.leftRightBorder]}>
                        <View style={styles.bottomBorder}>
                            <Text style={[styles.center, { lineHeight: 40, }]}>海外酒店</Text>
                        </View>
                        <View>
                            <Text style={[styles.center, { lineHeight: 40 }]}>特价酒店</Text>
                        </View>
                    </View>
                    <View style={styles.son}>
                    <View style={styles.bottomBorder}>
                        <Text style={[styles.center, { lineHeight: 40, }]}>团购</Text>
                    </View>
                    <View>
                        <Text style={[styles.center, { lineHeight: 40 }]}>客栈</Text>
                    </View></View>
                </View>
            </>
        )
    }
}
const App: () => React$Node = () => {
  return (
    <>
        <Adv />
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
    backgroundColor: '#09e',
    fontWeight: '900'
  },
  list: {
    height: 2000,
    color: 'red'
  },
  father: {
    flex: 1,
    height: '20%',
    marginTop: 50,
    marginBottom: 520,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#f55'
  },
  son: {
    flex: 1,
    height: 80
  },
  leftRightBorder: {
    borderRightWidth: 1/PixelRatio.get(),
    borderLeftWidth: 1/PixelRatio.get(),
    borderColor: '#fff'
  },
  center: {
    textAlign: 'center'
  },
  bottomBorder: {
    borderBottomWidth: 1/PixelRatio.get(),
    borderColor: '#fff'
  }
});

export default App;
