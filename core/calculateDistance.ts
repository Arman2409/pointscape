const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
  const xDistance = Math.abs(x1 - x2);
  const yDistance = Math.abs(y1 - y2);
  const distance = Math.sqrt(xDistance ** 2 + yDistance ** 2);
  return distance;
}

export default calculateDistance;