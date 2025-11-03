import styled, { css } from 'styled-components'

const variantStyles = {
  success: ({ theme }) => css`
    background-color: ${theme.colors.successBg};
    border-color: ${theme.colors.successBorder};
    color: ${theme.colors.successText};
  `,
  error: ({ theme }) => css`
    background-color: ${theme.colors.errorBg};
    border-color: ${theme.colors.errorBorder};
    color: ${theme.colors.errorText};
  `,
  warning: ({ theme }) => css`
    background-color: ${theme.colors.warningBg};
    border-color: ${theme.colors.warningBorder};
    color: ${theme.colors.warningText};
  `,
  info: ({ theme }) => css`
    background-color: ${theme.colors.infoBg};
    border-color: ${theme.colors.infoBorder};
    color: ${theme.colors.infoText};
  `,
}

export const AlertContainer = styled.div`
  padding: 16px;
  border: 1px solid transparent;
  border-radius: 4px;
  margin: 16px 0;

  ${({ $variant = 'info', theme }) => variantStyles[$variant]({ theme })}
`