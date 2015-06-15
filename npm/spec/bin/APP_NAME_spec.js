import {exec} from 'node-promise-es6/child-process';

describe('APP_NAME', function() {
  it('outputs "3...2...1...Hello World!"', async function() {
    const {stdout} = await exec('APP_NAME');
    expect(stdout.trim()).toBe('3...2...1...Hello World!');
  });
});
