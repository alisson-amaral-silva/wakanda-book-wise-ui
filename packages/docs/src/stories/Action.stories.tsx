import type { Meta, StoryObj } from '@storybook/react'
import { Action, ActionInputProps } from '@wakanda-book-wise-ui/react'
import React from 'react'

export default {
  title: 'Typography/Action',
  component: Action,
  args: {
    variant: 'primary',
    label: 'Link',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    onClick: { action: 'clicked' },
    label: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<ActionInputProps>

export const Primary: StoryObj<ActionInputProps> = {}

export const WithIcon: StoryObj<ActionInputProps> = {
  args: {
    children: <label>Próximo passo</label>,
  },
}
