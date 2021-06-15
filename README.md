[![codecov](https://codecov.io/gh/AleksanderLeontiev/Game-of-life/branch/game/graph/badge.svg?token=VUMB5E2RCD)](https://codecov.io/gh/AleksanderLeontiev/Game-of-life)

## Приложение по игре Жизнь исполненное на TypeScript

механизм изменения размеров поля (два input поля (type number)), в тч на лету (при увеличении заполнение мертвыми клетками, при уменьшении просто уничтожения ячеек);
реализован механизм изменения скорости игры (input type=range);
реализована подсветка клеток, которые являясь живыми должны умереть в следующем поколени:
мертвые - белый цвет
живые - черный
обреченные на смерть - синие
