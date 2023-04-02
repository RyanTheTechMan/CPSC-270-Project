import { StyleSheet, Text, View } from "react-native";

export default function MailPage() {

    return (
        <View style={styles.view}>
            <Text style={styles.test}>Mail Page</Text>
        </View>
    );

}

export const styles = StyleSheet.create({
    test: {
        fontSize: 40,
        width: '100%',
        borderWidth: 2,
        textAlign: 'center',
    },
    view: {
        justifyContent: 'center',
        height: '100%',

    }


});