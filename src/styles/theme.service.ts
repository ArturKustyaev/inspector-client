import { theme } from './theme';
import _ from 'lodash';

export function getPaletteColor(color: string): string {
  return _.get(theme.palette, color) ?? color;
}
