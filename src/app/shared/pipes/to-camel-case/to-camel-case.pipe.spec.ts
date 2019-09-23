import { ToCamelCasePipe } from './to-camel-case.pipe';

describe('ToCamelCasePipe', () => {
  it('create an instance', () => {
    const pipe = new ToCamelCasePipe();
    expect(pipe).toBeTruthy();
  });
});
