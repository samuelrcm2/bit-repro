import AntParagraph, {
  ParagraphProps as AntdParagraphProps,
} from 'antd/lib/typography/Paragraph';
import styled from 'styled-components/macro';

import { TypographyBaseType, ParagraphProps } from './paragraph';

export function chooseTitleColor(type: TypographyBaseType, mode: any) {
  const { colors } = mode.paragraph;

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
  const { fontSize } = themeSize.paragraph;
  return fontSize[size];
}

export const StyledParagraph = styled<React.FC<AntdParagraphProps>>(
  AntParagraph
)`
  &&&&&& {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    white-space: ${({ ellipsis }) => (ellipsis ? 'none' : 'pre-wrap')};
  }
`;

export const StyledParagraphContainer = styled.div<ParagraphProps>`
  &&& .ant-typography {
    color: ${({ type, theme }) => chooseTitleColor(type, theme.mode)};
    font-size: ${({ size, theme }) =>
      chooseSize(size || 'code-01', theme.size)};
  }
`;
