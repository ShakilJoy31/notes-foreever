import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GettingStartedPage from './components/GettingStartedPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import NotesDashboard from './components/Notes/NotesDashboard';
import NewNote from './components/Notes/NewNote';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { AuthenticationPostAPI } from './APIrequests/PostRequests';

const Stack = createNativeStackNavigator();

export default function App() {
  const [customNavigation, setCustomNavigation] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cardData, setCardData] = useState([]);
  const handleSaveNote = () => {
    const theNotes = {
      email: 'motin@gmail.com',
      title: title,
      description: description
    }
    AuthenticationPostAPI.createNote(theNotes).then((res) => {
      if(res.message === 'Notes created successfully.'){
        setCardData(res?.data?.notes);
        customNavigation.navigate('NotesDashboard');
      }
      else{
        console.log(res);
      }
      })
        .catch((error) => {
          console.log(error);
        });
  }
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

        <Stack.Screen name="NotesDashboard" options={{
          headerShown: false,
        }} >
          {(props) => (
            <NotesDashboard
              {...props}
              setCardData={setCardData}
              cardData={cardData}
            />
          )}
        </Stack.Screen>


        <Stack.Screen
          name="NewNote"
          options={{
            headerTitle: "Create New Note",
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity
                onPress={handleSaveNote}
              >
                <FontAwesomeIcon icon={faCheck} size={20} color="white" />
              </TouchableOpacity>
            ),
          }}
        >
          {(props) => (
            <NewNote
              {...props}
              setTitle={setTitle}
              setDescription={setDescription}
              setCustomNavigation={setCustomNavigation}
            />
          )}
        </Stack.Screen>


        {/* <Stack.Screen name="Notes" component={Notes} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}