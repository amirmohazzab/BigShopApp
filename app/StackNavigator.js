import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/Main';
import Category from './screens/Category';
import Off from './screens/Off';
import Product from './screens/Product'
import Cart from './screens/Cart';
import Login from './screens/Login';
import Register from './screens/Register';
import ForgetPass from './screens/ForgetPass';


const Stack = createStackNavigator();

const StackNavigator = () =>  {
  return (
    <Stack.Navigator 
      initialRouteName='ForgetPass'
      screenOptions={{headerShown: true}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Off" component={Off} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgetPass" component={ForgetPass} />
    </Stack.Navigator>
  );
}

export default StackNavigator;