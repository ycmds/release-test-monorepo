import { plus } from '@macrobe/plus';

export function formatSum(a: number, b: number): string {
  return `${a} + ${b} = ${plus(a, b)}`;
}

export default { formatSum };
