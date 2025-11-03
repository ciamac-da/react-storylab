import styled, { css }  from 'styled-components';


const typeStyles = {
  success: css`
    background-color: #d4edda;
    border-color: #c3e6cb;
    color: #155724;
  `,
  error: css`
    background-color: #f8d7da;
    border-color: #f5c6cb;
    color: #721c24;
  `,
  warning: css`
    background-color: #fff3cd;
    border-color: #ffeeba;
    color: #856404;
  `,
  info: css`
    background-color: #d1ecf1;
    border-color: #bee5eb;
    color: #0c5460;
  `,
};

export const AlertContainer = styled.div`
  padding: 16px;
  border: 1px solid transparent;
  border-radius: 4px;
  margin: 16px 0;
  ${(props) => typeStyles[props.type || 'info']}
`;