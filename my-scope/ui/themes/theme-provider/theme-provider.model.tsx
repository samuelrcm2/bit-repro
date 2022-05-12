import React, { createContext, useContext } from 'react';

import { makeAutoObservable } from 'mobx';

import { BasicThemeProviderProps, ModeType, SizeType } from './theme-provider';

// declare interfaces related to state variables here...
export interface ThemeProviderModel extends BasicThemeProviderProps {}

export class ThemeProviderModel {
  // include state variables here...
  selectedMode: ModeType;
  selectedSize: SizeType;

  constructor(props: BasicThemeProviderProps) {
    Object.assign(this, props);
    this.selectedMode = props.selectedMode ?? 'light';
    this.selectedSize = props.selectedSize ?? 'medium';
    makeAutoObservable(this);
  }
}

const ThemeProviderContext = createContext<ThemeProviderModel | null>(null);

function ThemeProviderModelProvider({
  themeProviderModel,
  children,
}: React.PropsWithChildren<{ themeProviderModel: ThemeProviderModel }>) {
  return (
    <ThemeProviderContext.Provider value={themeProviderModel}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

function useThemeProviderModel() {
  return useContext(ThemeProviderContext);
}

export { ThemeProviderModelProvider, useThemeProviderModel };

export default ThemeProviderModel;
