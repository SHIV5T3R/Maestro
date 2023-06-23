import { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { SquaresFour, ListDashes } from 'phosphor-react-native'

import { Text, View } from '../../components/Themed'
import FileView from '../../components/FileView'

export default function TabOneScreen() {
  const [isGridView, setIsGridView] = useState<boolean>(false)

  function toggleGridView() {
    setIsGridView(!isGridView)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Internal storage</Text>
        <TouchableOpacity onPress={toggleGridView} activeOpacity={0.5}>
          {isGridView ? <ListDashes /> : <SquaresFour />}
        </TouchableOpacity>
      </View>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <FileView isGridView={isGridView} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 15
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%'
  }
})
