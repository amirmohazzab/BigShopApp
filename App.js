import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './app/StackNavigator';


const App = () =>  {
  return (
    <NavigationContainer>
     <StackNavigator />
    </NavigationContainer>
  );
}

export default App;

