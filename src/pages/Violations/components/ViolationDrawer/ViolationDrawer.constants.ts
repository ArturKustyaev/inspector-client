import { ViolationStatus } from 'types'
import { BaseTextFieldProps } from 'ui-kit'

export const textFieldBaseProps: Pick<BaseTextFieldProps, 'size' | 'fullWidth'> = {
  size: 'small',
  fullWidth: true,
}

export const changeViolationStatusMessages: Record<ViolationStatus, string> = {
  completed: 'Успешно исполнена',
  coordination: 'Успешно отправлено на согласование',
  created: '',
  revision: '',
}
