import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/loginscreen';
import RegistroScreen from './screens/registroscreen';
import ViagemScreen from './screens/viagemscreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="Viagem" component={ViagemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
