import { plus } from '@macrobe/plus';


export function multiply(a: number, b: number): number {
  // Обработка специальных случаев
  if (b === 0 || a === 0) return 0;
  if (b === 1) return a;
  if (a === 1) return b;

  // Определяем знак результата
  const isNegative = (a < 0 && b > 0) || (a > 0 && b < 0);

  // Работаем с абсолютными значениями
  const absA = Math.abs(a);
  const absB = Math.abs(b);

  // Используем меньшее число для количества итераций
  const [multiplier, multiplicand] = absA < absB ? [absA, absB] : [absB, absA];

  // Умножение через повторное сложение
  let result = 0;
  for (let i = 0; i < multiplier; i++) {
    result = plus(result, multiplicand);
  }

  // Применяем знак
  return isNegative ? -result : result;
}

export default { multiply };
