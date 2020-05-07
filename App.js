import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

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
        <Stack.Screen name="ResultShow" component={ResultShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
