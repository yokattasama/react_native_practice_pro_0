import React from 'react'
import {
    DrawerLayoutAndroid,
    View,
    Text,
    Alert,
    StyleSheet
} from 'react-native'

export default class Drawer extends React.Component {
    render () {
        return <DrawerLayoutAndroid style={styles.drawerBox}
                  drawerWidth={200}
                  drawerPosition={'left'}
                  renderNavigationView={() =><View style={{flex: 1, backgroundColor: '#fff'}}>
                                                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
                                             </View>}>
                  <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                  </View>
                </DrawerLayoutAndroid>
    }
}
const styles = StyleSheet.create({
    drawerBox: {
        height: 400,
        width: 375,
        backgroundColor: '#f55'
    }
})
