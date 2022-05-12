import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import { observer } from 'mobx-react';

import * as styled from './tooltip.styles';
import { TooltipViewModel } from './tooltip.view-model';

interface Props {
  viewModel: TooltipViewModel;
}

export function Tooltip(props: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { getPopupContainer: customContainer, ...tooltipProps } =
    props.viewModel;

  return (
    <>
      <styled.Tooltip
        getPopupContainer={
          customContainer ?? (() => containerRef.current as HTMLDivElement)
        }
        {...tooltipProps}
      />
      {!customContainer &&
        ReactDOM.createPortal(
          <styled.TooltipContainer ref={containerRef} />,
          document.body
        )}
    </>
  );
}

export default observer(Tooltip);
