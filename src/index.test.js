const cc = require('./index');

describe('class-catinator', () => {
  it('concats strings', () => {
    expect(cc(['foo', 'bar'])).toBe('foo bar');
  })
});
