import { Icon as MuiIcon } from '@mui/material';
import styled from 'styled-components/macro';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Icon = styled(MuiIcon)`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  svg {
    font-size: ${({ theme, fontSize }) => fontSize || theme.size.icon.size};
    color: ${({ theme, color }) => color || theme.mode.icon.iconColor};
  }
`;
