import { Container, StepDescription, StepTitle } from './styles'

type Props = {
  step: number
  description: string
}

export function Step({ step, description }: Props) {
  return (
    <Container>
      <StepTitle>{step}</StepTitle>
      <StepDescription>{description}</StepDescription>
    </Container>
  )
}
