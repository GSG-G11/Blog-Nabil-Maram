const dbBuild = require('../database/config/build');
const connection = require('../database/config/connection');

const getData = require('../database/queries/getData');
const postData = require('../database/queries/postData');


beforeEach(() => dbBuild());

afterAll(() => connection.end());


test('insert a feedback test', () => {
  return postData('test', 'content test', 1)
    .then((data) => {
      expect(data.rows[0].title).toBe('test');
    })
});

test('get the static users', () => {
  return getData()
    .then((data) => {
       expect(data.rows.length).toBe(0);
    })
});