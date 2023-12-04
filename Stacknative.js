import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../loginpage'
import Petalokasi from './Petalokasiobjek'
import Homepage from './HalamanHome';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login" >
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Homepage} options={{headerShown: false}}/>
      <Stack.Screen name="Petalokasi" component={Petalokasi} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default MyStack;