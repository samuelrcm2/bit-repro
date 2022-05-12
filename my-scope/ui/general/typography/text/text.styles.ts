import AntText, { TextProps as AntdTextProps } from 'antd/lib/typography/Text';
import styled from 'styled-components/macro';

import { TypographyBaseType, TextProps } from './text';

export function chooseTitleColor(type: TypographyBaseType, mode: any) {
  const { colors } = mode.text;

  switch (type) {
    case 'regular':
      return colors.text;
    case 'danger':
      return colors.error;
    case 'warning':
      return colors.warning;
    case 'success':
      return colors.success;
    case 'secondary':
      return colors.secondary;
    default:
      return colors.primary;
  }
}

export function chooseSize(size: string, themeSize: any) {
  const { fontSize } = themeSize.text;
  return fontSize[size];
}

export const StyledText = styled<React.FC<AntdTextProps>>(AntText)`
  &&&&&& {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    white-space: ${({ ellipsis }) => (ellipsis ? 'none' : 'pre-wrap')};
  }
`;

export const StyledTextContainer = styled.div<TextProps>`
  &&& .ant-typography {
    color: ${({ type, theme }) => chooseTitleColor(type, theme.mode)};
    font-size: ${({ size, theme }) =>
      chooseSize(size || 'code-01', theme.size)};
  }
`;
