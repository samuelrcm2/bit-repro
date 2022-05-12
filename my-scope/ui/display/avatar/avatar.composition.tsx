import React from 'react';

import { Image } from '@my-scope/display.image';

import * as styled from './avatar.styles';
import { Avatar } from './index';
export const DefaultAvatar = () => {
  return (
    <styled.Composition>
      <Avatar />
      <Avatar backgorundColor="blue" />
      <Avatar backgorundColor="purple" />
      <Avatar backgorundColor="pink" />
      <Avatar backgorundColor="red" />
      <Avatar backgorundColor="orange" />
      <Avatar backgorundColor="lightgreen" />
      <Avatar backgorundColor="green" />
    </styled.Composition>
  );
};

export const NamedAvatar = () => {
  return (
    <styled.Composition>
      <Avatar backgorundColor="blue" text="SM" />
      <Avatar backgorundColor="purple" text="SM" />
      <Avatar backgorundColor="pink" text="SM" />
      <Avatar backgorundColor="red" text="SM" />
      <Avatar backgorundColor="orange" text="SM" />
      <Avatar backgorundColor="lightgreen" text="SM" />
      <Avatar backgorundColor="green" text="SM" />
    </styled.Composition>
  );
};

export const AvatarBySize = () => {
  return (
    <styled.Composition>
      <Avatar text="SM" />
      <Avatar text="SM" />
      <Avatar text="SM" />
      <Avatar shape="square" text="SM" />
      <Avatar shape="square" text="SM" />
      <Avatar shape="square" text="SM" />
    </styled.Composition>
  );
};

export const AvatarWithIcon = () => {
  return (
    <styled.Composition>
      <Avatar
        icon={
          <Image
            preview={false}
            width={32}
            height={32}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        }
      />
      <Avatar shape="square" text="SM" />
      <Avatar shape="square" text="SM" />
      <Avatar shape="square" text="SM" />
    </styled.Composition>
  );
};
