import { resolveDataAction } from '@my-scope/others.hooks';
import { makeAutoObservable } from 'mobx';

import { ButtonProps } from './button';

interface ButtonViewModel extends ButtonProps {}

class ButtonViewModel {
  constructor(props: ButtonProps) {
    Object.assign(this, props);
    makeAutoObservable(this);
  }

  handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (this.onClick) {
      await resolveDataAction(this.onClick, e);
    }
  };
}

export default ButtonViewModel;
