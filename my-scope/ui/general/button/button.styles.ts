import { IconStyles } from '@my-scope/general.icon';
import AntButton, { ButtonProps } from 'antd/lib/button';
import styled, { css } from 'styled-components';

export const primaryButton = css`
  color: ${({ theme }) => theme.mode.button.primaryTextColor};
  background: ${({ theme }) => theme.mode.button.primaryBgColor};
  border-color: ${({ theme }) => theme.mode.button.primaryBorderColor};
  text-shadow: none;
  box-shadow: none;
  svg {
    color: ${({ theme }) => theme.mode.button.primaryTextColor};
  }
  &:hover {
    background-color: ${({ theme }) => theme.mode.button.primaryBgColorHover};
    border-color: ${({ theme }) => theme.mode.button.primaryBorderColorHover};
  }
  &:focus {
    background-color: ${({ theme }) => theme.mode.button.primaryBgColorFocus};
    border-color: ${({ theme }) => theme.mode.button.primaryBorderColorFocus};
  }
  &:active {
    background-color: ${({ theme }) => theme.mode.button.primaryBgColorActive};
    border-color: ${({ theme }) => theme.mode.button.primaryBorderColorActive};
  }
  &[disabled] {
    color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
    background-color: ${({ theme }) => theme.mode.button.buttonBgColorDisabled};
    border-color: ${({ theme }) => theme.mode.button.buttonBgColorDisabled};
    svg {
      color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
    }
    &.ant-btn:hover,
    &.ant-btn:focus,
    &.ant-btn:active {
      color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
      background-color: ${({ theme }) =>
        theme.mode.button.buttonBgColorDisabled};
      border-color: ${({ theme }) => theme.mode.button.buttonBgColorDisabled};
    }
  }
  &.ant-btn-loading {
    .ant-btn-loading-icon {
      svg {
        font-size: 16px;
        color: ${({ theme }) => theme.mode.colors.white};
        animation: loadingCircle 1s linear infinite;
        margin-right: 8px;
      }
    }
  }
`;

const secondaryButton = css`
  color: ${({ theme }) => theme.mode.button.secondaryTextColor};
  border-color: ${({ theme }) => theme.mode.button.secondaryBorderColor};
  background: ${({ theme }) => theme.mode.button.secondaryBgColor};
  svg {
    color: ${({ theme }) => theme.mode.button.secondaryTextColor};
  }
  &:hover {
    color: ${({ theme }) => theme.mode.button.secondaryTextColor};
    background-color: ${({ theme }) => theme.mode.button.secondaryBgColorHover};
    border-color: ${({ theme }) => theme.mode.button.secondaryBorderColorHover};
  }
  &:focus {
    color: ${({ theme }) => theme.mode.button.secondaryTextColor};
    background-color: ${({ theme }) => theme.mode.button.secondaryBgColorFocus};
    border-color: ${({ theme }) => theme.mode.button.secondaryBorderColorFocus};
  }
  &:active {
    color: ${({ theme }) => theme.mode.button.secondaryTextColor};
    background-color: ${({ theme }) =>
      theme.mode.button.secondaryBgColorActive};
    border-color: ${({ theme }) =>
      theme.mode.button.secondaryBorderColorActive};
  }
  &[disabled] {
    color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
    background-color: ${({ theme }) => theme.mode.button.buttonBgColorDisabled};
    border-color: ${({ theme }) => theme.mode.button.buttonBorderColorDisabled};
    svg {
      color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
    }
    &:hover,
    &:focus,
    &:active {
      color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
      background-color: ${({ theme }) =>
        theme.mode.button.buttonBgColorDisabled};
      border-color: ${({ theme }) =>
        theme.mode.button.buttonBorderColorDisabled};
    }
  }
  &.ant-btn-loading {
    .ant-btn-loading-icon {
      svg {
        font-size: 16px;
        color: ${({ theme }) => theme.mode.button.secondaryTextColor};
        animation: loadingCircle 1s linear infinite;
        margin-right: ${({ theme }) => theme.layout.margin.sm};
      }
    }
  }
`;

export const ghostButton = css`
  background-color: ${({ theme }) => theme.mode.button.tertiaryBgColor};
  svg {
    color: ${({ theme }) => theme.mode.button.secondaryTextColor};
  }
  &:hover {
    svg {
      color: ${({ theme }) => theme.mode.button.tertiaryTextColorHover};
    }
    color: ${({ theme }) => theme.mode.button.tertiaryTextColorHover};
    background-color: ${({ theme }) => theme.mode.button.tertiaryBgColorHover};
    border-color: ${({ theme }) => theme.mode.button.tertiaryBorderColorHover};
  }
  &:focus {
    svg {
      color: ${({ theme }) => theme.mode.button.tertiaryTextColorFocus};
    }
    color: ${({ theme }) => theme.mode.button.tertiaryTextColorFocus};
    background-color: ${({ theme }) => theme.mode.button.tertiaryBgColorFocus};
    border-color: ${({ theme }) => theme.mode.button.tertiaryBorderColorFocus};
  }
  &:active {
    svg {
      color: ${({ theme }) => theme.mode.button.tertiaryTextColorActive};
    }
    color: ${({ theme }) => theme.mode.button.tertiaryTextColorActive};
    background-color: ${({ theme }) => theme.mode.button.tertiaryBgColorActive};
    border-color: ${({ theme }) => theme.mode.button.tertiaryBorderColorActive};
  }
  &.ant-btn-primary {
    color: ${({ theme }) => theme.mode.button.primaryBorderColor};
    background: ${({ theme }) => theme.mode.button.tertiaryBgColor};
    border-color: ${({ theme }) => theme.mode.button.primaryBorderColor};
    text-shadow: none;
    box-shadow: none;
    &:hover {
      background-color: ${({ theme }) => theme.mode.button.primaryBgColorHover};
      border-color: ${({ theme }) => theme.mode.button.primaryBorderColorHover};
    }
    &:focus {
      background-color: ${({ theme }) => theme.mode.button.primaryBgColorFocus};
      border-color: ${({ theme }) => theme.mode.button.primaryBorderColorFocus};
    }
    &:active {
      background-color: ${({ theme }) =>
        theme.mode.button.primaryBgColorActive};
      border-color: ${({ theme }) =>
        theme.mode.button.primaryBorderColorActive};
    }
    &[disabled] {
      color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
      background-color: ${({ theme }) =>
        theme.mode.button.buttonBgColorDisabled};
      border-color: ${({ theme }) => theme.mode.button.buttonBgColorDisabled};
      &.ant-btn:hover,
      &.ant-btn:focus,
      &.ant-btn:active {
        color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
        background-color: ${({ theme }) =>
          theme.mode.button.buttonBgColorDisabled};
        border-color: ${({ theme }) => theme.mode.button.buttonBgColorDisabled};
      }
    }
    &.ant-btn-loading {
      .ant-btn-loading-icon {
        svg {
          font-size: 16px;
          color: ${({ theme }) => theme.mode.button.primaryBorderColor};
          animation: loadingCircle 1s linear infinite;
          margin-right: ${({ theme }) => theme.layout.margin.sm};
        }
      }
    }
  }
  &.ant-btn-dangerous {
    color: ${({ theme }) => theme.mode.button.dangerTextGhostColor};
    background: ${({ theme }) => theme.mode.button.tertiaryBgColor};
    border-color: ${({ theme }) => theme.mode.button.dangerBorderColor};
    svg {
      color: ${({ theme }) => theme.mode.button.dangerTextGhostColor};
    }
    &:hover {
      color: ${({ theme }) => theme.mode.button.dangerTextColor};
      background-color: ${({ theme }) => theme.mode.button.dangerBgColorHover};
      border-color: ${({ theme }) => theme.mode.button.dangerBorderColorHover};
      svg {
        color: ${({ theme }) => theme.mode.button.dangerTextColor};
      }
    }
    &:focus {
      color: ${({ theme }) => theme.mode.button.dangerTextColor};
      background: ${({ theme }) => theme.mode.button.dangerBgColorFocus};
      border-color: ${({ theme }) => theme.mode.button.dangerBorderColorFocus};
      svg {
        color: ${({ theme }) => theme.mode.button.dangerTextColor};
      }
    }
    &:active {
      color: ${({ theme }) => theme.mode.button.dangerTextColor};
      background-color: ${({ theme }) => theme.mode.button.dangerBgColorActive};
      border-color: ${({ theme }) => theme.mode.button.dangerBorderColorActive};
      svg {
        color: ${({ theme }) => theme.mode.button.dangerTextColor};
      }
    }
    &.ant-btn-loading {
      .ant-btn-loading-icon {
        svg {
          font-size: 16px;
          color: ${({ theme }) => theme.mode.button.dangerTextGhostColor};
          animation: loadingCircle 1s linear infinite;
          margin-right: ${({ theme }) => theme.layout.margin.sm};
        }
      }
    }
  }
  &[disabled] {
    color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
    background-color: ${({ theme }) => theme.mode.button.buttonBgColorDisabled};
    border-color: ${({ theme }) => theme.mode.button.buttonBorderColorDisabled};
    svg {
      color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
    }
    &:hover,
    &:focus,
    &:active {
      color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
      background-color: ${({ theme }) =>
        theme.mode.button.buttonBgColorDisabled};
      border-color: ${({ theme }) =>
        theme.mode.button.buttonBorderColorDisabled};
    }
  }
`;

const linkButton = css`
  color: ${({ theme }) => theme.mode.button.linkTextColor};
  background: ${({ theme }) => theme.mode.button.linkBgColor};
  border-color: ${({ theme }) => theme.mode.button.linkBorderColor};
  box-shadow: none;
  font-weight: 400;
  svg {
    color: ${({ theme }) => theme.mode.button.iconColor};
  }
  &:hover {
    color: ${({ theme }) => theme.mode.button.linkTextColorHover};
    background-color: ${({ theme }) => theme.mode.button.linkBgColorHover};
    border-color: ${({ theme }) => theme.mode.button.linkBorderColorHover};
  }
  &:focus {
    color: ${({ theme }) => theme.mode.button.linkTextColorFocus};
    background-color: ${({ theme }) => theme.mode.button.linkBgColorFocus};
    border-color: ${({ theme }) => theme.mode.button.linkBorderColorFocus};
  }
  &:active {
    color: ${({ theme }) => theme.mode.button.linkTextColorActive};
    background-color: ${({ theme }) => theme.mode.button.linkBgColorActive};
    border-color: ${({ theme }) => theme.mode.button.linkBorderColorFocus};
  }
  &.ant-btn-loading {
    .ant-btn-loading-icon {
      svg {
        font-size: 16px;
        color: ${({ theme }) => theme.mode.button.linkTextColor};
        animation: loadingCircle 1s linear infinite;
        margin-right: ${({ theme }) => theme.layout.margin.sm};
      }
    }
  }
`;

const dangerButton = css`
  color: ${({ theme }) => theme.mode.button.dangerTextColor};
  background: ${({ theme }) => theme.mode.button.dangerBgColor};
  border-color: ${({ theme }) => theme.mode.button.dangerBorderColor};
  svg {
    color: ${({ theme }) => theme.mode.button.dangerTextColor};
  }
  &:hover {
    background-color: ${({ theme }) => theme.mode.button.dangerBgColorHover};
    border-color: ${({ theme }) => theme.mode.button.dangerBorderColorHover};
  }
  &:focus {
    background: ${({ theme }) => theme.mode.button.dangerBgColorFocus};
    border-color: ${({ theme }) => theme.mode.button.dangerBorderColorFocus};
  }
  &:active {
    background-color: ${({ theme }) => theme.mode.button.dangerBgColorActive};
    border-color: ${({ theme }) => theme.mode.button.dangerBorderColorActive};
  }
  &.ant-btn-loading {
    .ant-btn-loading-icon {
      svg {
        font-size: 16px;
        color: ${({ theme }) => theme.mode.button.dangerTextColor};
        animation: loadingCircle 1s linear infinite;
        margin-right: ${({ theme }) => theme.layout.margin.sm};
      }
    }
  }
  &[disabled] {
    color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
    background-color: ${({ theme }) => theme.mode.button.buttonBgColorDisabled};
    border-color: ${({ theme }) => theme.mode.button.buttonBorderColorDisabled};
    svg {
      color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
    }
    &:hover,
    &:focus,
    &:active {
      color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
      background-color: ${({ theme }) =>
        theme.mode.button.buttonBgColorDisabled};
      border-color: ${({ theme }) =>
        theme.mode.button.buttonBorderColorDisabled};
    }
  }
`;

const iconButton = css`
  padding: 0px;
  width: ${({ theme }) => theme.layout.button.iconButtonWidth};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: ${({ theme }) => theme.layout.button.iconSize};
    color: #ffffff;
    margin: 0px;
  }
`;

const textButton = css`
  background-color: transparent;
  border-color: transparent;
  color: ${({ theme }) => theme.mode.button.textButtonColor};
  svg {
    color: ${({ theme }) => theme.mode.button.textButtonColor};
  }
  &:hover {
    color: ${({ theme }) => theme.mode.button.primaryTextColor};
    background-color: ${({ theme }) => theme.mode.button.primaryBgColorHover};
    border-color: ${({ theme }) => theme.mode.button.primaryBorderColorHover};
  }
  &:focus {
    color: ${({ theme }) => theme.mode.button.primaryTextColor};
    background-color: ${({ theme }) => theme.mode.button.primaryBgColorFocus};
    border-color: ${({ theme }) => theme.mode.button.primaryBorderColorFocus};
  }
  &:active {
    color: ${({ theme }) => theme.mode.button.primaryTextColor};
    background-color: ${({ theme }) => theme.mode.button.primaryBgColorActive};
    border-color: ${({ theme }) => theme.mode.button.primaryBorderColorActive};
  }
  &[disabled] {
    color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
    background-color: ${({ theme }) => theme.mode.button.buttonBgColorDisabled};
    border-color: ${({ theme }) => theme.mode.button.buttonBgColorDisabled};
    svg {
      color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
    }
    &.ant-btn:hover,
    &.ant-btn:focus,
    &.ant-btn:active {
      color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
      background-color: ${({ theme }) =>
        theme.mode.button.buttonBgColorDisabled};
      border-color: ${({ theme }) => theme.mode.button.buttonBgColorDisabled};
    }
  }
`;

export const dashedButton = css`
  color: ${({ theme }) => theme.mode.button.linkTextColor};
  background: transparent;
  border-color: ${({ theme }) => theme.mode.button.primaryBorderColor};
  border-style: dashed;
  text-shadow: none;
  box-shadow: none;
  svg {
    color: ${({ theme }) => theme.mode.button.linkTextColor};
  }
  &:hover {
    color: ${({ theme }) => theme.mode.button.primaryTextColor};
    background-color: ${({ theme }) => theme.mode.button.primaryBgColorHover};
    border-color: ${({ theme }) => theme.mode.button.primaryBorderColorHover};
  }
  &:focus {
    color: ${({ theme }) => theme.mode.button.primaryTextColor};
    background-color: ${({ theme }) => theme.mode.button.primaryBgColorFocus};
    border-color: ${({ theme }) => theme.mode.button.primaryBorderColorFocus};
  }
  &:active {
    color: ${({ theme }) => theme.mode.button.primaryTextColor};
    background-color: ${({ theme }) => theme.mode.button.primaryBgColorActive};
    border-color: ${({ theme }) => theme.mode.button.primaryBorderColorActive};
  }
  &.ant-btn-loading {
    .ant-btn-loading-icon {
      svg {
        font-size: 16px;
        color: ${({ theme }) => theme.mode.button.linkTextColor};
        animation: loadingCircle 1s linear infinite;
        margin-right: 8px;
      }
    }
  }
  &[disabled] {
    color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
    background-color: ${({ theme }) => theme.mode.button.buttonBgColorDisabled};
    border-color: ${({ theme }) => theme.mode.button.buttonBgColorDisabled};
    svg {
      color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
    }
    &.ant-btn:hover,
    &.ant-btn:focus,
    &.ant-btn:active {
      color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
      background-color: ${({ theme }) =>
        theme.mode.button.buttonBgColorDisabled};
      border-color: ${({ theme }) => theme.mode.button.buttonBgColorDisabled};
    }
  }
`;

export const defaultButton = css`
  height: ${({ theme }) => theme.layout.button.buttonHeight};
  padding: 0px ${({ theme }) => theme.layout.padding.sm};
  font-size: ${({ theme }) => theme.layout.button.fontSize};
  font-weight: 400;
  color: ${({ theme }) => theme.mode.button.secondaryTextColor};
  border: 1px solid transparent;
  border-color: ${({ theme }) => theme.mode.button.secondaryBorderColor};
  border-radius: 0px;
  background: ${({ theme }) => theme.mode.button.secondaryBgColor};
  display: flex;
  align-items: center;
  box-shadow: none;
  svg {
    margin-right: calc(${({ theme }) => theme.layout.margin.sm} / 2);
    font-size: ${({ theme }) => theme.layout.button.iconSize};
  }
  ${IconStyles} {
    svg {
      font-size: 16px;
    }
  }
  .anticon {
    margin-right: calc(${({ theme }) => theme.layout.margin.sm} / 2);
  }
  &:hover {
    color: ${({ theme }) => theme.mode.button.secondaryTextColor};
    background-color: ${({ theme }) => theme.mode.button.secondaryBgColorHover};
    border-color: ${({ theme }) => theme.mode.button.secondaryBorderColorHover};
  }
  &:focus {
    color: ${({ theme }) => theme.mode.button.secondaryTextColor};
    background-color: ${({ theme }) => theme.mode.button.secondaryBgColorFocus};
    border-color: ${({ theme }) => theme.mode.button.secondaryBorderColorFocus};
  }
  &:active {
    color: ${({ theme }) => theme.mode.button.secondaryTextColor};
    background-color: ${({ theme }) =>
      theme.mode.button.secondaryBgColorActive};
    border-color: ${({ theme }) =>
      theme.mode.button.secondaryBorderColorActive};
  }
  &.ant-btn-loading {
    .ant-btn-loading-icon {
      svg {
        font-size: 16px;
        color: ${({ theme }) => theme.mode.button.secondaryTextColor};
        animation: loadingCircle 1s linear infinite;
        margin-right: ${({ theme }) => theme.layout.margin.sm};
      }
      .anticon-spin {
        display: block;
        animation: none;
      }
    }
  }
  &[disabled] {
    color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
    background-color: ${({ theme }) => theme.mode.button.buttonBgColorDisabled};
    border-color: ${({ theme }) => theme.mode.button.buttonBorderColorDisabled};
    &:hover,
    &:focus,
    &:active {
      color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
      background-color: ${({ theme }) =>
        theme.mode.button.buttonBgColorDisabled};
      border-color: ${({ theme }) =>
        theme.mode.button.buttonBorderColorDisabled};
    }
    &[disabled] {
      svg {
        color: ${({ theme }) => theme.mode.button.buttonTextColorDisabled};
      }
    }
  }
  &.ant-btn-primary {
    ${primaryButton}
  }
  &.ant-btn-default {
    ${secondaryButton}
  }
  &.ant-btn-background-ghost {
    ${ghostButton}
  }
  &.ant-btn-link {
    ${linkButton}
  }
  &.ant-btn-dangerous {
    ${dangerButton}
  }
  &.ant-btn-icon-only {
    ${iconButton}
  }
  &.ant-btn-dashed {
    ${dashedButton}
  }
  &.ant-btn-text {
    ${textButton}
  }
`;

export const Button = styled<React.FC<ButtonProps>>(AntButton)`
  ${defaultButton}
  & + .ant-btn {
    margin-left: 8px;
  }
  &.ant-btn-block {
    width: 100%;
    justify-content: center;
  }
  &.ant-btn-circle {
    width: 32px;
    height: 32px;
    text-align: center;
    border-radius: 50% !important;
    padding: 0px !important;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.ant-btn-circle-outline {
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.mode.colors.primary};
    text-align: center;
    border-radius: 50% !important;
    padding: 0px !important;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  }
  &.ant-btn-round {
    padding: 0px 16px;
    border-radius: 32px;
  }
  &.ant-btn-sm {
    height: 24px;
    padding: 0px 8px;
    font-size: 14px;
    border-radius: 0px;
    &.ant-btn-circle {
      width: 24px;
      height: 24px;
      text-align: center;
      border-radius: 50% !important;
      padding: 0px !important;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &.ant-btn-circle-outline {
      width: 24px;
      height: 24px;
      text-align: center;
      border-radius: 50% !important;
      padding: 0px !important;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
    }
    &.ant-btn-round {
      padding: 0px 8px;
      border-radius: 24px;
    }
  }
  &.ant-btn-lg {
    height: 40px;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 0px;
    font-weight: 400;
    &.ant-btn-circle {
      width: 40px;
      height: 40px;
      text-align: center;
      border-radius: 50% !important;
      padding: 0px !important;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &.ant-btn-circle-outline {
      width: 40px;
      height: 40px;
      text-align: center;
      border-radius: 50% !important;
      padding: 0px !important;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
    }
    &.ant-btn-round {
      padding: 0px 24px;
      border-radius: 40px;
    }
  }
`;
