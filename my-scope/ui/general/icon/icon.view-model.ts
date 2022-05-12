import * as iconsList from '@mui/icons-material';
import SvgIcon from '@mui/material/SvgIcon';
// import { EventEmitter } from '@my-scope/others.utils';
import { makeAutoObservable } from 'mobx';
import stringSimilarity from 'string-similarity';

import { IconProps } from './icon';
type SvgIconComponent = typeof SvgIcon;

interface IconViewModel extends IconProps {}

class IconViewModel {
  visible: boolean;
  constructor(props: IconProps) {
    Object.assign(this, props);
    this.visible = false;
    makeAutoObservable(this);
  }

  getMuiIcon = (): SvgIconComponent => {
    const iconsNames = Object.keys(iconsList);
    const matches = stringSimilarity.findBestMatch(this.name, iconsNames);
    const bestMathch = matches.bestMatch.target;
    return iconsList[bestMathch as keyof typeof iconsList];
  };

  setVisible = (isVisible: boolean) => {
    this.visible = isVisible;
  };

  getCssStyle = (): React.CSSProperties => {
    return { cursor: this.onClick && 'pointer', ...this.style };
  };

  handleClick = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.setVisible(false);

    setTimeout(() => {
      if (this.onClick) this.onClick(e);
      // if (this.clickEventType) EventEmitter.emit(this.clickEventType);
    }, 100);
  };
}
export default IconViewModel;
