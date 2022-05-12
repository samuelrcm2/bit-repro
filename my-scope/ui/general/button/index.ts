import Button from './button';
import {
  CancelButton,
  DeleteButton,
  EditButton,
  NewButton,
  ResetButton,
  SaveButton,
} from './customized-buttons';

export type { ButtonProps } from './button';
export type {
  ButtonCancelProps,
  ButtonDeleteProps,
  ButtonEditProps,
  ButtonNewProps,
  ButtonResetProps,
  ButtonSaveProps,
} from './customized-buttons';

export { defaultButton as defaultButtonStyles } from './button.styles';

export default Object.assign(Button, {
  Cancel: CancelButton,
  Delete: DeleteButton,
  Edit: EditButton,
  New: NewButton,
  Reset: ResetButton,
  Save: SaveButton,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;
