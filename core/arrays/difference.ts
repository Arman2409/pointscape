const difference = <T>(arr1: T[], arr2: T[]): T[] => {
    return arr1.filter((value) => !arr2.includes(value));
};

export default difference;
