import { MenuOption as Option } from 'react-native-popup-menu'
import { IconProps } from 'phosphor-react-native'
import { Text } from '../../Themed'

interface MenuOptionProps {
  label?: string
  Icon: React.FC<IconProps>
  onSelect: () => void
}

export function MenuOption({ onSelect, Icon, label }: MenuOptionProps) {
  return (
    <Option
      onSelect={onSelect}
      style={{
        alignItems: 'center'
      }}
    >
      <Icon size={20} />
      <Text
        style={{
          fontSize: 12
        }}
      >
        {label}
      </Text>
    </Option>
  )
}
