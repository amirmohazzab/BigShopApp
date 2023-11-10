import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/Main';
import Category from './screens/Category';
import Off from './screens/Off';
import Product from './screens/Product'
import Cart from './screens/Cart';


const Stack = createStackNavigator();

const StackNavigator = () =>  {
  return (
    <Stack.Navigator 
      initialRouteName='Cart'
      screenOptions={{headerShown: true}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Off" component={Off} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

export default StackNavigator;