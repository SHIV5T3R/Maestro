import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// define expected props for this component
interface StorageSpaceOverviewProps {
  storageUsed: number;
  storageAvailable: number;
}

// a functional component to pass the props through as params
const StorageSpaceOverview: React.FC<StorageSpaceOverviewProps> = ({
  storageUsed,
  storageAvailable,
}) => {
  // calculate the storage percentage
  const calculateStoragePercentage = () => {
    return Math.floor((storageUsed / storageAvailable) * 100);
  };

  return (

    <View style={styles.container}>
      {/* <Text style={styles.title}>Storage Space Overview</Text> */}
      <View style={styles.metricContainer}>
        <Text style={styles.metricValue}>{storageUsed} GB</Text>
        <Text style={styles.metricLabel}>Used</Text>
      </View>
      <View style={styles.metricContainer}>
        <Text style={styles.metricValue}>{storageAvailable} GB</Text>
        <Text style={styles.metricLabel}>Available</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            { width: `${calculateStoragePercentage()}%` },
          ]}
        />
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
    color: '#999',
  },
  metricContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  metricValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999',
  },
  metricLabel: {
    fontSize: 16,
    color: '#999',
  },
  progressBarContainer: {
    height: 15,
    backgroundColor: 'grey',
    borderRadius: 5,
    color: '#999',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#269ECC',
    borderRadius: 3,
  },
});

export default StorageSpaceOverview;
