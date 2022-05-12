import { CardStyles } from '@my-scope/display.card';
import styled from 'styled-components/macro';

export const CardList = styled.div`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1;
  height: fit-content;
`;

export const CardItem = styled.div`
  max-width: 256px;
  min-width: 256px;
  display: flex;
  margin: calc(${({ theme }) => theme.layout.margin.sm} / 2);
  ${CardStyles} {
    .ant-card-head {
      display: block;
      border-bottom: none;
      padding: 0px ${({ theme }) => theme.layout.padding.sm};
    }
  }
`;

export const CardTitle = styled.span`
  flex: 0 0 100%;
  padding-left: calc(${({ theme }) => theme.layout.padding.sm} / 2);
`;
