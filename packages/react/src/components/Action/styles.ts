import { styled } from '../../styles'
import { Text } from '../Text'
import { CaretRight } from 'phosphor-react'

export const ActionContainer = styled('button', {
  all: 'unset',
  padding: '$2 $1',
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  fontWeight: '$bold',
  borderRadius: '$xs',
  justifyContent: 'space-between',

  cursor: 'pointer',

  fontFamily: '$default',

  label: {
    cursor: 'pointer',
  },

  variants: {
    variant: {
      primary: {
        color: '$gray200',
        '&:hover': {
          background: 'rgba(230, 232, 242, 0.04)',
        },
      },
      secondary: {
        color: '$purple100',
        '&:hover': {
          background: 'rgba(131, 129, 217, 0.06)',
        },
      },
    },
    size: {
      sm: {
        width: '$25',
        height: '$7',
        gap: '$2',
        fontSize: '$sm',
      },
      md: {
        width: '$30',
        height: '$8',
        gap: '$3',
        fontSize: '$md',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export const ActionText = styled(Text, {
  variants: {
    variant: {
      primary: {
        color: '$gray200',
      },
      secondary: {
        color: '$purple100',
      },
    },
  },
})

export const ActionCaretRight = styled(CaretRight, {
  variants: {
    variant: {
      primary: {
        color: '$gray200',
      },
      secondary: {
        color: '$purple100',
      },
    },
  },
})
