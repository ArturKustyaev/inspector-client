import DateRangeIcon from '@mui/icons-material/DateRange';
import { FC, ReactElement, forwardRef } from 'react';
import { StyledDatePicker } from './DatePicker.styles';
import { DatePickerProps } from './DatePicker.types';

export const DatePicker: FC<DatePickerProps> = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ slots, slotProps, ...restProps }, ref): ReactElement | null => {
    return (
      <StyledDatePicker
        ref={ref}
        maxDate={new Date('2099-12-31')}
        localeText={{
          fieldDayPlaceholder: () => 'дд',
          fieldMonthPlaceholder: () => 'мм',
          fieldYearPlaceholder: () => 'гггг',
        }}
        slots={{
          openPickerIcon: DateRangeIcon,
          ...slots,
        }}
        slotProps={{
          ...slotProps,
          textField: {
            spellCheck: false,
            ...slotProps?.textField,
          },
        }}
        {...restProps}
      />
    );
  },
);

DatePicker.displayName = 'DatePicker';
