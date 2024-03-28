import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GettingStartedPage from './components/GettingStartedPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import NotesDashboard from './components/Notes/NotesDashboard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={GettingStartedPage} options={{
          headerShown: false,
        }} />

        {/* Login Screen */}
        <Stack.Screen name="Login" component={LoginPage} options={{
          headerShown: false,
        }} />


        <Stack.Screen name="Signup" component={SignupPage} options={{
          headerShown: false,
        }} />

        <Stack.Screen name="NotesDashboard" component={NotesDashboard} options={{
          headerShown: false,
        }} />
        {/* <Stack.Screen name="Notes" component={Notes} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}