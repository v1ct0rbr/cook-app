import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { IconProps } from '.'

export const Icon = styled(MaterialIcons).attrs<IconProps>(
  ({ name, size, color }) => ({
    name,
    color,
    size,
  }),
) <IconProps>``
