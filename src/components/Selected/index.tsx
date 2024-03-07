// import { CustomIcon } from '@/components/CustomIcon'
import { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import { useTheme } from 'styled-components/native'
import CustomIcon from '../CustomIcon'
import { ButtonSearch, Container, Header, Label } from './styles'

type SelectedProps = {
  quantity: number
  onClear: () => void
  onSearch: () => void
}

export function Selected({ quantity, onClear, onSearch }: SelectedProps) {
  const theme = useTheme()
  return (
    <Container exiting={SlideOutDown} entering={SlideInDown.duration(500)}>
      <Header>
        <Label>{quantity} ingredientes selecionados</Label>

        <CustomIcon
          name="close"
          size={24}
          onPress={onClear}
          color={theme.colors.gray_400}
        ></CustomIcon>
      </Header>
      <ButtonSearch title="Encontrar" onPress={onSearch} />
    </Container>
  )
}
