const averageColor = (c1, c2) => {
  const toHex = (i) => Math.ceil(i).toString(16).padStart(2, '0');
  const fromHex = (i) => parseInt(i, 16);
  
  const average = (a, b) => ((fromHex(a) + fromHex(b)) / 2);
  
  const r = average(c1.substring(0, 2), c2.substring(0, 2));
  const g = average(c1.substring(2, 4), c2.substring(2, 4));
  const b = average(c1.substring(4, 6), c2.substring(4, 6));

  return `${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}