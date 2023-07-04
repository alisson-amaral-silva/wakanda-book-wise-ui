import { ActionContainer, ActionCaretRight } from './styles'
import { ComponentProps, ElementType } from 'react'

export interface ActionInputProps
  extends ComponentProps<typeof ActionContainer> {
  as?: ElementType
  label: string
  variant: 'primary' | 'secondary'
  size: 'sm' | 'md'
}

export function Action({ as, size, label, variant }: ActionInputProps) {
  return (
    <ActionContainer size={size} variant={variant} as={as}>
      <ActionCaretRight size={20} />
      <label>{label}</label>
      <ActionCaretRight size={20} />
    </ActionContainer>
  )
}

Action.displayName = 'Action'
