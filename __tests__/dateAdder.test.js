const dateAdder = require('../challenges/dateAdder/dateAdder');

describe('dateAdder Testing', () => {

  it('Can successfully add seconds', () => {
  const date = new Date(2019, 1, 0, 0, 0, 0, 0);
  const diff = '10s';
  const result = dateAdder(date, diff)
  expect(result).toEqual(new Date(2019, 1, 0, 0, 0, 10, 0));
  });

  it('Can successfully add minutes', () => {
    const date = new Date(2019, 1, 0, 0, 0, 0, 0);
    const diff = '10m';
    const result = dateAdder(date, diff)
    expect(result).toEqual(new Date(2019, 1, 0, 0, 10, 0, 0));
    });
  
  it('Can successfully add hours', () => {
    const date = new Date(2019, 1, 0, 0, 0, 0, 0);
    const diff = '10h';
    const result = dateAdder(date, diff)
    expect(result).toEqual(new Date(2019, 1, 0, 10, 0, 0, 0));
    });
  
  it('Can successfully add days', () => {
    const date = new Date(2019, 1, 0, 0, 0, 0, 0);
    const diff = '10d';
    const result = dateAdder(date, diff)
    expect(result).toEqual(new Date(2019, 1, 10, 0, 0, 0, 0));
    });
  
  it('Can successfully add weeks', () => {
    const date = new Date(2019, 1, 0, 0, 0, 0, 0);
    const diff = '10w';
    const result = dateAdder(date, diff)
    expect(result).toEqual(new Date(2019, 3, 11, 0, 0, 0, 0));
    });
  
  it('Can successfully add Months', () => {
    const date = new Date(2019, 1, 0, 0, 0, 0, 0);
    const diff = '10M';
    const result = dateAdder(date, diff)
    expect(result).toEqual(new Date(2019, 11, 1, 0, 0, 0, 0));  
    });
  
  it('Can successfully add days', () => {
    const date = new Date(2019, 1, 0, 0, 0, 0, 0);
    const diff = '10y';
    const result = dateAdder(date, diff)
    expect(result).toEqual(new Date(2029, 1, 0, 0, 0, 0, 0));  
    });
});