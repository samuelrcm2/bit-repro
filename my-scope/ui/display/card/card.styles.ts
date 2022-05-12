import { IconStyles } from '@my-scope/general.icon';
import AntCard from 'antd/lib/card';
import styled from 'styled-components/macro';

export const Card = styled(AntCard)`
  background-color: ${({ theme }) => theme.mode.card.cardBgColor};
  border: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 0px;
  max-width: 256px;
  .ant-card-head {
    display: none;
  }
  .ant-card-body {
    display: flex;
    flex: 1 1;
    padding: ${({ theme }) => theme.layout.card.padding};
  }
  .ant-card-actions {
    background: transparent;
    border-top: 0px;
    li {
      float: none;
      margin: 0px;
      padding: ${({ theme }) => theme.layout.card.padding};
      padding-top: 0px;
      color: #161616;
      text-align: unset;
    }
  }
  &.ant-card-bordered {
    border: 1px solid ${({ theme }) => theme.mode.card.cardBorderColor};
  }
  &.ant-card-loading {
    .ant-card-loading-content {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }
  &.ant-card-hoverable {
    &:hover {
      border-color: transparent;
      box-shadow: 0 1px 1px -1px rgb(0 0 0 / 10%), 0 1px 3px 0 rgb(0 0 0 / 10%),
        0 2px 6px 2px rgb(0 0 0 / 5%);
    }
  }
`;

export const CardMeta = styled(AntCard.Meta)`
  display: flex;
  flex-direction: column;
  margin: -4px 0;
  .ant-card-meta-avatar {
    padding-right: 0;
    margin-bottom: calc(${({ theme }) => theme.layout.card.padding} / 2);
    .anticon {
      font-size: ${({ theme }) => theme.layout.card.iconSize};
      color: ${({ theme }) => theme.mode.colors.text};
    }
    ${IconStyles} {
      svg {
        font-size: ${({ theme }) => theme.layout.card.iconSize};
        margin-left: 0px;
      }
    }
  }
  .ant-card-meta-detail {
    .ant-card-meta-title {
      font-weight: 500;
      font-size: ${({ theme }) => theme.layout.card.titleSize};
      white-space: normal;
      line-height: normal;
      color: ${({ theme }) => theme.mode.card.titleColor};
      margin-bottom: calc(${({ theme }) => theme.layout.card.padding} / 2);
    }
    .ant-card-meta-description {
      font-size: ${({ theme }) => theme.layout.card.descriptionSize};
      font-weight: 400;
      line-height: normal;
      color: ${({ theme }) => theme.mode.card.descriptionColor};
    }
  }
`;
