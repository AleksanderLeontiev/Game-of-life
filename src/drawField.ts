/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * отрисовка поля
 * @param field {number[][]} - состояние поля
 * @param htmlElement {HTMLElement} - элемент, в котором будет отрисовано поле
 * @param onCellClick {(x: number, y: number) => void}
 * @returns void
 */

export function drawField(
  htmlElement: HTMLDivElement,
  field: number[][],
  onCellClick: (x: number, y: number) => void
): void {
  const rowIterator = (row: number[], rowIndex: number) =>
    `<tr>${row
      .map((cell: number, columnIndex: number) => {
        if (cell === 1) {
          return `<td
        data-x=${columnIndex}
        data-y=${rowIndex}
        class="cell alive"
        style="background-color:#03120b; height:40px; width:40px;"></td>`;
        }
        if (cell === 2) {
          return `<td 
                      data-x=${columnIndex}
                      data-y=${rowIndex}
                      class="cell shouldDie" 
                      style="background-color:#0000FF; height:40px; width:40px;">
                  </td>`;
        }
        return `<td
      data-x=${columnIndex}
      data-y=${rowIndex}
      class="cell dead"
      style="background-color:#FFFFFF; height:40px; width:40px;"></td>`;
      })
      .join("")}</tr>`;

  const table = `<table border=10px>${field.map(rowIterator).join("")}</table>`;

  // eslint-disable-next-line no-param-reassign
  htmlElement.innerHTML = table;
  const tableOnHTML = htmlElement.querySelector("table");

  if (!tableOnHTML) {
    return;
  }

  tableOnHTML.addEventListener("click", (ev) => {
    ev.preventDefault();
    const clickedElement = ev.target as HTMLElement;

    const x = clickedElement.getAttribute("data-x");
    const y = clickedElement.getAttribute("data-y");
    if (Number(x) >= 1 && Number(y) >= 1) {
      onCellClick(Number(x), Number(y));
    }
  });
}
