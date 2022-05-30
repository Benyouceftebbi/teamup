import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirnEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import Homepage from '../screens/Homepage/Homepage'
import FindOpponent from "../screens/FindOpponentScreen/FindOpponentScreen"
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen"
import SurveyScreen from "../screens/SurveyScreen/SurveyScreen"
import FindOpponentf from "../screens/FindOpponentf/FindOpponentf"
import FindOpponentb from "../screens/FindOpponentb/FindOpponentb"
import FindOpponentt from "../screens/FindOpponentt/FindOpponentt"

import CreateTeamScreen from "../screens/CreateTeamScreen/CreateTeam"
import Addmatchf from "../screens/FindOpponentf/AddMatchF/Addmatchf"
import Addmatchb from "../screens/FindOpponentb/Addmatchb/Addmatchb"
import Addmatcht from "../screens/FindOpponentt/AddMatcht/Addmatcht"
import CreateFTeam from "../screens/CreateTeamScreen/CreateFTeam"
import CreateBTeam from "../screens/CreateTeamScreen/CreateBTeam"

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
  
    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Signin" component={SignInScreen}/>
          <Stack.Screen name="Home" component={Homepage}/>
          <Stack.Screen name="Don't have an account? Create one" component={SignUpScreen}/>
          <Stack.Screen name="Forgot password?" component={ForgotPasswordScreen}/>
          <Stack.Screen name="FindOpponent" component={FindOpponent}/>
          <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen}/>
          <Stack.Screen name="Profile" component={ProfileScreen}/>
          <Stack.Screen name="Finish" component={SurveyScreen}/>
          <Stack.Screen name="Football" component={FindOpponentf}/>
          <Stack.Screen name="Basketball" component={FindOpponentb}/>
          <Stack.Screen name="Tennis" component={FindOpponentt}/>
         
          <Stack.Screen name="CreateTeam" component={CreateTeamScreen}/>
          <Stack.Screen name="Addmatchf" component={Addmatchf}/>
          <Stack.Screen name="Addmatchb" component={Addmatchb}/>
          <Stack.Screen name="Addmatcht" component={Addmatcht}/>     
          <Stack.Screen name="CreateFteam" component={CreateFTeam}/>   
          <Stack.Screen name="CreateBteam" component={CreateBTeam}/> 
     
      </Stack.Navigator>
    </NavigationContainer>
    );
};
export default Navigation;
