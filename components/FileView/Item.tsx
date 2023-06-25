import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Folder, File, CaretRight } from 'phosphor-react-native'
import { View } from '../Themed'

export type ItemData = {
  id: string
  title: string
  isDirectory?: boolean
}

type ItemProps = {
  item: ItemData
  onPress: () => void
  isGridView?: boolean
}

export function Item({ item, onPress, isGridView }: ItemProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item} activeOpacity={0.5}>
      <View
        style={[
          styles.iconAndName,
          { flexDirection: isGridView ? 'column' : 'row' }
        ]}
      >
        {item.isDirectory ? (
          <Folder weight="fill" size={isGridView ? 60 : 24} />
        ) : (
          <File weight="fill" size={isGridView ? 60 : 24} color="#A9A9B2" />
        )}
        <Text
          style={{
            fontSize: isGridView ? 12 : 20,
            width: isGridView ? 40 : 200
          }}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item.title}
        </Text>
      </View>
      {item.isDirectory && !isGridView && <CaretRight />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconAndName: {
    gap: 8,
    alignItems: 'center'
  }
})
