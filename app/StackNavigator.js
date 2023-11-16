import { createStackNavigator } from '@react-navigation/stack';


import Main from './screens/Main';
import AboutCategory from './screens/AboutCategory';
import CategoryNavigator from './CategoryNavigator';
import Off from './screens/Off';
import Product from './screens/Product'
import Cart from './screens/Cart';
import Login from './screens/Login';
import Register from './screens/Register';
import ForgetPass from './screens/ForgetPass';
import Search from './screens/Search';


const Stack = createStackNavigator();







const StackNavigator = () =>  {
  return (
      <Stack.Navigator 
        initialRouteName='Main'
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="AboutCategory" component={AboutCategory} />
        <Stack.Screen name="CategoryNavigator" component={CategoryNavigator} />
        <Stack.Screen name="Off" component={Off} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgetPass" component={ForgetPass} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
  );
};





export default StackNavigator;