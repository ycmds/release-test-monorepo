export function plus(...args: number[]): number {
  return args.reduce((sum, val) => sum + val, 0);
}

export default { plus };
