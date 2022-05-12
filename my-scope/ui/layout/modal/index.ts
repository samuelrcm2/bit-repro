import AntModal from 'antd/lib/modal';

import Modal from './modal';
import Confirm from './modal-confirm';

export default Object.assign(Modal, {
  info: AntModal.info,
  success: AntModal.success,
  error: AntModal.error,
  warn: AntModal.warn,
  warning: AntModal.warning,
  confirm: Confirm,
});

export type { ModalProps } from './modal';
