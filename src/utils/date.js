export const calculateWeek = (date) => {
  const curr = new Date(date);
  const week = [];

  for (let i = 0; i <= 6; i++) {
    const first = curr.getDate() - curr.getDay() + i;
    const day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    week.push(day);
  }

  return { start: week[0], end: week[6] };
};

export const previousWeek = (date) => {
  return new Date(date).getTime() - 60 * 60 * 24 * 7 * 1000;
};

export const nextWeek = (date) => {
  return new Date(date).getTime() + 60 * 60 * 24 * 7 * 1000;
};
