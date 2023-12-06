import { describe, it, expect } from 'vitest';
import { daysDiffCalculate } from './dateUtil';

describe('daysDiffCalculate', () => {
    it('should return the correct number of days between two dates', () => {
        const startDate = '2023-01-01T09:00';
        const endDate = '2023-01-02T08:00';

        const expectedDifference = 1;
        const actualDifference = daysDiffCalculate(endDate, startDate);

        expect(actualDifference).toBe(expectedDifference);
    });
});
