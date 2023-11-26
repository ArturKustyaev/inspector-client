import { format, isValid, parseISO } from 'date-fns';

interface GetFormatDateProps {
  date: Date | string | null | undefined;
  fnsFormatPattern?: string;
  withTime?: boolean;
}

export function getFormatDate({
  date,
  fnsFormatPattern = 'dd.MM.yyyy',
  withTime = false,
}: GetFormatDateProps): string | null {
  try {
    const dateFormatString = `${fnsFormatPattern}${withTime ? ' HH:mm' : ''}`;

    if (!date) return null;

    if (date instanceof Date) {
      return format(date, dateFormatString);
    }

    if (typeof date === 'string') {
      const parsedStringDate = new Date(date);

      if (isValid(parsedStringDate)) {
        return format(parseISO(date), dateFormatString);
      } else {
        throw new Error(`Invalid format date: ${date}`);
      }
    }

    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
}
