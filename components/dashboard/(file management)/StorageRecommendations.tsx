import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const StorageRecommendations: React.FC = () => {
  // Dummy data representing storage recommendations
  const recommendations = [
    'Delete large unused files',
    'Clear temporary files',
    'Move files to cloud storage',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Storage Recommendations</Text>
      {recommendations.map((recommendation, index) => (
        <Text style={styles.recommendationItem} key={index}>
          {recommendation}
        </Text>
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
  },
  recommendationItem: {
    fontSize: 14,
    marginBottom: 4,
  },
});

export default StorageRecommendations;
