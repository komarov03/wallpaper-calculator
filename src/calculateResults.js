export const calculateResults = (room, roll, windows, doors, raport) => {
  console.log(
    `Room: ${room}, roll: ${roll}, windows: ${windows}, doors: ${doors}, raport: ${raport}`
  );

  // Пример расчета (замените на вашу логику)
  const wallArea =
    2 * (Number(room.length) + Number(room.width)) * Number(room.height); // Площадь стен
  const openingsArea =
    windows.reduce(
      (acc, window) => acc + Number(window.length) * Number(window.width),
      0
    ) +
    doors.reduce(
      (acc, door) => acc + Number(door.length) * Number(door.width),
      0
    ); // Площадь проемов
  const totalArea = wallArea - openingsArea; // Общая площадь оклейки
  const rollWithRapport = Number(roll) + Number(raport);
  const rollsNeeded = Math.ceil(totalArea / rollWithRapport);

  console.log(`Посчитанные значения 
    rollsNeeded ${rollsNeeded}, totalArea ${totalArea.toFixed(2)},
    wallArea ${wallArea.toFixed(2)}`);

  return {
    rolls: rollsNeeded,
    area: totalArea.toFixed(2),
    totalArea: wallArea.toFixed(2),
  };
};
