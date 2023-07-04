import { StyleSheet, TouchableOpacity } from 'react-native'
import {
  TextT,
  CopySimple,
  ArrowsOutCardinal,
  FileZip,
  TrashSimple,
  Star
} from 'phosphor-react-native'
import {
  Menu,
  MenuOptions,
  MenuTrigger,
  renderers
} from 'react-native-popup-menu'

import { MenuOption } from './MenuOption'
import { ItemData } from '../Item'

interface ContextMenuProps {
  item: ItemData
  children: React.ReactNode
  onItemPress?: () => void
  onClose?: () => void
}

export function ContextMenu({
  children,
  item,
  onItemPress,
  onClose
}: ContextMenuProps) {
  const options = [
    {
      label: 'Favorite',
      Icon: Star,
      onSelect: () => alert(`Favorite`)
    },
    {
      label: 'Compress',
      Icon: FileZip,
      onSelect: () => alert(`Compress`)
    },
    {
      label: 'Rename',
      Icon: TextT,
      onSelect: () => alert(`Rename`)
    },
    {
      label: 'Copy',
      Icon: CopySimple,
      onSelect: () => alert(`Copy`)
    },
    {
      label: 'Move',
      Icon: ArrowsOutCardinal,
      onSelect: () => alert(`Move`)
    },
    {
      label: 'Delete',
      Icon: TrashSimple,
      onSelect: () => alert(`Delete`)
    }
  ]

  return (
    <Menu renderer={renderers.SlideInMenu} onClose={onClose}>
      <MenuTrigger
        triggerOnLongPress
        onPress={onItemPress}
        style={styles.item}
        customStyles={{
          TriggerTouchableComponent: TouchableOpacity
        }}
      >
        {children}
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: styles.optionsContainer,
          optionsWrapper: styles.optionsWrapper
        }}
      >
        {/* To implement functionality, the appropriate function should be passed
        to the onSelect prop of the MenuOption component. */}
        {options.map(option => (
          <MenuOption
            key={option.label}
            label={option.label}
            Icon={option.Icon}
            onSelect={option.onSelect}
          />
        ))}
      </MenuOptions>
    </Menu>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  optionsContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee'
  },
  optionsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
