const removeDuplicates = (
    arr: unknown[]
) => {
    return [...new Set(arr)];
}

export default removeDuplicates;