import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Theme, withTheme } from '@rodrigorbrg/my-ui-components';
import { FileSearch, House, Person } from 'phosphor-react-native';

import App from '../screens/App';

import MyTabBar from '../components/MyTabBar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const getScreenOptions = (theme: Theme) => {
  return {
    headerStyle: { backgroundColor: theme.colors.background },
    headerTitleStyle: { color: theme.colors.primary },
  };
};

// type HomeStackParamList = {
//   Home: undefined;
//   Profile: { userId: string };
//   Feed: { sort: 'latest' | 'top' } | undefined;
// };

const HomeStack = withTheme(({ theme }: { theme: Theme }) => {
  return (
    <Stack.Navigator
      initialRouteName="App"
      screenOptions={getScreenOptions(theme)}
    >
      <Stack.Screen
        name="App"
        component={App}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
});

//tabBar={props => <MyTabBar {...props} />}
const Navigator = ({ theme }: { theme: Theme }) => {
  const { colors } = theme;
  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          backgroundColor: colors.surface_primary,
          height: 40,
        },
        headerTitle: 'UI Components',
        headerTitleStyle: { color: colors.primary_variant },
        // tabBarStyle: { backgroundColor: colors.surface_primary },
        // tabBarActiveTintColor: colors.primary,
        // tabBarInactiveTintColor: colors.text_on_surface,
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen
        options={() => {
          const navigationOptions = {
            tabBarLabel: 'Buscar',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => {
              return <FileSearch size={size} weight={'light'} color={color} />;
            },
          };
          return navigationOptions;
        }}
        name="Buscar"
        component={HomeStack}
      />
      <Tab.Screen
        options={() => {
          const navigationOptions = {
            tabBarLabel: 'Buscar',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => {
              return <House size={size} weight={'light'} color={color} />;
            },
          };
          return navigationOptions;
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={() => {
          const navigationOptions = {
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => {
              return <Person size={size} weight={'light'} color={color} />;
            },
          };
          return navigationOptions;
        }}
        name="Perfil"
        component={HomeStack}
      />
    </Tab.Navigator>
  );
};

export default withTheme(Navigator);
