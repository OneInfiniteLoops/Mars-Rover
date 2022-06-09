const index = require('./index')

const request = require('supertest')

describe('Mars Rover', () => {
  describe('the API exists', () => {
    test('should have move endpoint', async () => {
      return request(index)
        .post('/move')
        .expect(201)
        .then(res => {
          const {body} = res
          expect(body).toMatchObject({position: expect.any(String)})
        })
    });
  });
});
