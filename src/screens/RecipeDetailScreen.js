import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import RecipeData from "../contants/RecipeData";
import colors from "../theme/color";

const RecipeDetailScreen = () => {
  const route = useRoute();
  const { recipeId } = route.params;
  const recipeDetail = RecipeData.recipes.find(
    (recipe) => Number(recipe.id) === Number(recipeId)
  );
  console.log("recipeId", recipeDetail);
  return (
    <ScrollView style={styles.screen}>
      <Image
        source={{ uri: recipeDetail.image }}
        resizeMode="cover"
        style={styles.imageRecipe}
      />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
  },
  imageRecipe: {
    backgroundColor: colors.border,
    height: 300,
  },
});

export default RecipeDetailScreen;
