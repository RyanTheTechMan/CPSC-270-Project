import {View, Text, Pressable, ScrollView, StyleSheet} from "react-native";
import {format} from "date-fns";

function NotificationItem ({ title, description, date, onPress }) {
    return (
        <Pressable onPress={onPress} style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
            <Text>{description}</Text>
            <Text style={{ color: 'grey', fontSize: 12 }}>{date}</Text>
        </Pressable>
    );
}

function PrettyTime(date) {
    const timeDiff = Date.now() - date.getTime();

    const ONE_MINUTE = 60 * 1000;
    const ONE_HOUR = 60 * ONE_MINUTE;
    const ONE_DAY = 24 * ONE_HOUR;
    const ONE_WEEK = 7 * ONE_DAY;
    const ONE_MONTH = 30 * ONE_DAY;
    const ONE_YEAR = 12 * ONE_MONTH;

    if (timeDiff < ONE_MINUTE) return 'now';
    if (timeDiff < ONE_HOUR) return `${Math.floor(timeDiff / ONE_MINUTE)} minute${timeDiff >= 2 * ONE_MINUTE ? 's' : ''} ago`;
    if (timeDiff < ONE_DAY) return `${Math.floor(timeDiff / ONE_HOUR)} hour${timeDiff >= 2 * ONE_HOUR ? 's' : ''} ago`;
    if (timeDiff < ONE_WEEK) return `${Math.floor(timeDiff / ONE_DAY)} day${timeDiff >= 2 * ONE_DAY ? 's' : ''} ago`;
    if (timeDiff < ONE_MONTH) return `${Math.floor(timeDiff / ONE_WEEK)} week${timeDiff >= 2 * ONE_WEEK ? 's' : ''} ago`;
    if (timeDiff < ONE_YEAR) return `${Math.floor(timeDiff / ONE_MONTH)} month${timeDiff >= 2 * ONE_MONTH ? 's' : ''} ago`;

    return `${Math.floor(timeDiff / ONE_YEAR)} year${timeDiff >= 2 * ONE_YEAR ? 's' : ''} ago`;
}


function NotificationsPage({navigation}) {
    const notifications = [
        {
            title: 'Package Delivered',
            description: 'Your package has been delivered to the mailroom.',
            date: new Date()
        },
        {
            title: 'Notification Demo',
            description: 'This is a demo of a notification.',
            date: new Date("2023-04-25 15:15:00")
        },
        {
            title: 'Notification Demo',
            description: 'This is a demo of a notification.',
            date: new Date("2023-04-15 12:15:00")
        },
        {
            title: 'Notification Demo',
            description: 'This is a demo of a notification.',
            date: new Date("2023-01-12 12:15:00")
        }
    ];

    const handleNotificationPress = (id) => {
        console.log(`Notification ${id} clicked.`);
    };

    return (
        <ScrollView style={styles.container}>
            {notifications.map((notification, i) => (
                <NotificationItem
                    key={i}
                    title={notification.title}
                    description={notification.description}
                    date={ PrettyTime(notification.date) }
                    onPress={() => handleNotificationPress(i)}
                />
            ))}
        </ScrollView>
    );
}

export default NotificationsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});