import { sum } from "../sum";

describe('sum', () => {
  it('returns correct sum if gets correct input values', () => {
    expect(sum(1.5, 2)).toBe(3.5); // TDD
  });
})