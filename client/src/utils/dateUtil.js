export function daysDiffCalculate(endDate, startDate) {
    const dayR = new Date(endDate);
    const dayS = new Date(startDate);
    const result = (dayR - dayS) / (1000 * 3600 * 24);
    return Math.ceil(result);
}