const chunk = <T>(array: T[], perChunk: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length / perChunk; i++) {
        const startIndex = i * perChunk;
        const newChunk = array.slice(startIndex, startIndex + perChunk);
        chunks.push(newChunk);
    }
    return chunks;
};

export default chunk;
