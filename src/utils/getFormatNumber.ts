import { isNullOrUndefined } from './isNullOrUndefined';

export interface GetFormatNumberProps {
  value: number | string | null | undefined;
  localization?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  endText?: string;
}

export function getFormatNumber({
  value,
  localization = 'ru',
  minimumFractionDigits = 2,
  maximumFractionDigits = 2,
  endText,
}: GetFormatNumberProps) {
  if (isNullOrUndefined(value)) return value;

  const numberFormat = new Intl.NumberFormat(localization, { minimumFractionDigits, maximumFractionDigits });
  const formatEndText = !isNullOrUndefined(endText) ? ` ${endText}` : '';

  if (typeof value === 'string') {
    return `${numberFormat.format(Number(value.replace(',', '.')))}${formatEndText}`;
  }

  return `${numberFormat.format(value)}${formatEndText}`;
}
