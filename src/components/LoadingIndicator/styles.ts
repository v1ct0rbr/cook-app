import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.green_100};
`

export const Indicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.green_600,
  size: 50,
}))``

// style={styles.container}
// color={theme.colors.green_600}
