import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Switch, Dimensions} from 'react-native';

const colors = {
    trackOff: '#767577',
    trackOn: '#81b0ff',
    thumbColorOff: '#d3d3d3',
    thumbColorOn: '#ffffff',
    thumbCritical: '#ff0000',
}

const {width, height} = Dimensions.get('screen');

function SettingsRow ({ title, toggleSwitch, isEnabled, isCritical, disabled }){
    if (isCritical === undefined) isCritical = false;
    if (disabled === undefined) disabled = false;

    return (
        <View style={styles.row}>
            <Text style={styles.rowText}>{title}</Text>
            <Switch
                trackColor={{ false: colors.trackOff, true: colors.trackOn }}
                thumbColor={isCritical ? colors.thumbCritical : (isEnabled ? colors.thumbColorOn : colors.thumbColorOff)}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                disabled={disabled}
            />
        </View>
    );
}

function SettingsPage({ navigation }) {
    const [darkMode, setDarkMode] = useState(false);
    const [campusEventNotifs, setCampusEventNotifs] = useState(false);
    const [campusNewsNotifs, setCampusNewsNotifs] = useState(true);
    const [financialAlerts, setFinancialAlerts] = useState(true);
    const [campusParkingNotifs, setCampusParkingNotifs] = useState(false);
    const [campusOutageNotifs, setCampusOutageNotifs] = useState(true);
    const [campusEmergencyNotifs, setCampusEmergencyNotifs] = useState(true);

    const handleLogout = () => {
        console.log('User logged out');
    };

    const handleChangePassword = () => {
        console.log('Change password');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>General</Text>
            <SettingsRow
                title="Dark Mode"
                toggleSwitch={() => setDarkMode(!darkMode)}
                isEnabled={darkMode}
                disabled={true}
            />

            <Text style={styles.sectionTitle}>Notifications</Text>
            <SettingsRow
                title="Campus Events"
                toggleSwitch={() => setCampusEventNotifs(!campusEventNotifs)}
                isEnabled={campusEventNotifs}
            />
            <SettingsRow
                title="Campus News"
                toggleSwitch={() => setCampusNewsNotifs(!campusNewsNotifs)}
                isEnabled={campusNewsNotifs}
            />
            <SettingsRow
                title="Financial Alerts"
                toggleSwitch={() => setFinancialAlerts(!financialAlerts)}
                isEnabled={financialAlerts}
            />
            <SettingsRow
                title="Campus Parking"
                toggleSwitch={() => setCampusParkingNotifs(!campusParkingNotifs)}
                isEnabled={campusParkingNotifs}
            />
            <SettingsRow
                title="Campus Outages"
                toggleSwitch={() => setCampusOutageNotifs(!campusOutageNotifs)}
                isEnabled={campusOutageNotifs}
            />
            <SettingsRow
                title="Campus Emergency (Recommended)"
                toggleSwitch={() => setCampusEmergencyNotifs(!campusEmergencyNotifs)}
                isEnabled={campusEmergencyNotifs}
                isCritical={true}
            />

            <Text style={styles.sectionTitle}>Account Management</Text>
            {/*Display logged in as profileData.email*/}
            <Pressable onPress={handleChangePassword} style={styles.row}>
                <Text style={styles.rowText}>Change Password</Text>
            </Pressable>

            <View style={styles.logoutButton}>
                <Pressable onPress={handleLogout} style={styles.button}>
                    <Text style={styles.buttonText}>Logout</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    rowText: {
        fontSize: 16,
    },
    button: {
        backgroundColor: '#1e90ff',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    logoutButton: {
        position: 'absolute',
        bottom: '3%',
        width: '30%',
        alignSelf: 'center',

    }
});


export default SettingsPage;