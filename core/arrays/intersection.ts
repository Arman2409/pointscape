const intersection = (arr1: unknown[], arr2: unknown[]) => {
    return arr1.filter((value) => arr2.includes(value));
};

export default intersection;
