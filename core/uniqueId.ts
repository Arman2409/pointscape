const uniqueId = (others?: string[]): string => {
  const newId = crypto.randomUUID();
  if (others) {
    let isTaken:boolean = false;
    others.forEach((id) => {
      if (newId === id) isTaken = true;
    })
    if (isTaken) return uniqueId(others);
    return newId;
  }
  return newId;
}

export default uniqueId;