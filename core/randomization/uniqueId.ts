const uniqueId = (others?: string[]): string => {
    const newId = crypto.randomUUID();
    if (others?.includes(newId)) {
        return uniqueId(others);
    }
    return newId;
};

export default uniqueId;
