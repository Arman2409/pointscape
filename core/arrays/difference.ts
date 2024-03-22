const difference = (
    arr1: any[],
    arr2: any[]): any[] => {
    return arr1.filter(value => !arr2.includes(value));
}

export default difference;