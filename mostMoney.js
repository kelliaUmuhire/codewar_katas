function mostMoney(students) {
  students = students.map((s) => {
    return { name: s.name, money: s.fives * 5 + s.tens * 10 + s.twenties * 20 };
  });
  return students.every((s) => s.money === students[0].money) &&
    students.length > 1
    ? "all"
    : students.sort((a, b) => b.money - a.money)[0].name;
}
