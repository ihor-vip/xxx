import React from 'react';
import {StyleSheet} from 'react-native';
import Home from "./components/Home";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UsersPageNavigator from "./screens/UsersPageNavigator";


let BottomTabNavigator = createBottomTabNavigator();

export default function App() {
    return (


        <NavigationContainer>
            <BottomTabNavigator.Navigator>
                <BottomTabNavigator.Screen name={'users'} component={UsersPageNavigator} options={{
                    headerStyle:{height:30}, headerTitleStyle: { display: 'none'}}}/>
                <BottomTabNavigator.Screen name={'home'} component={Home}  options={{
                    headerStyle:{height:30}, headerTitleStyle: { display: 'none'}}}/>
            </BottomTabNavigator.Navigator>

        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {},
});


