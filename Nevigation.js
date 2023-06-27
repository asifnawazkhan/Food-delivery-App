import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screen/Homescreen';
import ResturentScreen from './Screen/ResturentScreen';
import cartscreen from './Screen/Cartmodel';
import Orderprepered from './Screen/Orderprepered';
import deliveryscreen from './Screen/deliveryscreen';
const Stack = createNativeStackNavigator();

function Nevigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}
      
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ResturentScreen" component={ResturentScreen} />
        <Stack.Screen name="Cart" options={{presentation:'modal'}} component={cartscreen} />
        <Stack.Screen name="Orderprepered" component={Orderprepered} />
        <Stack.Screen name="deliveryscreen" component={deliveryscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Nevigation;

