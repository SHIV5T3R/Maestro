import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FileStatistics: React.FC = () => {
  // Dummy data representing file statistics
  const totalFiles = 120;
  const biggestSize = '1.5 GB';
  const averageSize = '12.5 MB';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>File Statistics</Text>
      <View style={styles.statisticContainer}>
        <Text style={styles.statisticLabel}>Total Files:</Text>
        <Text style={styles.statisticValue}>{totalFiles}</Text>
      </View>
      <View style={styles.statisticContainer}>
        <Text style={styles.statisticLabel}>Biggest Size:</Text>
        <Text style={styles.statisticValue}>{biggestSize}</Text>
      </View>
      <View style={styles.statisticContainer}>
        <Text style={styles.statisticLabel}>Average Size:</Text>
        <Text style={styles.statisticValue}>{averageSize}</Text>
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
  },
  statisticContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statisticLabel: {
    fontSize: 14,
    marginRight: 8,
    color: 'white',
  },
  statisticValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FileStatistics;
