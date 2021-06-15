/**
 * проверка что есть живые клетки
 * @return boolean
 * @param field
 */
export function isAlive(field: number[][]): boolean {
  for (let i = 0; i < field.length; i++) {
    const row = field[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (cell) {
        return true;
      }
    }
  }
  return false;
}
