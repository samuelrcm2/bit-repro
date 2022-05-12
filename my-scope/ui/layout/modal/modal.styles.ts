import { defaultButtonStyles } from '@my-scope/general.button';
import AntModal, { ModalProps } from 'antd/lib/modal/Modal';
import styled, { css } from 'styled-components';

export const modalStyle = css`
  color: ${({ theme }) => theme.mode.modal.textColor};
  font-size: ${({ theme }) => theme.layout.modal.fontSize};
  line-height: normal;
  top: 100px;
  max-width: calc(100vw - 32px);
  padding-bottom: ${({ theme }) => theme.layout.padding.sm};
  .ant-modal-content {
    background-color: ${({ theme }) => theme.mode.modal.backgroundColor};
    border-radius: 0px;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
      0 9px 28px 8px rgb(0 0 0 / 5%);
    .ant-modal-close {
      color: ${({ theme }) => theme.mode.modal.iconColor};
      .ant-modal-close-x {
        width: ${({ theme }) => theme.layout.modal.height};
        height: ${({ theme }) => theme.layout.modal.height};
        font-size: ${({ theme }) => theme.layout.modal.iconSize};
        line-height: ${({ theme }) => theme.layout.modal.height};
        svg {
          font-size: ${({ theme }) => theme.layout.modal.iconSize};
          color: ${({ theme }) => theme.mode.modal.iconColor};
        }
        .anticon {
          &.anticon-close {
            &.ant-modal-close-icon {
              svg {
                display: none;
              }
              &::before {
                content: '\\eb69';
                font-family: 'IconFont';
                display: block;
                font-size: 14px;
                font-weight: 700;
                color: #161616;
              }
            }
          }
        }
      }
    }
    .ant-modal-header {
      padding: 0px ${({ theme }) => theme.layout.padding.sm};
      color: ${({ theme }) => theme.mode.modal.textColor};
      background: ${({ theme }) => theme.mode.modal.backgroundColor};
      border-bottom: 0px;
      border-radius: 0px;
      height: ${({ theme }) => theme.layout.modal.height};
      display: flex;
      align-items: center;
      .ant-modal-title {
        color: ${({ theme }) => theme.mode.modal.titleColor};
        font-weight: 500;
        font-size: ${({ theme }) => theme.layout.modal.fontSize};
        line-height: normal;
        text-transform: none;
      }
    }
    .ant-modal-body {
      padding: ${({ theme }) => theme.layout.padding.sm};
      font-size: ${({ theme }) => theme.layout.modal.fontSize};
      line-height: normal;
      .ant-modal-confirm-body {
        min-height: 32px;
        margin-right: 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        svg {
          color: #fabd14;
          width: 36px;
          font-size: 36px;
          margin-right: 8px;
        }
      }
      .ant-modal-confirm-title {
        color: ${({ theme }) => theme.mode.modal.text};
        font-weight: 500;
        font-size: 16px;
        line-height: normal;
        text-transform: none;
      }
      .ant-modal-confirm-btns {
        display: flex;
        align-items: center;

        justify-content: flex-end;
        text-align: right;
        background: transparent;
        border-top: 0px;
        border-radius: 0px;
        .ant-btn {
          ${defaultButtonStyles}
        }
      }
    }
    .ant-modal-header + .ant-modal-body {
      padding-top: 0px;
    }
    .ant-modal-footer {
      height: ${({ theme }) => theme.layout.modal.height};
      display: flex;
      align-items: center;
      padding: 0px ${({ theme }) => theme.layout.padding.sm};
      justify-content: flex-end;
      text-align: right;
      background: transparent;
      border-top: 0px;
      border-radius: 0px;
      .ant-btn {
        ${defaultButtonStyles}
      }
    }
  }
`;

export const Modal: typeof AntModal = styled<React.FC<ModalProps>>(AntModal)`
  ${modalStyle}
`;
