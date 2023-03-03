import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AspectRatio,Box,Button,HStack,Image,Text,VStack} from 'native-base';
import SearchFilter from '../../components/SearchFilter';
import SearchInput from '../../components/SearchInput';
import JobContainer from '../container/JobContainer';
import MyPosts from '../client/myPosts';
import Offers from '../client/Offers';
import AllChats from '../client/allChats';
import ClientAccount from '../client/clientAccount';
import AllOffers from '../client/AllOffers';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export const AppStackClient = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="Tekk"
       
        component={TabStack}
       
        options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: 'white',
       
        }}
      />
     <Stack.Screen name='Search' component={SearchInput}></Stack.Screen>
     <Stack.Screen name='JobContainer' component={JobContainer}></Stack.Screen>
     <Stack.Screen name='AllOffers' component={AllOffers}></Stack.Screen>
    </Stack.Navigator>
  );
};

export const TabStack = () => {
  return (
    <Tab.Navigator   screenOptions={{
        headerTitleAlign: 'left',
      }} >
      
      <Tab.Screen name="Job Posts" component={MyPosts} />
      
      <Tab.Screen name="Requests" component={Offers} />
      
      <Tab.Screen name="Chats" component={AllChats} />
      
      <Tab.Screen name="Account" component={ClientAccount} />
    
    </Tab.Navigator>
  );
};
