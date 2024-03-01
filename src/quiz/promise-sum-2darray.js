const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

async function calculateSum() {
    try {
        const rowSums = await Promise.all(rowSumPromises);
        let sum = 0;
        rowSums.forEach((rowSum) => {
            sum += rowSum;
        });
        return 'done';
    } catch (error) {
        console.log(error);
        return 'failed';
    }
}
