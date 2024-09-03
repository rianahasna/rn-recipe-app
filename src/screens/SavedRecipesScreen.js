import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SavedRecipesScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Saved Recipes Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SavedRecipesScreen;