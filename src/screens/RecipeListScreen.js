import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import RecipeData from "../contants/RecipeData";
import ItemRecipe from "../components/ItemRecipe";

const RecipeListScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      {/* <Text>Recipe List Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ScanRecipeScreen')}>
                <Text>Go to Scan Recipe Screen</Text>
            </TouchableOpacity> */}
      <FlatList
        data={RecipeData.recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (<ItemRecipe item={item}/>)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default RecipeListScreen;
