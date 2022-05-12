import { makeAutoObservable } from 'mobx';

import { AvatarProps } from './avatar';
import theme from './themes';

interface AvatarViewModel extends AvatarProps {}

class AvatarViewModel {
  colors: [string, string][];
  defaultColor: string;
  constructor(props: AvatarProps) {
    this.colors = Object.entries(theme.modes.dark.avatar.colors);
    this.defaultColor = theme.modes.dark.avatar.colors.default;
    Object.assign(this, props);
    makeAutoObservable(this);
  }

  getCssStyles = (): React.CSSProperties => {
    const backGroundColor = this.getBackgroundColor();
    if (this.text)
      return {
        backgroundColor: backGroundColor || this.getRandomBackgroundColor(),
      };

    return {
      backgroundColor: backGroundColor || this.defaultColor,
    };
  };

  getBackgroundColor = (): string | undefined => {
    if (this.backgorundColor) return undefined;

    const selectedColor = this.colors.find(
      (c) => c[0] === this.backgorundColor
    );
    return selectedColor ? selectedColor[1] : undefined;
  };

  getRandomBackgroundColor = (): string => {
    const random = Math.ceil(Math.random() * this.colors.length - 1);
    return this.colors[random][1];
  };
}

export default AvatarViewModel;
