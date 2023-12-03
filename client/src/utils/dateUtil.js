export function daysDiffCalculate(endDate, startDate) {
    const dayR = new Date(endDate);
    const dayS = new Date(startDate);
    return (dayR - dayS) / (1000 * 3600 * 24);
}