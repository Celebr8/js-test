const averageAge = require('../averageAge');
const expect = require('chai').expect;

const data = {
  group_a: [
    {
      name: 'Christopher',
      online: false,
      age: 44,
    },
    {
      name: 'Marc',
      online: true,
      age: 23,
    },
    {
      name: 'Sarah',
      online: true,
      age: 53,
    },
  ],
  group_b: [
    {
      name: 'Stephy',
      online: true,
      age: 29,
    },
    {
      name: 'William',
      online: true,
      age: 12,
    },
    {
      name: 'John',
      online: true,
      age: 33,
    },
  ],
};

const wrongData = {
  group_c: [
    {
      name: 'Donald',
      online: false,
    },
  ],
};

describe('averageAge', () => {
  it('should find the rounded average age for everybody', () => {
    expect(averageAge(data)).to.be.equal(32);
  });

  it('should find the rounded average age for only one group', () => {
    expect(averageAge(data, 'group_a')).to.be.equal(40);
  });

  it('should throw if the datas are malformed', () => {
    expect(averageAge({...data, ...wrongData})).to.throw;
  });
});
