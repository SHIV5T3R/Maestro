import { useMemo, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Item } from './Item'
import { View } from '../Themed'
import { tmp_generateContent } from '../../utils/tmp-generate-content'

interface FileViewProps {
  isGridView?: boolean
}

export default function FileView({ isGridView }: FileViewProps) {
  const [selectedId, setSelectedId] = useState<string>()

  const numColumns = isGridView ? 5 : 1
  // TODO: replace with real data
  const numContent = 12
  const data = useMemo(() => tmp_generateContent(numContent), [numContent])

  return (
    <View style={[styles.container, { flex: numColumns }]}>
      <FlatList
        key={isGridView ? 'grid' : 'list'}
        data={data}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <Item
            item={item}
            isGridView={isGridView}
            onPress={() => setSelectedId(item.id)}
          />
        )}
        ItemSeparatorComponent={() => {
          if (isGridView) return null

          return (
            <View
              style={styles.separator}
              lightColor="#eee"
              darkColor="rgba(255,255,255,0.1)"
            />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto'
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%'
  }
})
