import { FC, ReactElement, forwardRef } from 'react';
import { StyledBaseTextField } from './BaseTextField.styles';
import { BaseTextFieldProps } from './BaseTextField.types';

export const BaseTextField: FC<BaseTextFieldProps> = forwardRef<HTMLDivElement, BaseTextFieldProps>(
  ({ textAlign, placeholderTextAlign, InputLabelProps, ...props }, ref): ReactElement | null => {
    return (
      <StyledBaseTextField
        ref={ref}
        $textAlign={textAlign}
        $placeholderTextAlign={placeholderTextAlign}
        InputLabelProps={{ ...InputLabelProps, shrink: true }}
        {...props}
      />
    );
  },
);

BaseTextField.displayName = 'BaseTextField';
