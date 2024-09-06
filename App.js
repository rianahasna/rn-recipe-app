import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./src/screens/MainScreen";
import RecipeDetailScreen from "./src/screens/RecipeDetailScreen";
import colors from "./src/theme/color";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          background: colors.background,
          border: colors.border,
          notification: colors.notification,
          primary: colors.primary,
          text: colors.text,
          card: colors.card,
        },
      }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipeDetailScreen"
          component={RecipeDetailScreen}
          options={{ title: "Recipe Detail", headerTransparent: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
