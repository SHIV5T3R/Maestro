import { StyleSheet } from 'react-native'
import { Folder, File, CaretRight, CheckCircle } from 'phosphor-react-native'

import { View, Text } from '../Themed'

export interface ItemData {
  id: string
  title: string
  isDirectory?: boolean
}

interface ItemProps {
  item: ItemData
  isGridView?: boolean
  selectedItemId: string | null
}

export function Item({ item, isGridView, selectedItemId }: ItemProps) {
  const isSelected = selectedItemId && selectedItemId === item.id

  return (
    <>
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
      {!isSelected && item.isDirectory && !isGridView ? (
        <CaretRight />
      ) : (
        isSelected && (
          <CheckCircle
            weight="fill"
            color="#269ECC"
            style={
              isGridView && {
                position: 'absolute',
                right: 0,
                top: 10
              }
            }
          />
        )
      )}
    </>
  )
}

const styles = StyleSheet.create({
  iconAndName: {
    gap: 8,
    alignItems: 'center'
  }
})
