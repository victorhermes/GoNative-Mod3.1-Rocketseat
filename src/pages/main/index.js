import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    SafeAreaView
} from "react-native";

import { connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as FavoriteActions from "~/store/action/favorites";

class Main extends Component {
    static navigationOptions = {
        header: null
    };

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func.isRequired
        }),
        addFavoriteRequest: PropTypes.func.isRequired,
        favoritesCount: PropTypes.number.isRequired
    };

    state = {
        repoNameInput: ""
    };

    navigationToFavorites = () => {
        this.props.navigation.navigate("Favorites");
    };

    addRepository = () => {
        if (!this.state.repoNameInput.length) {
            return;
        }
        this.props.addFavoriteRequest(this.state.repoNameInput);
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Gitmark</Text>
                    <Text style={styles.description}>
                        Começe adicionando alguns repositórios aos seus
                        favoritos
                    </Text>

                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="usuário/repositório"
                            underlineColorAndroid="transparent"
                            value={this.state.repoNameInput}
                            onChangeText={repoNameInput =>
                                this.setState({ repoNameInput })
                            }
                        />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.addRepository}
                            activeOpacity={0.6}
                        >
                            <Text style={styles.buttonText}>
                                Adicionar aos favoritos
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={this.navigationToFavorites}>
                        <Text style={styles.footerLink}>
                            Meus repositórios ({this.props.favoritesCount})
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => ({
    favoritesCount: state.favorites.length
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(FavoriteActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
