import { expect, assert } from 'chai';
import insertTask from '../imports/api/tasks/methods/create'

describe('test', function() {
  it('should pass', () => {
    expect('plutio').to.eq('plutio');
  });
});

//Assertion Style
describe('Task Service', function () {
  it('Should be able to create a task', function () {
      const postId = insertTask({title: 'Hello'})
      assert.isString(postId._id);
  })
})
