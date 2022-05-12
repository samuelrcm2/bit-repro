import AntTitle, {
  TitleProps as AntdTitleProps,
} from 'antd/lib/typography/Title';
import styled from 'styled-components/macro';

import { TypographyBaseType, TitleProps } from './title';

export function chooseTitleColor(type: TypographyBaseType, mode: any) {
  const { colors } = mode.title;

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
  const { fontSize } = themeSize.title;
  return fontSize[size];
}

export const StyledTitle = styled<React.FC<AntdTitleProps>>(AntTitle)`
  &&&&&& {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    white-space: ${({ ellipsis }) => (ellipsis ? 'none' : 'pre-wrap')};
  }
`;

export const StyledTitleContainer = styled.div<TitleProps>`
  &&& .ant-typography {
    color: ${({ type, theme }) => chooseTitleColor(type, theme.mode)};
    font-size: ${({ size, theme }) =>
      chooseSize(size || 'code-01', theme.size)};
  }
`;
