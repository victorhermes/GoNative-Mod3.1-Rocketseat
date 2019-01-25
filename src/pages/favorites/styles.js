import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },

    empty: {
        alignSelf: "center",
        color: colors.white,
        marginTop: metrics.baseMargin * 2,
        fontSize: 16
    }
});

export default styles;
