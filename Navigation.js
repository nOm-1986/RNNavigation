import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Ionicons } from '@expo/vector-icons';
import Feed from "./screens/tabScreens/Feed";
import Notifications from "./screens/tabScreens/Notifications";
import Settings from "./screens/tabScreens/Settings";
import TweetDetailScreen from "./screens/homeStack/TweetDetailsScreen";

//Stack
const Stack = createNativeStackNavigator();

//Recuerda que todas las pantallas deben ir dentro de un navigator y todos los navigators deben ir dentro de un navigator container
function StackGroup() {
  return (
    //Al tener las 2 dentro del mismo stack, puedo navegar entre pantallas
    <Stack.Navigator>
      <Stack.Screen name="FeedMain" component={Feed} options={{ headerShown: false }} />
      <Stack.Screen 
        name="TweetDetailScreen" 
        component={TweetDetailScreen}
        screenOptions={{
          presentation: 'transparentModal',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}


//Tab
const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if(route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Notifications"){
            iconName = focused ? "ios-notifications" : "notifications-outline"
          } else if ( route.name === "Settings") {
            iconName = focused ? "settings" : "ios-settings-sharp"
          }
          return <Ionicons name={iconName} color={color} size={size} />
        },
        tabBarStyle: [
          {
              backgroundColor: 'white',
              display: "flex",
              position: 'absolute', 
              bottom: 5,
              height: 60,
              borderRadius: 10,
              shadowColor:'#000',
              shadowOpacity: 0.08,
              marginHorizontal: 10,
          },
          null
          ]
      })}
    >
      <Tab.Screen name="Feed" component={StackGroup}/>
      <Tab.Screen name="Notifications" component={Notifications}></Tab.Screen>
      <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup/>
    </NavigationContainer>
  )
}