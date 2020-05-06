import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./src/screens/SearchScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Business Search" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
