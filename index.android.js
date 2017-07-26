import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class Page1 extends React.Component {
  static navigationOptions = {
    title: 'Page1',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{justifyContent: 'center', flex:1, margin: 16}}>
        <Text style={{marginBottom: 16}}>Page1, Navigation!</Text>
        <Button
            onPress={() => navigate('Page2')}
            title="Go to Page 2"
          />
      </View>

    );
  }
}

class Page2 extends React.Component {
  static navigationOptions = {
    title: 'Page2',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{justifyContent: 'center', flex:1, margin: 16}}>
        <Text style={{marginBottom: 16}}>Page2, Navigation!</Text>
        <Button
            onPress={() => navigate('Page1')}
            title="Go to Page 1"
          />
      </View>
    );
  }
}

const ReactNativePermissionChangeBug = StackNavigator({
  Page1: { screen: Page1 },
  Page2: { screen: Page2 },
});

AppRegistry.registerComponent('ReactNativePermissionChangeBug', () => ReactNativePermissionChangeBug);
