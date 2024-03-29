/**
 * получить состояние клетки
 * @param field {number[][]} - состояние поля
 * @param x {number} - номер столбца
 * @param y {number} - номер строки
 * @return number
 */
export function getCellState(field: number[][], x: number, y: number): number {
  const row = field[y];
  if (row === undefined) {
    return 0;
  }
  const cell = row[x];
  if (cell === undefined) {
    return 0;
  }
  return cell;
}
