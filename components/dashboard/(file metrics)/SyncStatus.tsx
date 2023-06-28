import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SyncStatus: React.FC = () => {
  // Dummy data representing sync status
  const isSyncing = false;
  const lastSyncTimestamp = '2023-06-27 11:45 AM';

  return (
    <View style={styles.container}>
      <View style={styles.syncStatusContainer}>
        {isSyncing ? (
          <Text style={styles.syncingText}>Syncing...</Text>
        ) : (
          <Text style={styles.syncedText}>
            Last Sync: {lastSyncTimestamp}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    width: '100%',
  },
  syncStatusContainer: {
    alignItems: 'center',
  },
  syncingText: {
    fontSize: 14,
    color: '#999',
  },
  syncedText: {
    fontSize: 14,
    color: '#999'
  },
});

export default SyncStatus;
