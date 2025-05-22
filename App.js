
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

// Import vašich obrazovek
import SearchScreen from './screens/SearchScreen';
import ResultsScreen from './screens/ResultsScreen';
import AccommodationDetailScreen from './screens/AccommodationDetailScreen';
import BookingConfirmationScreen from './screens/BookingConfirmationScreen';
import ParksScreen from './screens/ParksScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import VetsScreen from './screens/VetsScreen';
import FilterScreen from './screens/FilterScreen';


const RAL_5018 = '#006C84';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function AccommodationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: RAL_5018 },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="SearchMain" component={SearchScreen} options={{ title: 'Hledání ubytování' }} />
      <Stack.Screen name="Results" component={ResultsScreen} options={{ title: 'Výsledky vyhledávání' }} />
      <Stack.Screen name="AccommodationDetail" component={AccommodationDetailScreen} options={{ title: 'Detail ubytování' }} />
      <Stack.Screen name="BookingConfirmation" component={BookingConfirmationScreen} options={{ title: 'Potvrzení rezervace' }} />
      <Stack.Screen name="Filter" component={FilterScreen} options={{ title: 'Filtrování ubytování' }} />
    </Stack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Ubytování"
      screenOptions={{
        tabBarActiveTintColor: RAL_5018,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 11, fontWeight: 'bold', textTransform: 'none' },
        tabBarStyle: { backgroundColor: 'white' },
        tabBarIndicatorStyle: { backgroundColor: RAL_5018 },
        tabBarShowIcon: true,
      }}
    >
      <Tab.Screen
        name="Ubytování"
        component={AccommodationStack}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="hotel" size={focused ? 26 : 24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Parky"
        component={ParksScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="park" size={focused ? 26 : 24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Restaurace"
        component={RestaurantsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="restaurant" size={focused ? 26 : 24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Veterina"
        component={VetsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="pets" size={focused ? 26 : 24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={RAL_5018} />
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: RAL_5018,
  },
});

export default App;