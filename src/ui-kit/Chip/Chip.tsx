import { FC, ReactElement, forwardRef } from 'react';
import { StyledChip } from './Chip.styles';
import { ChipProps } from './Chip.types';

export const Chip: FC<ChipProps> = forwardRef<HTMLDivElement, ChipProps>(
  ({ color, ...props }, ref): ReactElement | null => {
    return <StyledChip ref={ref} $color={color} {...props} />;
  },
);

Chip.displayName = 'Chip';
