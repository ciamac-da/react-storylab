// .storybook/preview.js (or .storybook/preview.jsx)
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/theme'
import '../src/index.css'

const withTheme = (Story) =>
  React.createElement(
    ThemeProvider,
    { theme },
    React.createElement(Story, null)
  )

const preview = {
  decorators: [withTheme],
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: 'todo' },
    backgrounds: {
      default: 'white',                // <-- make canvas white
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'light', value: '#f8fafc' },
        { name: 'gray',  value: '#f0f0f0' },
        { name: 'dark',  value: '#1a1a1a' },
      ],
    },
  },
}

export default preview
