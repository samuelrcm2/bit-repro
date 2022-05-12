import { Avatar as AntdAvatar, AvatarProps } from 'antd';
import styled from 'styled-components/macro';

export const Avatar = styled<React.FC<AvatarProps>>(AntdAvatar)`
  .ant-avatar {
    width: ${({ theme }) => theme.size.avatar.width};
    height: ${({ theme }) => theme.size.avatar.height};
  }
`;

export const Composition = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
