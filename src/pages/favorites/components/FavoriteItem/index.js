import React from "react";
import styles from "./styles";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";

const FavoriteItem = ({ favorite }) => (
    <View style={styles.container}>
        <Image
            style={styles.avatar}
            source={{ uri: favorite.owner.avatar_url }}
        />
        <View style={styles.info}>
            <Text style={styles.title}>{favorite.name}</Text>
            <Text numberOfLines={2} style={styles.description}>
                {favorite.description}
            </Text>
        </View>
    </View>
);

FavoriteItem.propTypes = {
    favorite: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        owner: PropTypes.shape({
            avatar_url: PropTypes.string
        })
    }).isRequired
};

export default FavoriteItem;
