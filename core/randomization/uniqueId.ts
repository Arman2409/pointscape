const uniqueId = (others?: string[]): string => {
  const newId = crypto.randomUUID();
  if (others) {
    let isTaken:boolean = false;
    // Check if the  id exists in others array, if so generate a new one until it's not taken anymore
    others.forEach((id) => {
      if (newId === id) isTaken = true;
    })
    if (isTaken) return uniqueId(others);
    return newId;
  }
  return newId;
}

export default uniqueId;