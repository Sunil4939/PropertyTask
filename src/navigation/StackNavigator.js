import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTab';
import styles from './styles';
import { connect } from 'react-redux';


const Stack = createStackNavigator();

const StackNavigator = ({ navigation,  }) => {
  // console.log("token : ", token)
  return (
    <Stack.Navigator
      screenOptions={() => ({
        // headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTitleStyle: styles.headerTitleStyle,
        headerStyle: styles.headerStyle,
        headerTitleAlign: 'center',
      })} >
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
     
      
    </Stack.Navigator>
  )
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StackNavigator);


