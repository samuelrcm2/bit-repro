import React from 'react';

import PlasmaThemeProvider from '@my-scope/themes.theme-provider';
import { render, screen } from '@testing-library/react';

import { Avatar } from './index';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

it('create default avatar', () => {
  render(
    <PlasmaThemeProvider>
      <Avatar />
    </PlasmaThemeProvider>
  );
  const avatar = screen.getByTestId('avatar');
  expect(avatar).toBeInTheDocument();
});

it('create avatar with initials', () => {
  render(
    <PlasmaThemeProvider>
      <Avatar text="SM" />
    </PlasmaThemeProvider>
  );
  const text = screen.getByText('SM');
  expect(text).toBeInTheDocument();
});

it('create avatar with colored background', () => {
  render(
    <PlasmaThemeProvider>
      <Avatar text="SM" backgorundColor="red" />
    </PlasmaThemeProvider>
  );
  const avatar = screen.getByTestId('avatar');
  expect(avatar.style.backgroundColor === 'rgb(225, 8, 20)').toBeTruthy();
});
