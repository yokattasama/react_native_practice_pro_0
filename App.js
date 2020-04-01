/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
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
  PixelRatio,
  BackHandler,
  ToastAndroid,
  Modal,
  TouchableHighlight,
  Picker
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './home.js'
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
      componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
      }

      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
      }

      handleBackPress = () => {
        console.log('点击了推出按钮')
        ToastAndroid.showWithGravityAndOffset(
          "点击了退出按钮!",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
          0,
          0
        );
        return true;
      }
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
class ModalExample extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  onPressLearnMore() {
    Alert.alert('哈哈哈哈哈哈')
  }

  render() {
    return (
    <>
        <Button
           onPress={this.onPressLearnMore}
           title="Learn More"
           color="#841584"
           accessibilityLabel="Learn more about this purple button"
         />
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={[styles.modalBox, {marginTop: 22} ]}>
            <View>
              <Text>Hello World!</Text>
              <TouchableHighlight
                 style={[{marginRight: 'auto',marginLeft: 'auto', height: 30, width: 80, backgroundColor: 'aqua', borderRadius: 10, borderWidth: 1/PixelRatio.get()}]}
                 underlayColor={'#f55'}
                 onPress={() => {
                   this.setModalVisible(!this.state.modalVisible);
                 }}
               >
                 <Text style={[{textAlign: 'center'}]}>隐藏模态框</Text>
               </TouchableHighlight>
            </View>
          </View>
        </Modal>
            <TouchableHighlight
              underlayColor={'green'}
              onPress={() => {
                this.setModalVisible(true);
              }}
              style={[{marginRight: 'auto',marginLeft: 'auto', height: 30, width: 80, backgroundColor: 'aqua', borderRadius: 10, borderWidth: 1/PixelRatio.get()}]}
              >
                <Text>
                    展示模态框
                </Text>
            </TouchableHighlight>
      </View>
      </>
    );
  }
}
class HomeScreen extends React.Component {
    componentDidMount () {
//        console.log(this.props)
    }
    render () {
//        console.log(this.props)

        const { navigation } = this.props

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text> 这是首页 </Text>
                <Home />
                <Button
                    title="点击前往详情页"
                    onPress={() => {
                        navigation.navigate('Detail')
                    }}
                ></Button>
                <Button
                    title="点击前往列表页"
                    onPress={() => {
                        navigation.navigate('List')
                    }}
                ></Button>
            </View>
        )
    }
}
class PickerSample extends React.Component {
    state = {
        city: 'bj'
    }
    render () {
        return(
            <>
                <Picker
                   selectedValue={this.state.city}
                   style={{height: 30, width: 100, color: '#f00'}}
                   onValueChange={(itemValue,itemPosition) => this.setState({city: itemValue})}
                   mode="dialog"
                  >
                  <Picker.Item label="北京" value="bj" />
                  <Picker.Item label="上海" value="sh" />
                  <Picker.Item label="广州" value="gz" />
                  <Picker.Item label="深圳" value="sz" />
                </Picker>
                <Text>选中的城市是{this.state.city}</Text>
            </>
        )
    }
}
class DetailScreen extends React.Component {
    render () {
        const { navigation } = this.props
        return (
            <>
                <PickerSample />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around',height: '100%', position: 'relative'}}>
                    <Text style={{ flex: 1, position: 'absolute', top: 20}}>这是详情页</Text>
                    <View style={[{ position: 'absolute', bottom: 0, height: '50%', width: '100%', backgroundColor: '#ccc'}]}>
                        <View style={[{ width: '100%', flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
                            <View
                               style={styles.btn}
                             ><Text onPress={() => navigation.push('Detail')}>点击继续前往详情页</Text></View>
                             <View
                               style={styles.btn}
                             ><Text onPress={() => navigation.navigate('Home')}>点击回到首页</Text></View>
                             <View
                               style={styles.btn}
                             ><Text onPress={() => navigation.goBack()}>点击回到上一页</Text></View>
                        </View>
                    </View>
                </View>
            </>
        )
    }
}
class CustomHeader extends React.Component {
    render () {
        return(
            <View style={[{ flex: 0, justifyContent: 'center', alignItems: 'center',height: '100%', width: '100%' }]}>
                <Text>我是自定义页面头部</Text>
            </View>
        )
    }
}
class List extends React.Component {
    render () {
        return (
            <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center', height: 200}}>
                <Text>这是列表页面</Text>
                <Image style={{height: 60, width: 60}} source={require('./static/images/touxiang.jpg')}></Image>
                <Image style={{height: 60, width: 60}} source={{ 'uri': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAH0AfQDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAEHAgUGBAMI/8QATxAAAQMDAgMEBgcEBwUECwAAAQACAwQFEQYhBxIxQVFhcRMigZGhsRQjMkJSwdEVM2JyCBYkQ4KS4VNjorLwFyU0cyY1N0RUVnWDwtLi/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAECAwQFBgf/xAAxEQEAAgIBBAEDAQcEAwEAAAAAAQIDEQQFEiExQRMiUTIGFCMzUmFxJEKBkRUWNKH/2gAMAwEAAhEDEQA/AL/REQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERQglFCFAKKCoDt1AyTKjKZU7E5UrHPimfFBkoyoJTKjYyRYqVIZUrEKUEoiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIghQVD3tY3LnBo7ycLBszJG5a9rh4HKgfQOx1TOVUev+M9FYZJbbZAysrmHD5Scxxnu8T5dF2eh9Y0etLDHX0p5ZW+pPCesb+7y8VEyal0s0rIonPe4NaB1JX594h8WNV2fVtXbrXUQwUMeDE8RAueCAc5PtVt6wnlaynia4hj+YkDtwqL4sWsGmorpGz7BMEhHju38wo2mmploncW9dyOLv29MM9gYwfksP+1jXf/zBP/lb+i44dEKrtsRSHbxcX9dx9L49388TD+S9MfG3XcbgXXGCQDsdTs3VfqHbj2qdyiaw/XXC/U1z1dpBl1urYGzOmfG30LcAhuN8LtlwHBqAwcMrZn+8Mkg9rj+i3+pbs6kiFLA7E8gy5w6tb/qrRLBLcS19JA7klqI2u/CXDK4XiPxNg0XSUwpI4qutqPWbG5+Gho6k4Wqqpo4aaapqJOVkTC973HphfnvUV4lv17qK5+eVx5Y2/hZ2D3JMprXb9G6R41aevzY4LgXWysdsWzHMZPg7s9qsuOeOVjXxva9jhkOacghfhPcDC7XRnE6+6QnjibO6qt2fWpZTkAfwn7pURK1scw/XfMCnMMrldIa7s2saPnt9RipYPraWTaRh8u0eIXUNOVZinb6IoClSkREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAXmrKuKipZKiV2GMGT4+C+52C4rVFyfNWiiY76uLd4Ha7/AECiRrbhdKi51D3yOIjBPKwdGhVdrjX8tBJJabPM5kuOWedhxy97W47e8r1a+1ibPTG2W+UCtlB53tP7pv8A+x+CpwuLjlxJJ33VZlkpXfmUn1iXEknOSe9dpwx1m7RuqI5pXn6BUkRVLe5v4vMdVxaZVdskxuH7Ov8AAytsoqonh7YwJGubuC0/6FVrqy2Nu+lq+j2L+QyR/wAzdx+i9fBHVovWnJNO18gdU0TcRcx3fCdvbynZbGWMxzyxPGA1zmkd+NvyVpa36bPy+duowi3OrrWbPqeupOXlYJOdn8rtx81plVt18xsWL/sLJQQXNwOpOEj2Wfsbh3TfROHdgi6H6I1/+bf81pLvVfTLtUSt3bzBrT4DZdNE4WnRlI1gw6GjjjYO48gC4thLRzOcB2k93eVfbTn2r/ije/olthtEb/rKr6yTHYwHp7T8lUee5bnVN6N+1JV1oOYi7khHcxuw/wCvFaYqktrHXUCIg3UMj1265VlprY66gqJKeqiOWyMOCP8AruK/WPDLUtz1To+G4Xak+j1POY+blwJmjGHgeOVUXCzhPJeJYb1qCBzLcMPgpnDBqO4kfg+a/RdPCyGFkcbQxjAGta0YAA6BXhrZJ3L7DopUAKVdQREQEREBERAREQEREBERAREQEREBERAREQEREBERBKIiAiIgIiICIiAiIgIiICIiAiIgIiIPhVymCjmlHVjC4e5Vi9zpHOkLjzu3JO+6tN7Q5jmuAIIwQVw9207NSSPnpWmWHqWgZc32KJRL8zausV0tV4nluBdK2d5eyo6h+/f2HwWgHRfpO4W+lulHJSVkLZYXZy13Ye8dxVQ6s4fVNkL623udVUGe714/Mdo8VSWal/HlxSdUyCdiiqyxDbaY1DU6Wv8AR3elJLoH5czOz2drT5hfpq8tiqBTXakdz0tdC2Vp8wD8sL8nEbK8+E+o/wBs6ZqtLzODqqiH0iiydyzPrNHl8irbYc1fmHN8W7WSaG7RgYx9HkwO7dpKrFfoPVdq/a+mK6kABkLDJHtnDm7jHxX58IAdjHRQvinwLYWOiNxvtuo29Z6qOP3uC167XhLb/wBocS7Ozly2KQzu8mjPzUR7WvPh+kNVzhsVNRsGx9YgHsGwVWcQr22y6YkjicfpNaPQR4PQHdx923tXd32p+k3mZwOWsPIPDH+qonijcn1epxSA5jooWtAz0c71nfkFZrUjdnD4x0UlF9Ion1E7IYWPfLIeVjWjJcT2AKG1vUMGMfJII42Oe9xAa1oyST2BXzw34L+hlprzqdrHSDD4qAtyGnsMh7/4fet1wu4UQ6ehiu97hZJdnDMcR3FMD83ePYraxgY7laIYb336YtYAAA0AAAAAYwvoNggGQpV2MREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQSiIgIiICIiAiIgIiICIiAiIgIiICIiAsC0HsWZUFQNLddPwV7XPiAinx9oDZ3muMqqKeimMVTDg74J6OVl/e9i8F1+gOpiyufGGnpzHceSgfn7V3DuCva+tszGQ1J3fCNmvPh3FVLUU1RRzugqYXxSsOHNeMEL9OVDYGTPZTPdJEOjnNwVzupdKUWpYQ2cGOpb+7qGgczfPvHmq6Xrl0oBbTTl7qdOaho7rSuPpKeQOLB99v3mnzC+moNM3LTlaYKyI+jyfRzNGWPHgVpx1UM86s/TzKmlrRHWUThJS1AE0R72nfHmOh8Qvz7rC1fsfVNbTtGI3P9LH/ACu3/ULteHesaG26dqqK7VkcTaeTmp+bPNyu6gY8d/atbxCvun9QR009vnL6uIlpAjIBafE+KMNImsuAVt8A6QC/3W7PGGUdEWgnsc4/oCqlxjqVYGgNdW3SNiutLVxTyTVskZHowMBrc5ykMmTcwtO5V8dvttXcZzkRNdK4Ht7fmvzjV1UldWT1czi6WZ5e8nvK73WPEChv9gNBb4Z43SyAyl4Ay0dg9qrsN8d+1TKmOkxD6QQy1E8cEETpZZHBrGNGS4noAv0rwt4VxaZjZd7xG2S8SNBYwjIph3D+LvPZ2LmuEtHomxRxXOvv1tmvLxs2R/KIB3Nz1d4+5XlS19JWtDqWqgnaehikDvkVMRpF5l6QAOxZLEKc7qzEyCKMlAcqUpREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQSiIgIiICIiAiIgIiICIiAiIgIihBKKM4Xhr7tSW9hM8o5uxjdyfYg9xOy1tfe6GhGJJQX/gbuVytx1FV14cyM+hgPYw7keJ7FzF0vdsslOZ7hViIH7Lc5c4+DepUDrK3VVXO4spWthjx1Jy4/ouduNxipGGpuNYyMYyXSyKvZdZah1PVGj0ra5QzJHpnN5nfo32rYW3hJW3CZtZqe7ySyncxRu5j5Fx29wWrn5eHBH8SzJTDNkXDifaKQllFFNXSZ25BytPtXhi1Jr2/wC1osYp4eyQxk/8TlZtn0rY7G1v0K2U7ZG/3kjed3vK3ROc7Yz2Li5v2gpXxirts14sfKoXcPtZ39gZfb3DHE459GTz48gNlsqPgtY4Q36bcKyd3b6NoYFZeOxFzMnW+Vf1OmxGKsOPp+FujaZu9tlmPfLM4rYQ6F0pE1vJZKX/ABMJ+a6BFqW6jybe7yvGOv4akaV041oAstDj/wAgKTpfTpGDZqE//YC2pRUjl5/6p/7Oyv4aV+jtMSjD7LRY8IcfJeKfhxpCoJ5rS1h743Fq6dFavP5NfVkTSHB1PB7Ss37o1sPlLn5ha53CFtJIX2fUVZSuG7cjt/wlWaiz06vzKf7lfo0lXEdJxWsA/wC775Fcom/3cpDifY7f4r0Q8YtVWR4ZqbSrywdZqcFnt3yCu/8AMZUuLXM5HMa5p6tcMj3LoYf2hyR/Nrtitxqz6eGw8X9JXstjdXGhqHHHoqscm/8AN0XdQVMNRE2WGVkkbvsvY7IPkQquvOgtO3zmM1vZDK7+8pxyH3dCuTZozWOi5HVOjr0+oizzPpJds47CD6p9mCuvxurcfP8AOpa9+PNfT9BggpkKobDxqjjqW2/V9ultVZnBmDT6M+JB3b8VadFcKW4UrKmjqIqiB4y2SNwc0+1dSJiY3DBMTHt7EWIKlWQlERAREQEREBERAREQEREBERAREQEREBERAREQSiIgIiICIiAiIgIiICIiAiIgZAXzklZGwve9rWjcknZfGsq4qOEzTvDWN+PguGut4mukhbuyAH1WfqoG3umqQPqbf6xPWUjYeS5aebAkqamX1erpJD8147pdKK0Ub6qtmbExo2zuXHuA7SuAjh1BxNrDHC19BYWO9Zx6O8f4neHQLHky1xx3W9LVpazbXbXTq2UWnStO+4V8mwlYzLI+8/xeZ2X0snCp9XM256srn1NQ/wBY0zZOb2Od3eAXc6d0zatM0P0a30wa4j6yY7vkPie7wW4wvMc3rc23TB4/u38WCI8y+FFSU1up201FDHBC0YDIm4C9GSRgoyN7ieWNzvEBRvkgggjsK4OWMlvvuz1mu9QhSpChYlhEREiIiaBERWBERECIiiTQiIq+4EhTl3Y4rFE/wPHcbTb7vAYbjRxVTD0EozjyPVcf/U28aSqX3DRN0dG3PNJbal3NHL4DO3y813iLocbqOfjz4ncMd8UWjTU2jizRCVlBqqlm0/cdtqhpMMni1/YPNWHBUxVETZoHtljeA5rmEEOHeD2rg7tZ7bfKF9JcaRk8ZHq8w3ae8HqCuBazVXCuodWWmV9004XZkpJDkxN7T/D5hep4XVsXJ+2fFmlk4818w/QAcCmVzOktZ2nWNuFVbZ/rGj62nftJEfEdo8RsulC622syREUgiIgIiICIiAiIgIiICIiAiIgIiICIiCUREBERAREQEREBERAREQQTjyXmq6uKkp3TTOAYPj4L7ySNjaXvIa0DJJ7AuCvl0fc6wtiJFPGcMHf4qB57nc5bnUmR5IYPssHRv+q5nUepqDTVB6WocXzvH1ULTu4/op1NqKn01anVEwzM/aGMn7R/TxXMaJ0pUasuDtS6k5nQuOYIXdH9234R8Vh5HIpgx995ZMeObSxsGkrtrmtjvuo3ujtzT9TTN2Lh3AdjfHqVctttZjhip6OFkNPGA1rWtw1o8F8OQMY0ANwBgADGF1dI1raePlG3KF5vFkt1PNMWnVYbN9Ya6hrHWR4GRICfJa2aGSCQskGCusxutHeuX07PxY3U9T6bhwYu+nwphzWtOmxojGaVnJjHLvhai6FhrfUx03XkjlkiBDHloPXBWJOTk9T2rncjqFcuCMcVZ8eGa2myVBTKLlQ2YERFKRERAREVgREQEREBERAREUaBERSCkjLCw4LSMEEZUDqpJSJms91faJVnqPQ9xsdyOo9GTPpqqM88lNH0cO3A6EfwrvdA8TaDV0ApKoso7zHtLTOOA89Msz18uq9+2N9wuE1ZornrBqaxO+j3mj/tDRG3Ime3cZHTPzXp+l9Y7tYs3v8ALUzYInzC62uyN1kOi4Th9xEpNY0Jhla2nu9OAKilO3hzN7xn3Luw7Zemjy0J8e0omUQEREBERAREQEREBERAREQEREBERBKIiAiIgIiICIiAiIgKCUXjudaygoZKh5+yPVHeewIhotWXIBgoI34LhzSY7B2BcZcLhTWqglrKuQMhhblx/LzXomkknnkmkJMshyc/JVZq+41GsNUU+nLQ4PhZIGuc37Ln9pPgFWbRETMrVjcsrBaq3iPq11yuDHC2Uz/sDYYzswePaVd8cUcDGRwxhkbGhrWjoAOxeKxWelsFkprbSD1Ih6zvxu7SVsF4fqnPtycnbX9MOphpFIRhbCiuZpmiOQFzOzHULXlRjfK0uPyMmC3dSVr0i/tu5L3FyH0bHF3itRLI+aUvkdlxWA2U5WXlc/NyI1eVKYa09IREWkyiIiJERESIiICIisCIiAiIgIiICIiAiIgIiICkEgHHaoRR5idwhwer9H1P0xupNMn6NeKY+kIj29N4Y7+/vGy7bh9r2l1hbjHNinu1MMVVM7Y5H3m+B+C+4JBBHVcFrHS9ZTXGPVmmnmG60v1ksbOkzR127+/vXqOk9V3rDllp58G/MLuGFkuP0Lraj1lZWVMRbHVxYZU0+d43eXcexde0r0rRmNTpKIikEREBERAREQEREBERAREQEREEoiICIiAiIgIiICIoQCuH1RcfpFcKZjsxw9cdrl1F2rhQ2+aYn1gOVg7yVXZBLiXOJcep8e1QiXNa41A6w6de+FxbVVJMMJ7iRu72DKnhRpQWuyOu9XG76dWjMfMN2Rdfeep9i00FOzXXE4UzjzWq0NLnt6h7gRn3uwPIFW6BygAAAdAB0C4HW+dGKv0qe5bvGxf7pO5EReRbwiIpBERRrYIiJoEREBEREiIiAiIpBERAREQEREBERAREQEREBERATw6IibmJ3CFcaloq3Qmoo9Zafi/sr3ctwpR9l4PU+34FXHp2/wBFqSzU90t8nPTzNyM9Wntae4haCWNk0T4pY2SRPHK5jxkOHcqqjqKvhDrhk7HSyacuLvrGfdZ34/ib8QvX9H6jGav0r/qho8jFqdw/RYKleWkq4K6liqqaRssErQ+ORvRzT0K9IK7zTSiIgIiICIiAiIgIiICIiAiIglERAREQEREBERARF85HBjC4nAaCSg5DV1X6WpipW5Ij9d3mei4TVN7Gn9OVVaHATFvo4e3L3bD9fYuhrKl1ZXTTHI53bfIKrteOfftW2fTFMSfrA6XHe4/k0EqtpisTMlY7p06jhHYXWvTb7jNn6RcH8+T19GM495JPuVgrBkEdNFFTwt5YomNYwdwAwFmvnnNzznz2vLr0r21iBERa21xERSCIiAiIgIiICIiJEREBERAREQEREBERAREQEREBERAREQERFWUC1GpdP0+pbLNb6nq71onn7jh0IW3QbOBwsmLNbDfvr8Imu/bgeEOrKm0XSfQ15LmyxPd9DL/izfv6hXcwktBPUqhuKGmZXNh1RayYq6hLXSub1wDs72K0NAavi1hpamrx6tU36uqj/DIOvsPUL6Dw+TXkYovDlZcfbLrUUAqVtMYiKAUEoiICIiAiIgIiICIiCUREBERAREQEREArVagqDT2idwOHObyNPiVtD0XLavqcMpqcHqS8+xQOSLmxRl7z6rRzEnuC4PhzA6/69vGopG5ZEXCI9gLjgY/wgrda9ubrVpGse3aSZohZ/i6/Be3hLaxQaFinLcPrJXSHI7BsPzXN6rl+lxrT+Wxxq7s7fc4z1RSoXgph0YERFKRERWBERAREQEREBEREiIiAiIgIiICIiAiIgIiICIiAiZwiAiIokERFAIiKdIRJG2aCSJ7Q6N7eVzXDII7Qqp0vUy8MuKTrfM5ws91LWNz0GT6jvYTjyKtjsXHcSdOft7TEk0GRXUIM8JHUgfab7t/MLsdG5n0cn059S189O6vhcQOO1Mr8/wAH9IKvio6ZhsDah8cTWzSumLeZ4G5AA2Hmuw07xv03eo8VznWudoJcyfdhx2NcO3zXtNw501ssyWojhjdJK9rI2DLnOOAB3la606nst7mmhtlzpquSH942J+S1ULfdV6g4r3x9msofS2aN3rn7PM38Tz8gs9E2dujuN1NaoKlz4padw5iMc+WZ39qp9Wvf2fK3ZOtv0aDlSsWfZHksllUEREBERAREQEREEoiICIiAiIgIoKFwA3QYv+zsuD1JUGa8yN6tiAYF10t6oIncj6qMO7gcrgauQz1c0xI9d5IUIVZxbrfSPtdsZ1OZXDx6BXDZaNtusFBRNGBBAxhA78ZKpK9Zv3F+lonjmjimihx4N3KvnO22wXmv2hzarXH+XQ4tfG05RQpHReXht6QiImgREUgiIoBETGeiiJBFOPApg4yAfcrxWZ9G0Igz3H3Jgg7hRqTYiIo3CRERAREUgiIgIiICIiAiIokEzgleC73u36fojV3KcQxjYA7l57mjtK5aC8a51b9dpiy09Fbzs2rrzjm8QO0eQXQ4vTc/I819Md8ta+3cKCQO1c3T8Pdc1gzctdNpwfu0VMPnsvs/hnqinaXUmv6x8vUCopg5pPvXR/8AXcn9bBPKq3+UXD1tdr/R8xmv1sgvFtAw6ooRhzR3kdfhjxXTWW+0GoLcytt0zZYnbOHRzD3EdhXO5fS83G+63mGXHli/pskRFz49MqVi5oeCHAEHYjvH/WVkimJ1MTAqOxBuhuJNTY6mKN1uuRzA+RoI33Yd/MtPsXX6j4e2K/RuLKWOiqnbiaBuMHxb0K83EzTZvdj+n0oIuFvBljI6lo3I9mM+xbHQ2pBqTTMFQ8j6VABDUAfiHb7RuvQ5uRlyYK8nFOpjxLBWsRMxL2aX03RaWtYoqMFzieaSZ49aQ+K4+vaW/wBIWwHGA5jd/wDC5WSB6w81XGrWmi4taPuAxyySiMnPc7H5qnRs9svLm153MwpyI1TUL4ZnlGeuFksPvLML10OeIiKQREQEREBERBKIiAiIgIiIIyuR1PeHmY0FO7lDd5XDt8F1j9mk46KsJpXz1Ekrju95J96I2+Ez4advNPNHE0nHNI8NBPtX0jcyVrJI5Y3sJ+0x3MPgq24nQCe/2Omne4UszixwHZlwGfNTfdKXbhxOy7WOsmqLaHASMk7P5h0we9YbZqVtFbTqZZa49+YeTQrTcuMFRO71uSWeT3ZAVo6l1pZdLARVkxkqiOYQQ+s7Hj2BUjpXUwsV5ud2jg5qmeKRtPFjID3nb2Ky9GaAxi/alaKq41DvSNil9YMzvkjv8OxcbqmDBN/q558R8fltYpmI1D16d4n2q+3dtA+CaidKcROmILXnu8CV3Q7VX3FmytfpeC6UULIprfMHZjaGkMO3Z3HC6LROoI9SaWgrnEfSWN9HOAfvjqfaMFcblcXHfDGfjR49TDNFp3qW/RaC6a50zZXmOsuUZlH93CfSOHuXktnEjSt0qG08Va+OR7uVvpoywE+a1f3HkTXu7ZZO+rqkUNIcAR0Klac7idSmJ2IiwmmhpqeWoneGRRML3uJwAB1KmtZvaKx8m9IqJ4aSmfU1MzIYWDLnyHAAVfVfE2e4V/7O0lZ5rrU9BKWkM9w7PEleKiornxhv0rWySUemKV/KSOsh7vFxHuV2WDTlr05b2UVso44Im7Etbu/xcepXreB0TFjr35o3LSy8id6qrWm0hxNvMfpLlqKmtLHD9zTN5iPPGB8Vm7g9fJfWfr64mTv5Dj/mVv8AKEwuxXBjr6rH/TWnLeflS1VoHiRZGemtOqm3IM/uKnYu/wA2QvPaOJQZXi1aqoJLTcG+qXvBDD479PPcK8SNlz2qtIWnVttfR3OnDjg+jmaPrIz4H8uiwZ+BgzV1aq1M1qy1kb2TRiSN4c124LTkELIKq7PW3Phxqo6Wvk5lts3/AISpcNgD0IPd2EditMdAV43qHBtxcmvifTo48nfG2ShSoWlDKIiKQREQEREBERAXmuFfBa7fPXVLg2GBhe8+A7F6VX3FOeWrbZtO0ziJbnUta8DtbnHz39i2uDx/3jPWjHkt2129OhtPT6+u79X6iiL7exxbbqN49TAP2iO38/YrmYwNaA0ANAwAFr6ZlBpuxQQPkipqOkiEfM9wa1oA71q7dxC0pdbh9Bob7STVJPK1gcRzHuBIAK99SlaREVjxDkXta07dPgIR0QOyAR0WSyKvm5oOcjPZuqh1nYpdEXVuq7DCW0Er8XOjjGG4J/eAdm/z81cOF5q6jhrqGelnaHQzMLHtPaCqZMcXrNbepZK2mk7hyVPUxVlNDUQSCSKVgexw7QV9FxWhZZrVcrxpOrcTJbpiYCTuYj0+C7fl3K8BzePPHzTT4dXHburtinessLE9VqbXSMb8wy3BBB7VUunT/U7ivW2Mjkoa85hz0GfWZ+YVsHp5qr+LtBNTPtWoqfLZKaUROcP8zfkV1uk3i1rYLerQxZY+VpuBa7Bzsq64sQvgo7NeIhl1DXNcfInPzC7azXJl4s9JXxkYnia/A78b/HK+WobPHf7BW22T++jIae5w3HxWHhW/dOZHd8F47qO+p546qCKeN3MyVge094Iz+a+4VdcIb/Jc9Km11hxX2mQ0szXfawPsn8vYrEHUr3cflypjU6ZIgRWgERFIIiICIiCUREBERAQ9ERBidwcqr5ozBPJEerHuHxVokKvr/AKe9TjGzvWGfFRKFWcVIHC10Fxj3dTVO57gdx8QrUp30970/SPma2WCqpmlzHdCCBkFcPr6BlRoq4hwzyta8eBBC3PDerdV6Dtpd/dh0QPgCuF12NYa5Y9xLd43nw01i4VUln1Q65PnbNSMJfBC4ZLT2Z8lYmCRhSi8vyeXk5MxN59NytYr6eS6W+K62uqoJcclRE6N2ezI6/JUlaNHazp5KixU7pqSiqHh00pPKw8u2c+XYr4UDcLZ4nUb8ak0iNwpekWnbgbVwh09RNY+vfJcJ8ZdznlaD5Ba/iRoiyW/SctytlGylqKctdmMkBwzg5HtCs8bY81ynE13Lw/unixox/iC2OH1DPm5Ne6fE/CLY6xV6tD3N110Pbal+8nJ6N57y3ZdAuB4QSuk0Fyk5EdW8D3Bd8tLqVIpybRH5Xx/pFxXEeapqrfbdP0byyovFW2AkdjBguPy9y7Zu7gFyM7RV8aNMwO3bT0k04H8WCMrY6Nji/LruPXlTPP2SsqwWKi07aKe2UEQjp4G8owPtHtJ8StpjdSFK9y5QiIiXxnnjp4nyyvbHGxpc97zgNA7SVxdFxZ0bX3H6FFeGNkLuVrpGFrXHwcdloOPtxqqPRNPT07i2OrqhFOQcZaGl2PaR8F+aN89RlV8rVrt+qeLmmG6m0XJVUzRJWUH9pgc3clo+0AfEbrX6Cvhvuj6KaQg1EI9DMc75H+i9XBO5VN64dxx1pdIKaaSma5xyXR42HsBwuR4esNo1dqrT5PqU9SXMHhzY+RC5PWMHfxpt+Gfj21bSyVCIvEw6IiIOqslOFGFkoPVEIRERIiIoBV/qEt/7ZtGiXeMbgHpnLsfFWAq54pia3V1g1FCwk2+cB5HdkEfmut0S8V5Ub+WDPG6I/pC3StYLRbmOe2jla+WQDo9wIAB8gqLbK5kglYSxzcEOb1BHTC/WettJ0nEfSdP9HmYyflE9JMfsjI6HHYVSdBwQ1hNc/o9RTU9NT82HVLpg5vL3gDcr2rmxOvC+OHF5nv2grTX1WTUPh5ZHH7xaS3Ptx811rVrbBZ6ew2KitVN+5pYhG0kbnvJ8zutmMKYUSsX/ZKyWLyOUqZSp69Rii4/Uno8AV1uIlA7SAevuC7Mndx8VX09Wb1/SCqJIsOittL6InO2cYPxcrBdsT5ryH7Qa+vER+HR4u+1jlQUTK4GmyLQa4tou2iLpTYy9sfpY9vvN3+S36h4bJE6JwHK8EHPd0PzWfjX+lnrf8Si0bhX3Bm6Gu0tPQv3ko5Tg535Xb/PKsI7g+IVN8MHusvEW8WZ+zZBIwDxacj4K5B0C3us44pyO6Pljwz9upcLPW/1M4sUVz2jt16b6CpIGweOjj5Ej4q6wdwM7qnOKNrNw0TPOxv11G8TsI6jHX4LuuHl/wD6yaItlwe/mmMQjl7w9nqnPuB9q9N0rkfW41Zn3HhpcimrbdYEUDopXThriIikEREBERBKIiAiIgIiIIK5LWMBD6eoaM5yw/MfmutXNawlDaOCIjd0nN7h/qolCqtf1LKXRVeXHBkDYm+JJW+4d0xptBWppGC+Mye8rguLlaY7ZbqEE/WzOkI8Gjb5q17JSii0/a6dox6OljB/yhcHr19ceK/mW7xY8vdlMoi8dDeMoiKQzutbqCztv1jq7bI4tE7MB3cez4rZDqssDtICyYL2x5ItVExuNK24T1cdLb7jp6VnJWUtQ578n7Q6fDCsYeSpqkqv2fx3qI6Z3NFUTuicB/E3f4hXPkloJ6ldPrGKIyxk/qhTGN+03zXE1czqDjhpeoOOSqpZIB54d+eF2vmuI4kUtRBSWvUdEwOqLNVCdzfxMyCfy96jouStOVG/lXPH2LpClamwXyl1BZaS60b8wVMYeB2tPaD4jotqDkL3DlfKURES57WWl6bV+m6i0VLiwSYdHKBkxvG7Xfl5Er88M4Ha0fcxTOgpmxc2DVenaWAd+Ovswv1MQoDQoIvMeGh0fpmm0jpyls9O7nEQzJJjHpHn7TlVVgjLuNesZBuwOIJ8yFdNwr6e10E9dVP5KeCN0j3dwAyqU4aOmutz1BqWRhYyvqiY2nuzn8wuf1O/bxL7ZeP5ttY/YPJYp4ovBOrAie9au/6gtumreay4zhjPuMZ6z5D3NHb8lkw4rZbdtI3JM69ttumCRnBx34VYxa31fq5xj0hYnRQHY1dRvy+04b819JOGGvbuTLddWxxvd9pjXvcB/lAC7OPolu3eW2mvPIj4WPnz9ynlcdw0478Kr3cDL9gn+tkZPYCyX9V8JOGPEKxj0tpvzat7ejI6l7D7nbFZP/CY5j7cnlWOQtjCgqm4eJmrtLVv0TVNqfKOx0jPRPPiHAcrgrI0xq226roXz0LnMkjIEkEh9ZmenmPELQ5XSs+CO7W4Za5Ys3i8N6tUN9s9TbaloMc7OUE9h7D7Cvd7EytDFlnHeL19wyaiY8uT4carfYqj+pF/cIaimcWUUzzhssfY3J+CttoVaal0rb9UUTY6rmiqIvWgqYxh8Z/MLV0V+17o2nFPV0DdS2+MYZPA/knaPEEHm/63XtuF1PFyK6mdWc/NgmJ3C4h0U4VVUvHSxc/JdLVd7a4dTJBzj4b/AAW0HGTR0jPqq6okf2MbSvJK6XdGt7a/bKwHHquY1jrGh0jZZKupe0zuBbTwA+tI/sAHdnqVqY9d3O6Md+x9NVQafsz3CRsDB48oy4rQQ6PfX379u6lrhcq5p+qjazlhhHc0H81pZ+o4MMeZ8smPBa0vBw/sNRaaGqvNz9WvuTzM/I3aCc49+/uXTSXRzn/VtwD2kL5105lmDAcNaMdV5Q3yXMpxo5FvrZvcvQcbjVrTy9RuFRnOR7l9YrnviVvtC8WMgKAMdAst+n4LRrTZnBSY03scgkaHNII7wsjjPRaijmdBJgk8ruzxW48V5rl8WePk00MuPslTuov/AEf4z0dc0crKl0byR28w5SriJAx8FUvGiD6PW2K5sOHAmMnxacq1qSUVVBBUDpLGx/vGV0Op/wATjYsv/DUp+qYYV9M2voJ6OTBZPE+Mg+IwuO/o/wBe6KC+2CU4dS1AmY09QD6rvi0LuCMBVfpSo/q1/SAqaI7RXDniwOnrDnb8Qt39nsvi2OWLkxuNv0G1SsGnIBCzXpoaAiIpBERAREQSiIgIiICIiCFxerpue4xRZ9WOPPtJXaFV9qOX0l9n7m8rceQCiUSpXic/6XrG1UQOSI2At/md+ivgMEcUUY6NaG+7ZUJqMfTOMdHCNw2aBm/hgq/XHJavM/tBbxSHQ4sa8sERF5ZtiIikSOoWsu80kDHPDXENYXtaPvEdi2XasZImS7PBODnyWTDaK3iZFI8NaU3nX9Vc6p4EtOHy8hO7nE4+GVeHP0HdsqMne7QnF4yO/wDCTSZOOhjk6+7PwVuVFbJI/wBUlrCNsdq9F1DiX5VqXr+nSvHxzk3pt3SMHVzc+a+c7YKqmlp5mskilYWPYd8grRk8253KgbLDTpHZMWrPmG7+6bjy5Sw3Wq4Tallt9xEkmmq2TmhlALvRHv8AyI9qvKgudHcqNlXQ1MVRTvGWyxvBafaq4qYKe50b6G4wtqaV/Vj+zxC5T/s8vNhnNdorUUtODv8AR5Xeqe/fofaF3cXMrSvblnUuTyeHak+F/AgjKlUU3iJxNsjxFcdPQV7G7GSOMjPtacL7DjlfW+rJoifnHXEj8f8AKtyuWlvMWhp/TtHwu4lfGoqoKWF888rI4mDL3vdgNHiVSjuKuv7sOS16RZTF3SSYOdj34C+Z0XqfVkzZtZahkdBnP0KmOGgd223zWLNzMGGN2tC1cNrfDLXOq5OItQ3S+luaShDw6trcEMLR2eLe3xXZ2a1U9ls9Nb6ZmI4W4yerj2k+1ZWi0UVjohRW+nZBC3bDRu495PaV7uRx715PqXUrcu3Zjj7W9hxRSGKLWXDUlktJcK66U8L2jdpcC73BcrW8Uaepm+haYt091rHHlaRGQ0eP/WFp4eByMs6rWWSclYdRqHUVu01bH1tdIQdxHE0+tI7uH6rjtJaNn17cP62apZ/Y37UVBkhpYDsT/D81srJwzrb1cmXzW8/0io6x0DT9XF24djb2BWmxjYw1jAGsbgBrRsAO5ei4/Hx8OmqebT8tTJebIp6eGmp2U8MLIomDDWMbho8h0X0IVb3/AIm3LSN+dS3yw4t8jsQ1dM8kOHfvtnwXe2y5Ut4t0FfRSiWmnbzMeO0K18d4jut8sb1oezZSsXu5WE4J7dlSI86S8V1tNuvdC6iudHDU07xjlk3x4g9h8lRGo9GX7hrf4rvpz09XQOJAaIy8tB3LJAOo8fALaafh1RrniXJcayWqo7dQTl4Z6zWtAOAwDtJxuVeODknvW1NpxfbPmJVU3Z+MFiqoxFdop7fUN2cQ3nZn2bhdbRaq07cADS3mkeT0aZA0n2FenUPDTTGp5HTVdA2Gpd1np3cjye89h9q4mb+j3bTITBf6qNv4Xwtdj25C08nTuHl8x4Za5pj2sFskUoDoXh4PaxwcPgsgSHDrsPaq6PAqroR6S16tnjlbu0OjLcn2Fa+TUes+H9Q2HUtJ9PoCcNqmnOR4P7/ArTydG8bwX2y1zxPtajy2QHnijd/M0H5rCOGGNwLKeBhH4Ymt+QXls92pL7a47hQyekgkGc4xynuPivcuRkvnx2nHaZjTPHbaNwdHEgDdQNwiDpstfune5WjxLQygioeD1ysQ7sXuuFO4SCZo9U/a8F4OzK9lxMsZMcadTDaJr4ZKCd1GUHVbczryy7N3EAdSQF0Ixyt78LVUNMZHCV32R026rbDqF5nq2et7xWvw53JtEzpXXGmnEukKWYDeGpHxBXYaWnM+kLVITnNOz5LQcWm8/D+rJGeV8RH+bC2uhTzaCsxP+xCtk+7ptP7S0a/zJb4qndfzGz8X7Dcm+r61PISPB/KfgriVN8cY/Q3WzVLchwicCfJ4P5q3Qra5OvzCM/mj9Kt6e1ZryW2cVVspKgdJYWP97QV617NzBERSCIiAiIglERAREQEREGJVbXd3pLvWHP8AeuH5KyHHAz2Dcqr5pPS1kj+x0hOfaoVlUcAFXxuZk5aK3/lCvsdGqgdIuFVxh9J1H0qZw+Kv5pOMLyfX7fxKx/Z0+PHhCIi89ENkRETQKRjmyVCJoVdxmspqLfSXmFh54Heilx+E7j4rY6QvH7a05STOdmWFvoZPAt/0XZ3e1x3qy1lul3bPEWg46HsPsOFTXDWqltmpK+xVfqueT6p7HsOD8F67pOac3G7Z9wnDbsy6/K0AFlhOjseKlbzrQgbH2L32yQ4fH1GcheDG/sXstgJmd3ALQ6jWtsM7hizR9raDZZEgjfPtCxReTi9o8bc3wHpgknzQDfbqnYub13qZultMSVUWDWyu9FTg9+Nz7FkwYLcnLGOFZt2xt9dS6ztGloC6rnElT1ZTR7vPn3DzXCU9Zr7iO8/syM2q1OODLktBHi7q72L4cLtBu1hVS6lv5knpWyn0bZDn6Q8dSf4Qv0BFGyKFkUbGsjYMNa1uAB5L1WLi4OHGojdvy0rZZtPhWdm4IafpfrLxUVFzqOrsv5Ge4b/Fd9bLHarLT+htlBDSt/3TcZ8z1K95GT0WQ2S2a9vcqwxTqpcgCxDyXO02+80T6O40sdTTu6seMjzHcVFptNFY7bFb7fD6KlizyMyTjt7fNe1FPdaY1M+AREUeQAa3OBjKnKhFIIeiIp0IOy8d0tlHebdNb66FstPOwtex3z8D4r2OUfPoprPbPhEqQ4cem05q7UGkpJfSRQvL4ye8EfNpVoFVXYpBX8dL/VQnMTDKHHs2DW/NWoVyutxEZ4n5mG5g/ShB0RFxoZhwDhgjIK8Ettad43cp7j0XvRZ8PJyYf0StS809NV+zJvxsC+0VtY12ZHF2+cDYL34TC2L9Sz3iYmV5zWlDQGtwBgdwWXaoPRFobmZ3LF7lwvGCb0eg3tz+9njb7t1u9CsLdA2YH/4dp+a4/jhVBljtVID60kznkeAC73TUBpdJ2uA9WU0Y+GV3M0dvTaR+ZYa/zJbJVJx3aPo9nfvnMjfgFbfaqn47f+As/wDPJ8gsPRvHLqZf0SvDR830jRljl/FQQn/gC3i5rh9/7PdO/wD0+H/lC6Ve5coRERIiIgIiIJREQEREBERB561/o6Kd/wCGNx+BVYNwB2d+ysm7kttFWf8AdOVaOw2J/bhp+SI0qXhuwS8TS/8AC6d23tV/Dp1VB8KG8/EAuP8As5ir8XjuvT/Hr/h08PiBERcBsCIitAIiJoOxU/xFtz9NazoNUUrQIZpAZcDYPb197VcC0OtLKL9pKtowzmm5fSQkDJD27jHy9q6PSuV9DNG/Usd4n3D4xSsniZPE7McgD2HvBGQvrlcjw4rpLhp19FIf7VQO9E6I/bDOwkeG4XZNpKh5/dkeJXp82bHjn7pdXHnrNYfLO+O07LbUEBigy4Ye4/BRTUTYXB7sOf8ABeted6jz4yx2U9MGfN3RqBERcjTVFTXG+Z5rbXDn6tsD3+0n9ArlVa8ZLJNXWOkucET3mke5svK0nlY4dT4Aj4rq9FvFOVG/ljzfpWdoqijt+jLPTxMDWCkYTjtJbnPxW+XE8LtR0d80XQQNqojXUcAiqIeYF7eXYEjuOy7bswu3ni1ck7aMCIixJEREBERAREQERFIIiKwLUaovUendNV11lxinic5oP3nfdHvW3XMcQ7LNf9C3K300ZkqDGHxNaMlzmkHA8Tur4oibxtEuC4S2aSnslXfKpv8AarlIXgnryAnJ9pPwVh9VwnC/UDazTTbRVER3GgJhMD9nlg3zy9dskLugezC4HVpvPJt3Q3cXirJYqcqFzWUREQEREA9FPaoPRSeUNL3uw1u5PcMKaV7rahEqc4pPN513ZrPFvyNY0473OyfgrfijEUTY2/ZY0NHkAqk0g12qeKdwvZjc+lpHOdG/ly38LfhurdC7XVbfTpjwR8Qx4vMzKVUvHd39ks4/ikPwCtpU7x3k5qmzQDBPo5HYHeSAqdEj/Vx/hXN4pK9dCxGHQdgjP3aCH/kC6Fa6xU5pNP22nIx6KliZ7mALYr2zliIilIiIgIiIJREQEREBERBr72cWWr/8sqtZB9XKP4XfJWRfv/UdX/5f5hV0AHNIPbkJPoVPwl213ID2RSq+lQvC0ej4iSxnqGzNwr6HXBXjuveM8S6eH0Ih6ouAziIitAIiKQQ/YcO8EIij16FTwRv0vxhgLTyUl2BY4A4GT/8A0AfarYHZ+qrfi1QvbQUl5pvVnoJWycw6gE/rhd3aLjHd7HQ3KLHJVRNkwOwnqPfldnn7y8fHnj/EsUeLae0k5RO1FxWWBERWSKJY2TQvhlY18TwWvY4ZBBGDn2KUKmtppbuhExuFL3bTd14Z6iZqSyvdLbY3gvaHbhh6sf3juKvmyXqk1DZKW6ULuaGdvMO9p7QfELiOIMsUGhLu6YDBh5QD2uJGF7uEVI+k4aWsSZ5pi+UA9xccfJerwZrcnixkye4aGWsVt4dyFKxWSrpUREU6BERNAiImgRESIBERSCHc47ERRIpvitZJtPXql1taBySRvDapjRs7ucfPoV2dlvFJfrPS3GjI9HM3dvaxw6tPj/oukultgu1tqKKoja+KZha4EZ7FQejLjW6K17UaTqWmSCqqBFHn7ricNePNvXyTl8eOXg3H6qsmO/bOlzopLSCoXkp9twRERIiImgO4XJ8Rb6yy6QqWh39pq/qIR27j1j7l1UkgjYXuOAO09iqpjHcQ+IjXyAus1qONujyD+ZHwXT6bgib/AFsn6aqX/DqeG1gfYNJx+lYWVFV9fKD1Gfsj3fNddnZNhsOnYi1OXnnPlnJJSNRoKp/ibD+2uJun7Qzdx9Ex2P4pMn4K3yqv0rENT/0gKmtI56e3h7weo9QcjfiV2eg495Zv+GHkT9r9BMxjAGAOizWDFmvWucIiKQREQEREEoiICIiAiIg8F6bz2arH+7JVcN3Ix3qzLiA621QxnMTvkqyb0ASRVOiGGl4uSwE4d6adv5q+O4qjLawUnHPkzs6rd/xNV6FvLyjwXkevx/FrP9nS43mEIiLzrYERFaAREUicKFKKJ9Dmtb0DrhpqtpgMvkp3Nb4kbj5LneDt3NVpma1yOzJRTZYO5jv0Ofeu8rmh0bcjIDxlUzo6oOmuKlbbC4iCaSSAD28zV3eF/H4WTF+PLHfxaJXgd0UnA28AoXC9SyCIilIiIoFd8ZKx0enaO2xbyV1QByjtA/1IVr2WiFtsFvoWgAU8DI8DwaMqo9Yx/tri1pe0kAxxcsrwOnUuP/KrqxgL1mGv0+JSv58tDLO7gUp2IkKCIikEREBERAREQEREBERBIVLcZdOzx1VHqa2tc2ekcDI9vUNHrB3sI+Kuhc/rG3m56Zr6NpDX1EEkLXHsLmnHxCvhv23hMNRpu9x6hsNJcmEc0zPrAPuvH2h71tVUfBi7yQ1d0sFT6rm5nY09jhs8fI+xW5hee6nxvociYj1LdpbcJAymETdc7a6FDnNY0uccAdqwmnZC059Y4zgKu9da9baonW+hxLcZNgxu4hztk97u4Lb4vEyci8VqibREeXm17quqra1mmrE50tbUv5JCzfkz2A9/f4LutM6fg01YqegiDS/l5pXj77z1P5LmeHWh/wBh0xu9yHNdZx6oduYmn/8AI9q70nK3uoZ6Y6RxcPqPcsdYmZ3Keu6YRFxmV47rWstloq66RwayCJ0mT4Bcf/R7oHS0t9vsrfrKmcQtd4D1nfFwU8W7qKDRMlK0/W1sgixj7o3d8guz4SWn9kcOLVG5vLLOw1Mg8Xn9AF7LoeHswd35aPKt507kdiyWLVku7DTERFIIiICIiCUREBERAQ9EQoPjUDnp5GfiYR8FVwz3dCVaj+gVaV0Lqa41EJ25ZDjyzlVlEyqO/P8AoHGainyWh8sDs+YwVe7tgM+Kofisx1Jqa13IDBMY38WOyryp521VHTVLDlssTXg+YBXmv2gp4pd0OL6fREReWbYiIrQCIikFKhSon0PPVjNO7boQfiqM10TaeJFLcGbekMU2fEHlPyV61WPo0niFTHF2mIda6oDsezPuIXa6JfWaafmFckfbtcFJVCU8riOgLT3gr2LkLBWiusNtqQcOdTszjvAx+S39PXgN5Zdu52FzuVi7MtoXiN+WwRQ1wcMtII7wVK1pnQJvkY6ovnUStpqWWdxwI2OfnyBKtir33iPyrPpXGlKoXrjrX1WzmUcUkcZHZgBn6q7QdlQ3A2N1VqC93B25OBzeJJKvkL2GevbMVj4hoW9iIiwwgREUgiIgIiICIiAiIgIiIC8d0aHUEhPZuvYvLcMfQJ8/gJVUx7fnmZw03xsZM0ckU87XkAbFsgwfZklXdktbk7eaoviifQ67tsrHYf6CJ23UYeQFaNTcKelh9JXVUcbCObM0wbnbsysPVuPbNXHasbltYtbb19VC0fvAT3DdeGruscMDpXzsgiZu6SQ9B7eir67cTLdC809np5K6o6NcAQz9StNFprVWspW1N6qX0dF1bGeo/lZ+q08PSdR38ie2GWba9PXqHX9VWVJtenGvlmkPKaho3Ofwj8yt1oPh7Hb6kXe9j6TX552MJy1ju895+S6LTej6Cw07fo1O1rujpX7yPHiezyC6hTyeo0xU+jxo1H5U7N+ZYjv71KnsULi90/K8eBOwnu3ReevroLZbqmuqHBkUEZec9uOz2q2Ok3tFY+SZ8Ki4gSyar4l2zTNK4uZG9kTgOwu3f7gv0hS08dLBHTwjliiaGNb3ADA+AX5/4LWqa/67ueqqppLIC7lcRsZH/o1focAZyvonHxRixVpHw5WW27JAUoizwxiIikEREBERBKIiAiIgIiIIwuL1bSiO4R1ABxK3BPiP9F2q0mpqP6VapHNHrxHnH5/BRIojivRGfTlPVNG9PUDP8rhj9F2PDW5C5aGoAXZfTAwO9nT4YXm1Jbv2tpuvpAMl8JLfMbj5LkeCl35a2vs8hxzgTRg942d8Fyur4Jy8aYj4bXGtqdLjwmFkepwoJXhW+hERWhIiIpBSoUhRI+FWP7LIPBVbxWiD9M079/UqB7MtKtOqOaWXyVa8ThzaOkOP/eI/Z9pdPpM65NS8bpLkNN6q1PY7HFJHb/pdqYXMa7k6EHcZHT2rqbfxSstS0NrYqmkk7cjnbnzC9fCuB8+iwWAHlqHgg9vRbi5aWslxL/ptqg9Ier2Dkd7wutyuTxPq2x5a+fyx4637dxLOg1LZ63D6S7Uxd+H0oafcVvIbhK/PKY5R2Frgfkq0ruFVslPNRVc9M7sa4B7f1WqfwxvtO4mhvMZHYOZ8ZWtPE4WT9OTS82vEeYXSK0j95C9oWs1PcGM0pdeVrw76LKACe9uFU7dK8QaQkQXCQ+VWfzXsNt4jT0FRTVVRE+nfE5rxK9pJbjfHapw9NxUyVvXJE6UteZjWm74Alraa65O5mYP+Eq7+xfnjgncm0lfc6R59YhkoHkSD81+hI3B8bXtdkEZyuly/5stSavplFiOqyWCFRERSCIiAiIgIiICIiAiIo2C1F7nEcccQOcnJ8O5bOaZkETpHnDWrjrzdqehoau6Vjj6OEGTl7TgEho8Sla906hekbUxrmGa/cTf2fSHEjGxQB2dmkDJPs/Jb+k4XUj5PT3m5z1spO4ZsD5k5K+HDmgqbxf7nqWpjLnSveItsjmPUg+A2Vo09v2Bm/wAqx9R6hbBaMWOfUNrHjrP3Wai1WC3WwiG2UMUIxu5rfWPm47ldBT0jIcuOHPPbjovsxjWbNaGjwWY6LzubPfNO7SyTqPSFIUKVroFClEhKA0lwCq/jDe3x0lFYKbLp6t4fIxu5Izho9pVl1NVDRwOmneGxsaXOPgBlVxoC1Sa+4jVmra6LNvon4p2u6F42aPYN/au/0Ljd+T6to8Qwci/bVbGgtMx6V0fQW0NHpwz0k7u10jtz+Q9i6fsWDT3hZ9i9fDme0hECKYBERSCIiAiIglERAREQEREBYPa17HNcMtIIKzWJQVtW0porhNA7YMJxv1HYqNa92ieKDZwMQtn5wegMb+vzX6R1Zb8tbXRtyWDlk8u9UnxSswmoILxE0l9MfRyjGfVPQ+w/NY71i1ZrPyvS3bK42ubI1r4yHMcA5pHaD2oVxPCq/wD7a0o2nleDVUP1TwTuWfdPzC7bsXz3m4JwZppLqUt3RsREWvC4iIpSKVCKs+kS+FYeWmfvjOAq54m7aMl8Z4/zXf3KQANiB36lVzxRkDNKMYTu+paB44BXU6VH+oqm/ikt1wjgdFoiN56STyOHvx+S7h8bZNnNBXOaAon0Oh7XE4YL4vS4/mJK6UFYeoXi3JvP92PHuIeOW3MzmN/IfHcLyvpaiLJGHDvaVtkWl3aZIvZpOeQbElYk52ccg7FbtzGu6tafYvg+hgf90jyKy0y6na/fv2oecu0JxGbLg/RHSZ84n9fd+S/QVqurRFGCeaB+Cx43GD0XJav0NR6nt3I1xjrYxmCQ9AfwnvBVf2HWF00ZVCw6hglNJGcMfjLox4fiavVYM1OZiiaz90e2lav3Tt+jG8rgC1wIO43WS4+y36Gqp21FvrIqmncMnldkD9F0VPdKadoy8Nd3FY5iazqWGaTD2lR2qA9r/skHyUjr1CnaumSImR3psD0WOVOcjZRjCnYLJQBntQDfqqzIlFhJNFFnnkaPMrXzXmFnqxAvd39E2mKzLZrz1FZFTty92/cOq5+vvboIXSVVXDSwgbuc8Nx7Sq3v/FW3UgfDa4n19QScybiPPge1Xpjvf1C8U17WBqDUVLQ00lZXv9DRxfi6u8h2lUrU1114m6lipqdkkFqikHqA7RtJHrO7ys4rLqbXtayuvkz6eiafVBbgAfwN/NW3YLBRWWhjhpYBExu4Ha497j2lV5HKxcOs9s7sy1x93+Hvtttp7Nb4bfRs5IYW8rQPifFesIi8re9slpvb3LNEajSVCkIqpay7X2isj4Pp5fHDMcem5csae49y9sdZTzsD4pWua4ZBHQjvWFfQUtzoZqKsiEsErcOae/w7lUpqrnw5vot9Y91TY6h2YZDvyDw8R2hdLjcTFyscxWdXhXu1Plb/AKaIDJkb718Ja5jciIF5+C1cRbPC2SJ7XscA5rmnIIPQrltaatZp23mCncH3GYfVtG/IPxEfJYuPwb5cv02W01rG5eTW96qr3X0+lLR9bXVbgyZzejB3fmVc+k9O02l9O0tppd2Qt9d/a95+04+ZXBcHdDy2qjfqS7xk3WuGWek3dHGfzPX4K2gF7fjcavHxRjq5GbL3yAYUphThbEQxAREVgREQEREBERBKIiAiIgIiICgqVCD41EDZ6d8TxlrxylVneLUP7VbKtgMMgLCSNnNPQq0TuFotR2s1tL6aIfXwjI/iHaFEol+ZbJW1XDbXLo6gPNG71JNvtxOOzh4jqv0BBPFVU0VRBK2WKRocx7OjgR1CrvWulW6ktjfRFra6AH0RPb3tPmuc4d68dY526evBdHTiTlY+TrA7tBPd8lxOrcD94r30/VDdw5NRpdaKGvEmCw5GNlK8bO62mst2PQijKlNrCxe8RsL3dApc5rGlziAB2rWVNV6Y8rchg7+1TraYh8JHmadz3dpVccR3Pud4slgpzzSTSc7mjs5iGj4ZKsGeohpKaWpmcGxRNL3k9wGSuS0La6u/amqdYXGMsjyY6Njh0H4h4AfErt9OrXFFuRf1Ef8A6jN+mIhZkUDKWCKnYMMiY1jR4ALJSDkDKLi5Ld95siI0hERU0kREQPFaXUWnKLUVIYauna842d95vkexbpFkxZb4rd1J1KsxtRlXobUmnKp9dp6rlfGN8MPK8Y729CvZbeKVxtrxT6itjyehkjb6N/tB2KuGakjmdkkg46hamvs0NZHy1tLFVRjP7xvN7u1d7D1iloiM9f8AlS2KN7hpKDibpapDSLnLSO/DM0t+O4XRUer6CoYDTXmmlb0H1zfzXGVnDjTVW8u+ivpn/wC5kwPcVo6jhBbnPJp7tNEMbB8Qd8iFu15HCv6tpScV/wALebqBzhltTTv8PSA/mvoL7O44EkHvH6qjn8IapoBhvMBz3xuChnCa6g7XunaO8F6tvi/GRHZb+leLr1UD+9jHuWD75KBl1XGP8QCpdvCe4dJNQRj+UPP5r6DhC4kelv5PlEf1TfF+ciOy39K1qjVlJTg+nvFLHjrmdq0ldxN05SjEl5MzhnaAF3yXGQ8ILa0/XXeod4NiaPmtnScL9O04BkFRUnufJgfBY7ZuFX3ba8Y7fh57hxgt3MRbrdU1JOwMrwwE+W5XhbqXX+ohi1W4UkJ/vQzGB/M/8l29Fp2z23BpLbSxuHRwZk+8rZhr5Bhoc4DosF+p4Kfop/2vGG3yrKPhreLpKJ9Q3tzt92McZD8dguwsuj7LZXNdSUQmn/203ruPv2C6aK3PdgyvDR4dV7o4GQbMA8z1XP5HVc2WO2J0tGOlfTzU1GeUOmGD+HC9qIuXNpt5laZEREQkIoRAWr1DZKXUNmmt1UwEPaTG/G7H9jgfPHsW0RTizWxXi9fcImN+FBW7VV10O2usVwp3ySwEthDnbMd+bT19y6PhZoep1benaqv4dNRMk5omyD9+8Hr/ACj4rb8VNHNvdB+1aRhNbTsw9resrB+Y7FuOC+uIrzZ26erCxlwoGYiwMeliG2cd47fNe76flxZ6fVp7n20ORNq+FttYABhZhYgbLMLotPYFKIiyCiFEBERAREQEREEoiICIiAiIgKFKhAWLmgrJQg5TUFhB5quljGc5kjHb4j9FVuq9E0eoo31FOxlPcerZgMB/g79exX4W5C5i9addIZKmiA5zu6PvPeFGiJmFD6Y1ZddK3MWfUjp44Wjlie/fkHeD95qtemuhngbNFKyeJwy1zehHflaO+6fotQUZpLhG7mY4uY8bPYemx/JcPBatU6DldLREXS0t9Z0TXHIHeR2HxC4/P6VXPu1PFm5h5OtRZbn7QbsTEfYVjJcHYxGwDzVfW/ifYq1zWTQ1FK8/iHMM+Y/RdjHKyZjJI3B0b2hzSO0LzGbhZMH8yHRrat/T6ySSzfvHlw7uxYjZS1rnEBoJJ7l64Le4vBmJa3uWtuIX3EPI2kZW5gljD4nDDwRthbmONkULI42hrG/daMAKI42xNDWDA+a+ipbJMx2/DHadinKhFSFRERWSIiKNAiImhOVCImhg6GN5y5jXHvIXxfQQP+6W+RXqCknbqm5j0RLwut8fLhrnDz3Xz/Zzh0kbjyWwTCd0p7mu/Z7v9o1T+z3dsg9y2GFOAE75O6XibbW49aRx8l9G0UDRu0u8yvTlE7plE2mXyEEIIxEweOF9A0AbAAIpUo8oxsmVKhRIIiJCRERSCIiIERFGhjI0Pic3vG3gqN1hbarRup6bUVjzSjnz6u4ZJ94HwIzsr0PRc1qayxXegq6CUbTtywn7ruw+9dTpXLnj5u34lXJSL1dxpDU9LqvTlJdKYAekbyyszn0cg+03/rvXQBfmvg1qR+mNZT6duDiyCrkLBzHZk46e8be5fpMFe4id+XItXtlmihSrIQUREBERAREQEREEoiICIiAiIgKFKhARFCBhMKVCDndSWukdRyVjiIpWD7QGzsnoQqd4jXl1o00aeJ+J613oxvuGY9b9FbusZsU0FOHYLnF59nRfnjiNIbvruhtURy2MMiDf4nuyfmFWZiI2msbtDv8AhxpWiodJU1VVUsEtRW/XO9JGHFregG/vXc+hgaAGxRgDsDdgkMLYKSCFg5WRMDGjwAws8bL59zeVfNlnc+HWx17YSxrQMAY8lB2ciduVpriIiJEREhAiIrJEREBERAREQEREBFlypyqJGKgLIjZQoBERAREVkCIiAiIiRERAREQEREBeG4Nw1jyMnONl7l8KtvNSv2yRghKzPdGkwpHifaTQXOlvVLzRmUjmc3blkbuD5kYX6B0BqUar0fQ3QuaZnM9HOB2SN2P6qvdVWv8AbWm6uj5WmQM54yR94bj81zvAbUrrfqCr05USER1jfSRB3QSN6j2j5L3PS+R9XDET7hz+Xj1O36LUrAOWQOV04lpbSiIpSIiICIiAiIglERAREQEREBQpUIMSVz9z1PHSvMNKwTSDq7sH6qdS3N1FTNp4nYlmBye5qr+7XOGzWepuNQfUhbzco6uPYPaVGx0E2o7m7131QiaemAGj4rOm1NcmEOMwnaOoLR8wqPsdjvvE24VNbV176ejiPLzbloPY1oz3Ld1PDXU+nGGs09eXVJZuYTlrnD+UkgrWvzMNL9lreWX6NpjcLOu1yddKpkjmGPDA0MJ6Kk9P/wDffGP07sOYKt8vsYDj5Lr9Oaz/AGtFUU1xhFJc6aJ7nRkcvPyg5Iz8lynB6I1WtKioIz6Omkf7SQPzTl37cN7RPwnFSe9fIzgZO6lYhSvnO9zt1BERSCIiJEREgERFYEREBEUhBCLJEQxUhSiAiIgg9CoUnoVChIiIkQCIikEREBERAREQEREBERAWMozC8d4IWSHoR4Ku/KN+WhZu7CpG/iXR3EpldTeqIahtTEG/hJyR8wrv5fW9qrLi5bQ+KhuTG7hzoXnw6hei6Jm7cs1n5Ryad1PD9JUNVFX0NPWQkGKaNsjfIjK9Y6Kt+Ct9/a/D6ngkfmWgead2/Z1b8D8FZAXrIcXXlKIilIiIgIiICIiCUREBERAREQFieqIg4LVLyb89pOzWNAHdsqx4pyuZpWJgPqyVLQ7xwCURUlMe3VcLGMh0Dbwxgb6QPe4jtPMd11wdg9iIvn/V5/1dnVw/pVXxmtlJHbaS8xR+jrjP6B0jNudpGd+8+K0/A5jXXy6OI3bSDH+cIi9PEzPTp/w14/mLsREXiobgiIrJEREBERIBERWBERAUhERCUREBD0REEZTKIgZUIiJERFEgiIoBERWBERAREQEREBERRIHoo7kRR8o+WkOznLleIEbJdE1xeASwse3wOURdXpv/ANFWTJ/LeP8Ao61Epul8pS76kxRScviDj5L9CjtRF7mHCt7lKIilAiIgIiICIiD/2Q=='}}></Image>
            </View>
        )
    }
}
const Stack = createStackNavigator()
//<Adv />
const App: () => React$Node = () => {
      return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                          backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }}
                    >
                    <Stack.Screen
                        name='Home'
                        component={HomeScreen}
                        options={{
                            title: '首页'
                            }}/>
                    <Stack.Screen name='Detail' component={DetailScreen} />
                    <Stack.Screen name='List' component={List} options={{ headerTitle: props => <CustomHeader {...props} />, headerRight: () => <Button onPress={() => alert('This is a button!')} title="三" color="#000" /> }} />
                </Stack.Navigator>
            </NavigationContainer>
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
  btn: {
    color: '#000',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  btnBox: {
    transform: [{translateX: '50'}, {translateY: '50'}]
  },
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
  },
  modalBox: {
    height: 300,
    width: '100%',
    backgroundColor: '#ececec',
    position: 'absolute',
    bottom: 0
  }
});

export default App;
