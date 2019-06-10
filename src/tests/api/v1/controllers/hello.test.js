import request from 'supertest';

import app from '../../../../app';

test('should return 200 and Hello World message', (done) => {
  request(app)
    .get('/')
    .expect(200, 'Hello World')
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});
