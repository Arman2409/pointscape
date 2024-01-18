const intersection = (arr1:any[], arr2:any[]) => arr1.filter(value => arr2.includes(value));

export default intersection;