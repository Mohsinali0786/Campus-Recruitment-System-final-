import React from 'react';
import Home from '../screen/Home'
import About from '../screen/About'
import Contact from '../screen/Contact'
import Studentform from '../component/student/Studentform'
import Comform from '../component/Companies/comform'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import dashboard from '../component/Dashboard';
import Student from '../component/student/student';

import Company from '../component/Companies/Companies';
import Admin from '../component/admin/admin';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DashBoard" component={dashboard} 
        options={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf:'center',
          
          },
        }}
/>
        <Stack.Screen name="About" component={About}
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Contact" component={Contact}         
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf:'center'
          },
        }}/>
         <Stack.Screen name="Student" component={Student}         
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf:'center'
          },
        }}/>
        <Stack.Screen name="Company" component={Company}         
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf:'center'
          },
        }}/>
        <Stack.Screen name="Admin" component={Admin}         
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf:'center'
          },
        }}/>
        
        <Stack.Screen name="Studentform" component={Studentform} />
        <Stack.Screen name="Comform" component={Comform} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;