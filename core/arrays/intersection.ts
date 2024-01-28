const intersection = (arr1: any[], arr2: any[]) => {
    return arr1.filter(value => arr2.includes(value));
}

export default intersection;