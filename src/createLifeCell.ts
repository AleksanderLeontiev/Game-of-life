/* eslint-disable no-param-reassign */
import { createField } from "./createField";
import { drawField } from "./drawField";
import { getNextState } from "./getNextState";
import { isAlive } from "./isAlive";
import { transformField } from "./transormField";

/**
 * Создание игры Жизнь
 * @param sizeX {number} - число колонок
 * @param sizeY {number} - число строк
 * @param htmlElement {HTMLElement} - элемент, в котором будет отрисована игра
 * @returns void
 */

export function createGameOfLife(
  sizeX: number,
  sizeY: number,
  htmlElement: HTMLElement
): void {
  let gameIsRunning = false;
  let timer: NodeJS.Timeout;
  const htmlEl = htmlElement;
  let sizeInputX = sizeX;
  let sizeInputY = sizeY;

  htmlEl.innerHTML = `<div class="field-wrapper"></div><button>Start</button></div>
  <input type='range' id='speedRangeSlider' name='speedRangeSlider' min='0' max='900' value='500' step='100'>
  <input id='numberX' type='number' min='1' max='50' value=${sizeX} step='1'>
  <input id='numberY' type='number' min='1' max='50' value=${sizeY} step='1'>
  <button class='butField'>fieldSize</button>
 <br><br>
 <div>Живая клетка<div style="width:10px;height:10px;border:1px solid #03120b; background: #03120b">
</div></div>
 <div>Мертвая клетка<div style="width:10px;height:10px;border:1px solid #03120b; background: cornsilk">
</div></div>
 <div>Обреченная на смерть клетка<div style="width:10px;height:10px;border:1px solid #03120b; background: #0000FF">
</div></div>`;
  let speed = 1000;

  const fieldWrapper = htmlElement.querySelector(
    ".field-wrapper"
  ) as HTMLDivElement;

  const button = htmlElement.querySelector("button") as HTMLButtonElement;
  const speedRangeSlider = htmlElement.querySelector(
    "#speedRangeSlider"
  ) as HTMLInputElement;

  let field = createField(sizeX, sizeY);

  const cellClickHandler = (x: number, y: number) => {
    field[y][x] = Number(!field[y][x]);

    drawField(fieldWrapper, field, cellClickHandler);
  };

  drawField(fieldWrapper, field, cellClickHandler);

  // Отрисовать поле заданного размера
  // При клике по ячейке поля
  // - поменять его состояние
  // - перерисовать поле
  function stopGame(massage?: string) {
    const myMessage = massage || "Игра остановлена";
    gameIsRunning = false;
    // - поменять надпись на `start`
    button.innerHTML = "Start";
    clearInterval(timer);
    alert(myMessage);
  }
  function startGame() {
    // При клике по кнопке старт
    // - поменять надпись на `Stop`
    gameIsRunning = true;
    button.innerHTML = "Stop";
    // В таймере обновления поля
    // - посчитать новое состояние поля
    // - отрисовать новое состояние поля
    // - проверить, что есть живые клетки
    // - если живых клеток нет
    //    - остановить таймер
    //    - вывести сообщение
    timer = setInterval(() => {
      // перекинуть поле
      const currentField = JSON.parse(JSON.stringify(field));
      field = getNextState(currentField);
      const nextField = getNextState(field);
      const transformedField = transformField(field, nextField);
      drawField(fieldWrapper, transformedField, cellClickHandler);

      if (nextField.toString() === currentField.toString()) {
        stopGame("Игра зациклена");
      }

      if (!isAlive(field)) {
        alert("Все клетки погибли");
        stopGame();
      }
    }, speed);

    speedRangeSlider.addEventListener("change", (): void => {
      clearInterval(timer);
      const sliderValue = Number(speedRangeSlider.value);
      speed = 1000 - sliderValue;
      startGame();
    });
  }
  const inputX = htmlElement.querySelector("#numberX") as HTMLInputElement;
  const inputY = htmlElement.querySelector("#numberY") as HTMLInputElement;
  const butField = htmlElement.querySelector(".butField");
  butField?.addEventListener("click", () => {
    sizeInputX = Number(inputX.value);
    sizeInputY = Number(inputY.value);
    if (
      sizeInputY >= 1 &&
      sizeInputX >= 1 &&
      sizeInputY <= 100 &&
      sizeInputX <= 100
    ) {
      field = createField(sizeInputX, sizeInputY, field);
      drawField(fieldWrapper, field, cellClickHandler);
    } else {
      alert("Введите число от 1 до 50");
    }
  });

  button.addEventListener("click", () => {
    if (!gameIsRunning) {
      startGame();
    } else {
      stopGame();
    }
  });
}
