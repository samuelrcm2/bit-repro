import React, { useCallback } from 'react';

// import { navigate } from '@my-scope/components.context.router';
// import { resolveDataAction } from '@my-scope/components.hooks';
// import { Icon } from '@my-scope/general.icon';
// import { TranslatedText } from '@my-scope/others.translated-text';
// import Modal from "@my-scope/components.modal";

import Button, { ButtonProps } from './button';

export type ButtonCancelProps = ButtonProps;
export type ButtonDeleteProps = ButtonProps;
export type ButtonEditProps = ButtonProps;
export type ButtonNewProps = ButtonProps;
export type ButtonResetProps = ButtonProps;
export type ButtonSaveProps = ButtonProps;

export function CancelButton(props: ButtonCancelProps) {
  return <Button title="ui.commons.cancel" {...props} />;
}

export function EditButton(props: ButtonEditProps) {
  return <Button title="ui.commons.edit" {...props} />;
}

export function NewButton(props: ButtonNewProps) {
  return <Button title="ui.commons.new" type="primary" {...props} />;
}

export function ResetButton(props: ButtonResetProps) {
  return <Button title="ui.commons.reset" {...props} />;
}

export function SaveButton(props: ButtonSaveProps) {
  return <Button title="ui.commons.save" type="primary" {...props} />;
}

export function DeleteButton(props: ButtonDeleteProps) {
  const { onClick, goBack, ...buttonProps } = props;

  const handleDelete = useCallback<React.MouseEventHandler<HTMLElement>>(
    (e) => {
      // Modal.confirm({
      //   title: <TranslatedText textKey="ui.confirmation.delete.title" />,
      //   icon: <Icon name="info-circle" />,
      //   cancelText: <TranslatedText textKey="ui.commons.cancel" />,
      //   onOk: async () => {
      //     const { ok } = await resolveDataAction(onClick, e);
      //     // if (ok && goBack) navigate(-1);
      //   },
      // });
    },
    [goBack, onClick],
  );

  return (
    <Button
      title="ui.commons.delete"
      onClick={handleDelete}
      type="primary"
      {...buttonProps}
    />
  );
}
