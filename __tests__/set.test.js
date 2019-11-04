const { Set } = require('../challenges/set/set');

describe('Set Methods', () => {
  it('creates a new set', () =>{
    const data = new Set([1, 2, 3]);
    expect(data.array).toEqual([1, 2, 3]);
  });

  it('should add data to a set', () =>{
    const data = new Set([1, 2, 3]);
    data.add(4);
    expect(data.array).toEqual([1, 2, 3, 4]);
  });
  
  it('prevents dupicates when adding', () =>{
    const data = new Set([1, 2, 3]);
    data.add(1);
    expect(data.array).toEqual([1, 2, 3]);
  });
  
  it('removes a vale from the set', () =>{
    const data = new Set([1, 2, 3]);
    data.remove(1);
    expect(data.array).toEqual([2, 3]);
  });
  
  it('checks if the set has the value', () =>{
    const data = new Set([1, 2, 3]);
    const check = data.has(1);
    expect(check).toEqual(true);
  });
  
  it('should return an instance of the intersection', () =>{
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    const intersection = set1.intersection(set2);
    expect(intersection.array).toEqual([1, 2]);
  });
  
  it('should return an instance of the union', () =>{
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    const union = set1.union(set2);
    expect(union.array).toEqual([1, 2, 3, 4]);
  });
  
  it('should return an instance of the difference', () =>{
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 5]);
    const difference = set1.difference(set2);
    expect(difference.array).toEqual([3, 5]);
  });
  
  it('shour return an static of intersection', () =>{
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    const result = Set.intersection(set1, set2);
    expect(result.array).toEqual([1, 2]);
  });
  
  it('should return static union', () =>{
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    const result = Set.union(set1, set2);
    expect(result.array).toEqual([1, 2, 3, 4]);
  });
  
  it('should return static difference', () =>{
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    const result = Set.difference(set1, set2);
    expect(result.array).toEqual([3, 4]); 
  });
});