import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const StorageUsageByFileType: React.FC = () => {
  // Dummy data representing file type usage
  const fileTypeData = [
    { fileType: 'Documents', usage: 40 },
    { fileType: 'Images', usage: 25 },
    { fileType: 'Videos', usage: 82 },
    { fileType: 'Audio', usage: 10 },
    { fileType: 'Other', usage: 5 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Storage Usage by File Type</Text>
      {fileTypeData.map((data, index) => (
        <View style={styles.fileTypeContainer} key={index}>
          <Text style={styles.fileType}>{data.fileType}</Text>
          <View style={styles.progressBarContainer}>
            <View
              style={[styles.progressBar, { width: `${data.usage}%` }]}
            />
          </View>
          <Text style={styles.usage}>{data.usage}%</Text>
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
  fileTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  fileType: {
    flex: 1,
    fontSize: 14,
    color: '#999'
  },
  progressBarContainer: {
    flex: 3,
    height: 8,
    backgroundColor: 'gray',
    borderRadius: 4,
    marginLeft: 8,
    marginRight: 16,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#269ECC',
    borderRadius: 4,
  },
  usage: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#269ECC'
  },
});

export default StorageUsageByFileType;
