import { StyleSheet } from 'react-native';

import StorageSpaceOverview from '../../components/dashboard/(file metrics)/StorageSpaceOverview';
import StorageUsageByFileType from '../../components/dashboard/(file metrics)/StorageUsageByFileType';
import RecentActivity from '../../components/dashboard/(file metrics)/RecentActvity';
import QuickActions from '../../components/dashboard/(file metrics)/QuickActions';
import SyncStatus from '../../components/dashboard/(file metrics)/SyncStatus';
import FileStatistics from '../../components/dashboard/(file management)/FileStatistics';
import { Text, View } from '../../components/Themed';
import { BaseText } from '../../components/StyledText';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <BaseText style={styles.title}>DASHBOARD</BaseText>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.info}>
      <FileStatistics />
      </View>

      {/* Metric components below */}
      <StorageSpaceOverview storageUsed={500} storageAvailable={1000} />    
      <View style={styles.section}>
          <BaseText style={styles.sectionTitle}>File Metrics</BaseText>              

          <View style={styles.metricContainer}>
            <StorageUsageByFileType />
            <View style={styles.metricItem}>
            <RecentActivity />
            </View>
            <View style={styles.metricItem}>
              <SyncStatus />
            </View>
          </View>      

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  separator: {
    marginVertical: 16,
    height: 1,
    width: '50%',
    backgroundColor: '#eee',
  },
  info: {
    alignItems: 'center',
    marginBottom: 8,
  },
  section: {
    marginBottom: 24,
    width: '100%',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  metricItem: {
    paddingTop: 20,
  },
  metricContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});