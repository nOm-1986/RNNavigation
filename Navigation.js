import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Feed from "./screens/tabScreens/Feed";
import Notifications from "./screens/tabScreens/Notifications";
import Settings from "./screens/tabScreens/Settings";
import { Ionicons } from '@expo/vector-icons';

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
        }
      })}
    >
      <Tab.Screen name="Feed" component={Feed}/>
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