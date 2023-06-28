import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const RecentActivity: React.FC = () => {
  // Dummy data representing recent activities
  const recentActivities = [
    { timestamp: '2023-06-25 10:30 AM', description: 'Uploaded file1.pdf' },
    { timestamp: '2023-06-24 03:45 PM', description: 'Deleted image.jpg' },
    { timestamp: '2023-06-23 09:15 AM', description: 'Modified document.docx' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Activity</Text>
      {recentActivities.map((activity, index) => (
        <View style={styles.activityItem} key={index}>
          <Text style={styles.timestamp}>{activity.timestamp}</Text>
          <Text style={styles.description}>{activity.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white'
  },
  activityItem: {
    marginBottom: 8,
  },
  timestamp: {
    fontSize: 14,
    color: '#999',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: 'white'
  },
});

export default RecentActivity;
