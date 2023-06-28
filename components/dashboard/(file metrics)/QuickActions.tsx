import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const QuickActions: React.FC = () => {
  // Dummy data representing quick actions
  const quickActions = [
    { label: 'Create Folder', icon: 'create-folder-icon' },
    { label: 'Upload File', icon: 'upload-file-icon' },
    { label: 'Search Files', icon: 'search-files-icon' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Actions</Text>
      <View style={styles.quickActionsContainer}>
        {quickActions.map((action, index) => (
          <View style={styles.quickActionItem} key={index}>
            <Text style={styles.quickActionIcon}>{action.icon}</Text>
            <Text style={styles.quickActionLabel}>{action.label}</Text>
          </View>
        ))}
      </View>
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
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionItem: {
    alignItems: 'center',
  },
  quickActionIcon: {
    fontSize: 24,
    marginBottom: 4,
    color: '#999'
  },
  quickActionLabel: {
    fontSize: 14,
    color: '#999'
  },
});

export default QuickActions;
